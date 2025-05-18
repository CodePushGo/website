// Cloudflare Worker for Outrank Webhook

export default {
  async fetch(request, env, ctx) {
    console.log('Received request:', request.method, request.url)
    if (request.method !== 'POST') {
      console.log('Method not allowed:', request.method)
      return new Response('Method Not Allowed', { status: 405 })
    }

    const ACCESS_TOKEN = typeof env !== 'undefined' ? env.ACCESS_TOKEN : 'your_secure_access_token' // Use environment variable

    // Validate access token
    const authHeader = request.headers.get('Authorization')
    console.log('Authorization header present:', !!authHeader)
    if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.split(' ')[1] !== ACCESS_TOKEN) {
      console.log('Invalid access token or missing Bearer prefix')
      return new Response(JSON.stringify({ error: 'Invalid access token' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
    }

    const payload = await request.json()
    console.log('Received payload with event type:', payload.event_type)
    if (payload.event_type !== 'publish_articles') {
      console.log('Unsupported event type:', payload.event_type)
      return new Response(JSON.stringify({ error: 'Unsupported event type' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    // Process articles
    const articles = payload.data.articles
    console.log('Processing articles count:', articles.length)
    for (const article of articles) {
      console.log('Starting processing for article:', article.slug)
      await processArticle(article, env)
      console.log('Finished processing for article:', article.slug)
    }

    console.log('Webhook processing completed successfully')
    return new Response(JSON.stringify({ message: 'Webhook processed successfully' }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  },
}

async function processArticle(article, env) {
  const BLOG_DIR = 'src/content/blog/en/'
  const fileName = `${article.slug}.md`
  const filePath = `${BLOG_DIR}${fileName}`
  console.log('Preparing to create/update file:', filePath)

  // Create frontmatter
  const frontmatter = [
    '---',
    `slug: ${article.slug}`,
    `title: "${article.title.replace(/"/g, '\\"')}"`,
    `description: "${article.meta_description.replace(/"/g, '\\"')}"`,
    'author: Martin Donadieu',
    'author_image_url: https://avatars.githubusercontent.com/u/4084527?v=4',
    'author_url: https://github.com/riderx',
    `created_at: ${article.created_at}`,
    `updated_at: ${article.created_at}`,
    `head_image: ${article.image_url}`,
    `head_image_alt: "${article.title.replace(/"/g, '\\"')}"`,
    `keywords: "${article.tags.join(', ').replace(/"/g, '\\"')}"`,
    `tag: "${article.tags.join(', ').replace(/"/g, '\\"')}"`,
    'published: true',
    'locale: en',
    "next_blog: ''",
    '---',
    '',
  ].join('\n')

  // Combine frontmatter with markdown content
  const content = `${frontmatter}${article.content_markdown}`

  // This is where file writing logic would go if Cloudflare Workers supported it directly
  // For now, log the intent to write the file
  console.log(`Initiating file write process for ${filePath}`)

  // In a real scenario, you might need to trigger a GitHub Action or another service to write the file
  // This could be done by making a request to a GitHub API or another endpoint
  console.log('Triggering GitHub API call for file update')
  await triggerGitHubAction(filePath, content, env)
  console.log('GitHub API call completed for:', filePath)
}

async function triggerGitHubAction(filePath, content, env) {
  const GITHUB_TOKEN = typeof env !== 'undefined' ? env.GITHUB_TOKEN : 'your_github_token_here' // Use environment variable
  const REPO_OWNER = typeof env !== 'undefined' ? env.REPO_OWNER : 'your_repo_owner' // Use environment variable
  const REPO_NAME = typeof env !== 'undefined' ? env.REPO_NAME : 'your_repo_name' // Use environment variable

  try {
    // Encode content to base64
    const base64Content = btoa(unescape(encodeURIComponent(content)))
    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`
    console.log('GitHub API URL:', url)

    // First, check if file exists to get SHA for update
    let sha = ''
    console.log('Checking if file exists at:', url)
    const getResponse = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Cloudflare-Worker-Outrank-Webhook',
      },
    })

    console.log('File existence check response status:', getResponse.status)
    if (getResponse.ok) {
      const fileData = await getResponse.json()
      sha = fileData.sha
      console.log('File exists, SHA:', sha)
    } else {
      console.log('File does not exist, will create new')
    }

    // Create or update file
    console.log('Sending PUT request to create/update file')
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Cloudflare-Worker-Outrank-Webhook',
      },
      body: JSON.stringify({
        message: `Update blog post ${filePath} from webhook`,
        content: base64Content,
        sha: sha || undefined,
      }),
    })

    console.log('GitHub API response status:', response.status)
    if (!response.ok) {
      const errorText = await response.text()
      console.error('GitHub API error details:', errorText)
      throw new Error(`GitHub API error: ${response.status} ${errorText}`)
    }

    console.log(`Successfully updated file ${filePath}`)
    return { status: 'success' }
  } catch (error) {
    console.error(`Error updating file ${filePath}:`, error.message)
    return { status: 'error', error: error.message }
  }
}

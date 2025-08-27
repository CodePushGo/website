---
slug: secure-software-development-lifecycle
title: "A Guide to the Secure Software Development Lifecycle"
description: "Discover the secure software development lifecycle (SSDLC). Learn how integrating security at every phase saves costs and builds resilient applications."
author: Martin Donadieu
author_image_url: https://avatars.githubusercontent.com/u/4084527?v=4
author_url: https://github.com/riderx
created_at: 2025-08-27T10:14:48.699023+00:00
updated_at: 2025-08-27T10:14:48.699023+00:00
head_image: https://cdn.outrank.so/c504846a-b33a-4018-bc93-5bfa9be0f3af/featured-image-81052b00-488a-432d-ab98-2ed332f76226.jpg
head_image_alt: "A Guide to the Secure Software Development Lifecycle"
keywords: "secure software development lifecycle, application security, ssdlc best practices, devsecops, cybersecurity framework"
tag: "secure software development lifecycle, application security, ssdlc best practices, devsecops, cybersecurity framework"
published: true
locale: en
next_blog: ''
---
Picture this: you're building a bank vault. You wouldn't pour the concrete walls and *then* try to figure out where the door goes. That's a recipe for disaster. Security has to be part of the original blueprint, integrated from the very beginning.

The **secure software development lifecycle (SSDLC)** brings that same fundamental logic to building software. It's all about weaving security into every single step of the process, from the first napkin sketch to the final deployment.

## Shifting Security to the Start of Development

The big idea behind the SSDLC is simple but powerful: stop treating security like an afterthought. Instead of a last-minute inspection, it becomes a core part of the entire build. This approach is often called "shifting left," which just means dealing with security vulnerabilities as early in the timeline as you possibly can.

For years, the old way was to have the security team swoop in at the very end, right before launch, to find all the problems. This was always a bottleneck. They’d find major architectural flaws, and suddenly the whole team would be scrambling to patch things up, leading to expensive fixes and delayed releases. It was inefficient and incredibly risky.

The SSDLC flips that model on its head. By integrating security from day one, it becomes a shared responsibility for the entire team—not just a siloed task for a few specialists. This makes building secure software a continuous, collaborative effort.

### The Evolution Toward Proactive Security

The industry has been moving this way for a while. Today, about **70% of organizations** are trying to bake security into the early design and requirements phases. It's a much smarter way to work. This shift really picked up steam with the rise of DevSecOps, which is all about getting development, security, and operations teams to work together seamlessly with a lot of automation.

The motivation is pretty clear when you look at the numbers. Fixing a vulnerability discovered in a live product can be up to **15 times more expensive** than catching it back in the design stage. That's a massive difference.

To really see the contrast, let's compare the old way with the new.

#### Traditional SDLC vs Secure SDLC at a Glance

This table breaks down the fundamental differences in how security is handled in a traditional development cycle versus a modern, secure one.

| Aspect | Traditional SDLC | Secure SDLC (SSDLC) |
| :--- | :--- | :--- |
| **Security Timing** | An afterthought, tested at the end | Integrated into every phase |
| **Responsibility** | Security team's problem | Shared by everyone (devs, QA, ops) |
| **Approach** | Reactive (find and fix) | Proactive (prevent and protect) |
| **Cost of Fixes** | Very high in later stages | Low, caught early |
| **Testing Focus**| Primarily penetration testing pre-release | Continuous, automated testing throughout |
| **Culture** | Security as a gatekeeper | Security as a partner |

As you can see, the SSDLC isn't just a minor tweak—it's a complete change in mindset that leads to stronger, more resilient software.

### Key Principles of the SSDLC

Adopting a secure lifecycle doesn't mean you have to throw out your existing development process. It's about enhancing it with specific, security-focused activities. Some of the core pillars include:

*   **Threat Modeling:** Before a single line of code is written, the team gets together to brainstorm what could go wrong and how an attacker might try to break things.
*   **Secure Coding Standards:** You need clear, consistent rules to avoid common mistakes. For example, a huge part of this is proving your code is authentic and hasn't been tampered with, which you can read about in our guide on [what is code signing](https://codepushgo.com/es/blog/what-is-code-signing/).
*   **Automated Security Testing:** Instead of manual checks, you use tools that constantly scan your code for vulnerabilities as it's being written.
*   **Security Education:** Everyone on the team, especially developers, needs to be trained to spot potential security risks and know how to avoid them.

> By making these practices a regular part of the workflow, you build a culture where security is just how things are done. The goal is to make the secure way the easy way.

To get started, you don't have to reinvent the wheel. Established guidelines like the NIST 2.0 Cybersecurity Framework provide a fantastic, structured approach to managing risk that aligns perfectly with the goals of an SSDLC.

## Breaking Down the Phases of the Secure SDLC

A secure SDLC isn't a single, one-off task. It’s a series of deliberate, security-focused steps woven directly into the fabric of your development process.

Think of it like a master chef crafting a complex dish. They don't just toss all the ingredients into a pot at the end and hope for the best. They season, taste, and adjust at every single stage. The SSDLC works the same way, embedding security checkpoints from the initial idea all the way to long-term maintenance.

Let’s walk through these phases to see how security evolves from a concept into a tangible, protective layer in your software. Each stage builds on the last, creating a rock-solid chain of defense.

### Phase 1: Requirements and Threat Modeling

This is the blueprint stage. Security starts here, long before anyone writes a single line of code. The whole point is to define what "secure" actually means for *your* specific application and, just as importantly, to start thinking like an attacker. It’s all about asking, "What could possibly go wrong?"

First, you nail down the **security requirements**. This means identifying what you need to protect based on the data the app will handle. An e-commerce app handling payment information has wildly different needs than a simple weather widget. These requirements become a non-negotiable part of the project's foundation.

Next up is **threat modeling**. This is a proactive brainstorming session where the team puts on their black hats to map out potential threats. Using frameworks like **STRIDE** (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege), developers and security experts can anticipate how an attacker might try to exploit the system. This foresight is invaluable, allowing the team to design defenses from the get-go.

This infographic shows how these initial planning steps turn abstract security goals into an actionable checklist.

![Image](https://cdn.outrank.so/c504846a-b33a-4018-bc93-5bfa9be0f3af/e9f18834-8f28-4415-8644-538c9d161fc5.jpg)

As you can see, it’s a clear progression: define the high-level needs, actively model the threats, and create a concrete plan for implementation.

### Phase 2: Secure Design

With a firm grasp on the requirements and potential threats, it's time to build a resilient architecture. The secure design phase is where you translate those early security conversations into the application's actual structure. It’s where theory meets reality.

This means applying core security principles that have stood the test of time:

*   **Principle of Least Privilege:** Simple but powerful. Every part of your application should only have the bare-minimum permissions it needs to function—and absolutely nothing more.
*   **Defense in Depth:** Don't rely on a single security control. Instead, build multiple layers of defense. If one layer fails, others are still in place to stop an attack.
*   **Secure Defaults:** Your application should be secure out of the box. Users or admins shouldn't have to manually turn on critical security features; they should be the default setting.

During this phase, architects make crucial decisions about encryption standards, access control models, and how to protect data both when it's stored (at rest) and when it's moving (in transit). A well-designed system makes it exponentially harder for vulnerabilities to creep in later.

### Phase 3: Secure Coding

This is where the rubber meets the road. The design becomes reality as developers write the code, but they do so with a security-first mindset. It's no longer just about making features work; it's about making them work *safely*.

To keep everyone on the same page, teams follow established **secure coding guidelines**. Think of these as rulebooks that help developers sidestep common mistakes that lead to gaping security holes. One of the most respected resources is the **OWASP Top 10**, which highlights the most critical web application security risks, like SQL injection and broken access control.

> A developer trained in secure coding is your first and best line of defense. They can prevent a vulnerability from ever entering the codebase, which is far cheaper and more effective than finding and fixing it later.

Regular code reviews are non-negotiable here. Peer reviews help catch tricky logic errors, while specialized automated tools can scan the code for known vulnerability patterns, acting as a second set of eyes.

### Phase 4: Secure Testing

The code is written. Now it's time to try and break it—on purpose. The secure testing phase is all about actively hunting for flaws and weaknesses before the software ever sees the light of day. This goes way beyond traditional QA, which is mostly focused on functional bugs.

Security testing brings a specialized arsenal of tools and techniques to the table:

*   **Static Application Security Testing (SAST):** These tools are like a spell-checker for your code. They analyze the source code from the inside out, finding potential issues before the application is even run.
*   **Dynamic Application Security Testing (DAST):** These tools take the opposite approach. They test the running application from the outside in, poking and prodding it just like a real attacker would.
*   **Penetration Testing:** This is where you bring in the experts. Ethical hackers are hired to perform a simulated attack, using their creativity and expertise to find vulnerabilities that automated tools might miss.

### Phase 5: Secure Deployment

Getting your application live is a massive milestone, but the deployment process itself needs to be locked down. This phase ensures the environment where your code will run is hardened and the release pipeline is shielded from tampering.

Key activities here include securing all configuration files, properly managing secrets like API keys and database passwords, and making sure the servers are hardened against common attacks. Automation is your best friend here, with CI/CD pipelines configured to run final security checks before anything is pushed to production. To really dig in, check out our guide on [software deployment best practices](https://codepushgo.com/es/blog/software-deployment-best-practices/) to help bulletproof your release process.

### Phase 6: Maintenance and Response

Security is a journey, not a destination. Once your app is live, the work isn't over. The final phase of the SSDLC is an ongoing commitment to vigilance, because new threats pop up every single day.

This means continuously monitoring applications for suspicious activity, applying security patches the moment they become available, and having a clear **incident response plan** ready to go. If a vulnerability is found after release, your team needs to be able to respond immediately to contain the threat, fix the problem, and communicate clearly with your users. This proactive stance ensures your software remains a fortress throughout its entire lifespan.

## Why Adopting an SSDLC Is a Business Imperative

Viewing a **secure software development lifecycle** as just another line item in the IT budget is a huge mistake. It’s not about adding a layer of technical process; it’s a strategic business decision that directly impacts your company's health, from your bottom line to your brand's reputation. Honestly, it’s an investment that pays for itself over and over again.

The most obvious win? The dramatic cost savings. When security is bolted on at the end, vulnerabilities inevitably pop up late in the game—or worse, after the product is live. Suddenly, it's an all-hands-on-deck emergency. Developers are yanked off new features to frantically patch holes, and the entire roadmap grinds to a halt.

![Image](https://cdn.outrank.so/c504846a-b33a-4018-bc93-5bfa9be0f3af/b1780475-73ac-4531-9a0e-4e52a43163f4.jpg)

This fire-drill approach is shockingly expensive. Think about it: catching a security flaw during the design phase might cost about **$100** to fix. But if that same issue makes it to a live server, you could be looking at a bill of over **$1,500**. That’s a **15x** price jump for the exact same problem. Looking forward, experts estimate that a mature SSDLC program can slash the overall cost of security fixes by more than **50%**.

### Beyond Cost Savings: Protecting Your Reputation

The financial fallout of a security incident goes way beyond development costs. We live in an age where a single data breach becomes a front-page headline overnight, and the damage to a company's reputation can be permanent. Customers give you their data based on trust, and that trust is your single most valuable asset.

A public breach shatters that trust in an instant. What follows is a painful cycle of customer churn, negative press, and a long, uphill battle to win back credibility. A proactive SSDLC is one of the best brand insurance policies you can invest in.

> "A commitment to secure development isn't just about protecting data; it's about protecting the brand promise you make to your customers. It signals that you value their safety and are a trustworthy partner in a world full of digital risks."

This commitment to building secure software is also a powerful way to stand out. When you can confidently show that you have a mature, secure process, you gain a massive competitive advantage, especially when selling to large enterprises or clients in highly regulated industries.

### Meeting Regulatory and Compliance Demands

The web of regulations is only getting tighter. Frameworks like **GDPR** in Europe, **HIPAA** in healthcare, and **CCPA** in California aren't just suggestions—they're legal mandates with serious financial consequences for failing to comply.

An SSDLC gives you a structured, repeatable way to make sure you're meeting these obligations. It automatically creates an audit trail, proving you've done your due diligence to protect user data. This is absolutely critical for:

*   **Avoiding Heavy Fines:** Non-compliance can result in penalties that run into the millions.
*   **Operating in Global Markets:** If you want to expand, you have to play by international data protection rules.
*   **Building Partner Trust:** Other companies are far more likely to integrate with your software if they know it’s built on a secure foundation.

Ultimately, an SSDLC makes it much easier to navigate these complex rules. And it fits perfectly with your deployment strategy. Writing secure code is one half of the equation; getting it to your users safely is the other. This is something we dig into in our guide on [code release management best practices](https://codepushgo.com/es/blog/code-release-management-best-practices/). When you align secure development with secure deployment, you create an unbroken chain of trust from the first line of code all the way to the end-user.

## Putting Secure Development into Practice

Knowing the phases of a **secure software development lifecycle** is one thing. Actually bringing it to life with a busy development team is a whole different ball game. To move from theory to reality, you need a deliberate plan that turns high-level security goals into the daily habits of your team. It's all about making security a natural part of the workflow, not just another box to check.

The good news? You don't have to boil the ocean and launch a massive, top-down overhaul overnight. Success usually comes from putting a few practical, high-impact practices into place that build momentum and foster a stronger security culture over time. Each step reinforces the next, turning individual actions into a resilient, company-wide commitment.

![Image](https://cdn.outrank.so/c504846a-b33a-4018-bc93-5bfa9be0f3af/0d5f4b6f-82ed-4714-adb0-4eb6e738cd12.jpg)

### Foster a Security-First Culture

Honestly, the single most important step is cultural. A successful SSDLC isn't just about the tools you buy or the processes you document; it's about your people. You have to build an environment where every developer, QA engineer, and product manager sees themselves as a defender of the application.

This starts with ongoing education. Regular training on secure coding, common pitfalls like the OWASP Top 10, and the latest threat trends is crucial. But it goes beyond formal sessions—encourage a "see something, say something" mindset where team members feel comfortable raising security concerns without any fear of blame.

### Standardize Secure Coding Guidelines

Consistency is your best friend in preventing common vulnerabilities. If every developer is winging it with their own idea of what "secure" means, you’ll end up with a messy and unpredictable security posture. Establishing a single, clear set of secure coding standards isn't optional; it's essential.

These guidelines should be:
*   **Accessible:** Keep them in a central, easy-to-find spot like a company wiki. No excuses for not knowing where they are.
*   **Actionable:** Don't just list rules. Provide concrete code examples of what to do and, just as importantly, what *not* to do.
*   **Language-Specific:** Tailor the rules to the specific programming languages and frameworks your teams are actually using.

By creating a unified playbook, you ensure that security best practices are applied the same way across all projects, which dramatically cuts down on the risk of simple human error.

### Automate Security Checks in Your CI/CD Pipeline

Let's be real: manual security reviews can't keep up with the pace of modern development. The only scalable way to enforce security is through automation. By integrating security tools directly into your Continuous Integration/Continuous Deployment (CI/CD) pipeline, security becomes an automated, unavoidable checkpoint in the process.

> By embedding security scans directly into the build and deployment process, you transform security from a manual, periodic event into a continuous, automated feedback loop for developers.

This means every time a developer commits new code, it’s automatically scanned for potential issues. Tools like SAST and DAST can be set up to run on their own, giving immediate feedback and even blocking builds that introduce critical vulnerabilities. This approach is also a perfect fit for mobile development, and you can learn more about how to [automate Android testing](https://codepushgo.com/es/blog/automate-android-testing/) to catch bugs and security flaws early on.

To help visualize how this fits together, here’s a quick rundown of common security activities and the types of tools that can automate them at each stage.

### Key SSDLC Activities and Corresponding Tools

| SSDLC Phase | Security Activity | Example Tools |
| :--- | :--- | :--- |
| **Design** | Threat Modeling, Architecture Review | OWASP Threat Dragon, Microsoft Threat Modeling Tool |
| **Development** | Static Analysis (SAST), Dependency Scanning (SCA) | [Snyk](https://snyk.io/), [SonarQube](https://www.sonarqube.org/), GitHub Dependabot |
| **Testing** | Dynamic Analysis (DAST), Penetration Testing | [OWASP ZAP](https://www.zaproxy.org/), [Burp Suite](https://portswigger.net/burp) |
| **Deployment** | Configuration Scanning, Infrastructure as Code (IaC) Scanning | [Checkov](https://www.checkov.io/), [Trivy](https://github.com/aquasecurity/trivy) |
| **Maintenance** | Vulnerability Scanning, Log Monitoring | [Nessus](https://www.tenable.com/products/nessus), [Splunk](https://www.splunk.com/), Datadog |

Having the right tool for the job makes it far easier to integrate these security checks without slowing your team down.

### Make Threat Modeling a Routine

Threat modeling shouldn't be a one-and-done activity you perform at the kickoff of a project and then forget about. It needs to be a living, breathing part of your workflow. Whenever a significant new feature is on the table, the team should take a quick "security pause" to think through potential threats.

This doesn't have to be a week-long, formal exercise. A simple whiteboard session asking questions like, "How could an attacker abuse this feature?" or "What's the worst that could happen here?" can uncover critical design flaws before they become expensive problems to fix later. Making this a routine ensures security thinking happens continuously as your application grows and changes. To truly protect your software, you should also incorporate dedicated [security best practices for web applications](https://dotmock.com/blog/security-best-practices-for-web-applications) into this process.

### Secure Your Software Supply Chain

Modern applications are rarely built from scratch. They're assembled from a huge collection of open-source libraries, frameworks, and other third-party components. Every single one of these dependencies is a potential door for an attacker.

Securing your supply chain means you need to:
1.  **Vet Components:** Actively choose libraries that have good security track records and are actively maintained.
2.  **Use a Software Composition Analysis (SCA) Tool:** These tools automatically scan your dependencies for known vulnerabilities, so you don't have to do it manually.
3.  **Maintain an Inventory:** Keep a clear, up-to-date record of all third-party components you use. This makes it much easier to respond quickly when a new vulnerability is discovered in a library you depend on.

By treating third-party code with the same level of scrutiny as your own, you close off one of the most common attack vectors out there. A strong SSDLC is a holistic one—it has to cover not just the code you write, but also the code you pull in from elsewhere.

## Navigating Common SSDLC Implementation Challenges

Let's be real: adopting a **secure software development lifecycle** isn't a simple flip of a switch. It’s a journey, and like any big organizational change, you’re bound to hit some bumps in the road. Moving from a traditional setup to one where security is everyone's job takes more than new tools—it's a fundamental shift in culture and how your teams think about building software. Knowing what hurdles to expect is half the battle.

One of the first walls you'll likely hit is cultural resistance. Developers are often judged on how fast they ship features. When you start talking about adding security checks, it can feel like you're putting speed bumps on a racetrack. It’s a completely understandable reaction for teams to worry that an SSDLC will bog them down and put deadlines at risk.

### Overcoming Cultural and Process Hurdles

The trick to getting past this resistance is to change the narrative. Security isn't a roadblock; it's a quality booster. Instead of forcing a rigid, top-down process on everyone, start with a smaller, more manageable approach. Pick one team that's open to new ideas and run a pilot program to show them what integrated security looks like in the real world.

Focus on getting some quick, tangible wins. For example, you could set up an automated code scanner in their workflow that flags a major vulnerability in just a few minutes. That’s a powerful demonstration—a fix that took minutes instead of the days of panic it would have caused if found after the product was live. These small success stories become your best internal marketing, building the momentum you need for others to get on board. As you work through these issues, looking at broader [strategies to fix a broken software development lifecycle](https://gainmomentum.ai/blog/software-development-lifecycle-management) can also provide a helpful framework for improving your processes overall.

### Addressing the Skills Gap and Resource Constraints

Another huge challenge is something the entire industry is facing: there just aren't enough cybersecurity professionals to go around. This isn't just about your company's hiring struggles. The global cybersecurity workforce gap hit roughly **4 million professionals** in a recent year, making it nearly impossible for most companies to simply hire their way to a stronger security posture.

This shortage gets even more complicated when you consider internal risks. In 2023, more than **50% of organizations** globally were hit by security incidents caused by insiders—some malicious, some just accidental. This really underscores why you need security measures that don't depend entirely on having a massive team of experts watching over everything.

![Image](https://cdn.outrank.so/c504846a-b33a-4018-bc93-5bfa9be0f3af/5aeca315-0942-4dbf-8ae4-4c9a04588723.jpg)

> The talent shortage forces a smarter approach. You can't hire your way out of the problem, so you must rely on automation and empowering your existing developers to become the first line of defense.

This is where smart automation becomes a game-changer. By building automated security tools right into the CI/CD pipeline, you create a safety net that's always on. These tools can handle the repetitive, time-consuming work of scanning for common vulnerabilities. This frees up your limited security experts to tackle the bigger, more complex problems, like threat modeling and deep architectural reviews.

At the same time, you have to invest in your developers. Giving them regular, practical training on secure coding turns your entire development team into a security asset. This doesn't just help you scale your security efforts; it helps close that skills gap from the inside out. For instance, solid [mobile app security testing](https://codepushgo.com/es/blog/mobile-app-security-testing/) is a perfect area where developers can use these skills to protect user data. By arming your developers with the right knowledge and the right automated tools, you can build a strong, sustainable security culture, even if you don't have a huge budget or a deep bench of security specialists.

## Got Questions About the Secure SDLC? Let's Clear Things Up.

When teams start looking into a **secure software development lifecycle**, the same questions pop up time and again. It's completely normal. Getting solid answers is the first step toward building the confidence you need to actually move forward.

Let's tackle some of the most common questions head-on, from sorting out industry jargon to making smart decisions when you're short on resources.

### SSDLC vs. DevSecOps: What’s the Real Difference?

This is easily the most common point of confusion. Are they the same thing? Not quite, but they're two sides of the same coin.

Think of it this way: The **SSDLC is the blueprint** for building a secure house. It outlines *what* needs to be done and *when*—like installing reinforced doors during the framing stage, not after the drywall is up. It’s the grand strategy for security.

**DevSecOps, on the other hand, is the highly skilled crew** with the modern power tools that bring that blueprint to life without slowing everything down. It’s a culture of collaboration and automation that weaves security checks directly into your CI/CD pipeline. You use DevSecOps practices to execute your SSDLC plan efficiently.

### How Can Small Teams with Limited Resources Get Started?

The thought of implementing a full-blown SSDLC can feel like a massive undertaking, especially for a small team on a tight budget. The good news? You don't have to boil the ocean. The trick is to start small and focus on activities that give you the biggest security bang for your buck.

Here are a few practical first steps that cost more time than money:

*   **Start with Threat Modeling:** This is often the most valuable thing you can do first. Grab a whiteboard (or a virtual one) and ask, "What are all the ways someone could break this?" A simple brainstorming session can uncover huge architectural flaws before a single line of code is written.
*   **Lean on Open-Source Security Tools:** You don’t need a six-figure software budget to get started. Great tools like [OWASP ZAP](https://www.zaproxy.org/) for dynamic testing or [Snyk](https://snyk.io/) for checking your open-source dependencies have powerful free tiers that can automate the basics.
*   **Focus on Developer Education:** Your developers are your first and best line of defense. Investing a little time in training them on common pitfalls, like the OWASP Top 10, pays massive dividends. A developer who instinctively avoids a SQL injection vulnerability is worth their weight in gold.

> Nailing these foundational steps creates a solid baseline. From there, you can layer in more sophisticated tools and processes as your team and resources grow.

### How Do You Actually Measure the Success of an SSDLC Program?

You can't improve what you don't measure. To know if all this effort is making a real difference, you need to track concrete metrics. These numbers help you show value, pinpoint where you need to improve, and justify spending more on security down the road. A vague feeling of being "more secure" just won't cut it.

You need to track data that shows a clear trend over time.

| Metric Category | Key Performance Indicator (KPI) | Why It Matters |
| :--- | :--- | :--- |
| **Speed of Remediation** | **Mean Time to Remediate (MTTR)** | How fast is your team squashing critical bugs? A dropping MTTR means you're getting more efficient at fixing what you find. |
| **Vulnerability Density** | **Number of Vulnerabilities per 1,000 Lines of Code** | This levels the playing field between large and small projects. A downward trend is a great sign that your secure coding practices are sinking in. |
| **Production Incidents** | **Reduction in Production Security Incidents** | This is the bottom line. Fewer real-world security events is the clearest proof that shifting security left is working. |
| **Testing Coverage** | **Percentage of Codebase Covered by SAST/DAST Scans**| How much of your app are you actually testing? You need to aim for high coverage to make sure there are no major blind spots. |

By keeping an eye on these numbers, you can stop *hoping* your software is secure and start *knowing* how well your **secure software development lifecycle** is performing.

---
Ready to accelerate your development without compromising on security? **CodePushGo** offers instant, over-the-air updates for your React Native apps, with end-to-end encryption to protect your code. [Ship fixes and features in minutes, not days, with CodePushGo](https://codepushgo.com).
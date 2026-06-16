import { useRuntimeConfig } from '@/config/app'
import type { Database } from '@/services/supabase.types'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import ky from 'ky'

let supaClient: SupabaseClient<Database> = null as any

interface CapgoConfig {
  supaHost: string
  supaKey: string
  supbaseId: string
}

const codePushGoSupabasePublishableKey = 'sb_publishable__EBHKsRnL--XAzmI7NWRww_q531-pQO'

const getLocalConfig = (): CapgoConfig => ({
  supaHost: import.meta.env.VITE_SUPABASE_URL || 'https://umpxowxnwroafuzynvwf.supabase.co',
  supaKey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || codePushGoSupabasePublishableKey,
  supbaseId: (import.meta.env.VITE_SUPABASE_URL || 'https://umpxowxnwroafuzynvwf.supabase.co').split('//')[1].split('.')[0].split(':')[0] as string,
})

let config: CapgoConfig = getLocalConfig()

export async function getRemoteConfig() {
  const runtimeConfig = useRuntimeConfig()
  // call host + /api/private/config and parse the result as json using ky
  const localConfig = getLocalConfig()
  const data = await ky
    .get(`${runtimeConfig.public.baseApiUrl}/private/config`)
    .then((res) => res.json<CapgoConfig>())
    .then((d) => ({ ...localConfig, ...d }) as CapgoConfig)
    .catch(() => {
      console.log('Local config', localConfig)
      return localConfig as CapgoConfig
    })
  config = data
  return data
}

export function useSupabase() {
  const options = {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
  if (supaClient) return supaClient
  supaClient = createClient<Database>(config.supaHost, config.supaKey, options)
  return supaClient
}

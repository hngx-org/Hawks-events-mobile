
import 'react-native-url-polyfill/auto'
import * as SecureStore from 'expo-secure-store'
import { createClient } from '@supabase/supabase-js'

const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key)
  },
}

const supabaseUrl = 'https://nhwnzgyiabnskjxaxxmq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5od256Z3lpYWJuc2tqeGF4eG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0NTU4ODYsImV4cCI6MjAxMTAzMTg4Nn0.6gsHEeh-7AIxdaq_5yBI2oNvSbsxQ_rWgxEdVF0yzQY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})





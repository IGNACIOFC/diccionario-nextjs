import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import { supabase } from '@/utils/supabaseClient'
import Auth from '@/components/Auth'
import Home from '@/components/Home'

const inter = Inter({ subsets: ['latin'] })


export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    
    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
    <>
    {/*<div className='containerAuth'>
      <Auth />
    </div>*/}
      <Home />
    </>
    )
  }
  else {
    return (<Home />)
  }
}
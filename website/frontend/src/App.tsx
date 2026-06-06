import { useState, useEffect } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AdminPage from './components/AdminPage'
import LandingPage from './components/LandingPage'
import { LanguageProvider } from './context/LanguageContext'

const IS_ADMIN_PORT = window.location.port === '8002'

function usePath() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const handler = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])
  return path
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)
  const path = usePath()

  useEffect(() => {
    const token = localStorage.getItem('nexus-auth-token')
    if (IS_ADMIN_PORT) {
      setIsLoggedIn(true)
      setAuthLoading(false)
      return
    }
    if (token) {
      setIsLoggedIn(true)
    }
    setAuthLoading(false)
  }, [])

  const handleLoginSuccess = () => { setIsLoggedIn(true) }

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1117]">
        <div className="w-6 h-6 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      </div>
    )
  }

  if (isLoggedIn) {
    if (IS_ADMIN_PORT) {
      return <LanguageProvider><AdminPage /></LanguageProvider>
    }
    return <LanguageProvider><Dashboard /></LanguageProvider>
  }

  return (
    <LanguageProvider>
      {path === '/login' ? <Login onLoginSuccess={handleLoginSuccess} /> : <LandingPage />}
    </LanguageProvider>
  )
}

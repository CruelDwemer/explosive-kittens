import React, { useEffect, useState, createContext } from 'react'
type Theme = 'light' | 'dark'
type ThemeContext = { theme: Theme; toggleTheme: () => void }

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme as Theme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

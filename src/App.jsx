import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import './App.css'

import { useTheme } from './context'
import { Main, Launch } from './components'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  const [launch, setLaunch] = useState(false)
  // const navigate = useNavigate()

  if (launch) {
    setTimeout(() => {
      setLaunch(false)

    }, 3000)
  }

  return (
    <div className="app" style={{
      backgroundColor: theme === 'light' ? '#fff' : '#0F0F0F',
    }}>
      <div className={`${theme === 'light' ? 'blob-1_light' : 'blob-1_dark'}`}>

      </div>
      <div className={`${theme === 'light' ? 'blob-2_light' : 'blob-2_dark'}`}>

      </div>
      <div className='header'>
        <p className='header-1' style={{
          color: theme === 'light' ? '#2A2A2A' : '#fff',
        }}>
          THE
        </p>
        <span className='header-2' style={{
          color: theme === 'light' ? '#fff' : '#2A2A2A',
          backgroundColor: theme === 'light' ? '#2A2A2A' : '#fff',
        }}>
          PRODUCT
        </span>
        <p className='header-1' style={{
          color: theme === 'light' ? '#2A2A2A' : '#fff',
        }}>
          COMPANY
        </p>
      </div>
      {launch ? (
        <Launch />
      ) : (
        <Main setLaunch={setLaunch} />
      )}
      <button className='theme-circle' onClick={toggleTheme} style={{
        backgroundColor: theme === 'light' ? '#000' : '#FFF',
        border: theme === 'light' ? '5px solid #fff' : '5px solid #000',
      }}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div >
  )
}

export default App
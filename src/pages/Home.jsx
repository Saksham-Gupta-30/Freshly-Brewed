import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/Home.css'
import '../styles/Logo.css'

import { useTheme } from '../context'
import { Main, Launch, Logo } from '../components'

const Home = () => {
    const { theme, toggleTheme } = useTheme()
    const [launch, setLaunch] = useState(false)
    const navigate = useNavigate()

    if (launch) {
        setTimeout(() => {
            setLaunch(false)
            navigate('/question-page')
        }, 3000)
    }

    return (
        <div className="app" style={{
            backgroundColor: theme === 'light' ? '#fff' : '#0F0F0F',
        }}>
            <div className={`${theme === 'light' ? 'blob-1_light' : 'blob-1_dark'}`}></div>
            <div className={`${theme === 'light' ? 'blob-2_light' : 'blob-2_dark'}`}></div>
            <Logo />
            
            {launch ? (
                <Launch />
            ) : (
                <Main setLaunch={setLaunch} />
            )}
            <button className='theme-circle' onClick={toggleTheme} style={{
                backgroundColor: theme === 'light' ? '#000' : '#FFF',
                border: theme === 'light' ? '5px solid #fff' : '5px solid #000',
                cursor: 'pointer'
            }}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button> {/*Toggle theme button*/}
        </div >
    )
}

export default Home
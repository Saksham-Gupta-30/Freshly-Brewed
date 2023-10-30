import React from 'react'

import '../styles/Question-page.css'

import { useTheme } from '../context'
import { Logo } from '../components'
import { Scroll, User } from '../assets'

const Question = () => {
    const { theme, toggleTheme } = useTheme()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className='question-page' style={{
            background: theme === 'light' ? '#fff' : '#0f0f0f'
        }}>
            <div className='question-page-header' style={{
                background: theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(15, 15, 15, 1)',
                boxShadow: theme === 'light' ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' : '0px 4px 4px 0px rgba(255, 255, 255, 0.25)'
            }}>
                <img src={User} alt="user" className='user' />
            </div>
            <Logo />
            <button className='scroll' onClick={scrollToTop}>
                <img src={Scroll} alt="scroll" style={{ width: '67.5px', height: '67.5px' }} />
            </button>
            <button className='theme-circle' onClick={toggleTheme} style={{
                backgroundColor: theme === 'light' ? '#000' : '#FFF',
                border: theme === 'light' ? '5px solid #fff' : '5px solid #000',
                cursor: 'pointer'
            }}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
    )
}

export default Question
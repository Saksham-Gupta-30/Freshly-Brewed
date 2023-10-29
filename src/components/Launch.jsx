import React from 'react'

import '../styles/Launch.css'
import { useTheme } from '../context'

const Launch = () => {
    const { theme } = useTheme()

    return (
        <>
            <div className='confetti'></div>
            <div className={`${theme === 'light' ? 'launch-div-light' : 'launch-div-dark'}`} style={{
                background: theme === 'dark' ? 'linear-gradient(99deg, #380D2C 0.87%, #4D173E 0.88%, #2B174D 97.78%)' : 'linear-gradient(100deg, #E5B8D9 1%, #C9B8E5 100.1%)'
            }}>
                <div className='launch-header'>
                    <div className={`${theme === 'light' ? 'launch-header-title-light' : 'launch-header-title-dark'}`}>
                        We are Live Now!
                    </div>
                    <div className='launch-header-description' style={{
                        color: theme === 'light' ? '#333' : '#CCC'
                    }}>
                        Our new feature is now <span style={{ color: theme === 'light' ? '#0F0F0F' : '#FFF' }}>Live and ready</span> for you to explore. Go ahead and give it a try
                    </div>
                </div>
                <button className='launch-btn' style={{
                    background: theme === 'light' ? '#0F0F0F' : '#FFF',
                    color: theme === 'light' ? '#fff' : '#0F0F0F'
                }}>
                    Get Started
                </button>
            </div>
        </>
    )
}

export default Launch
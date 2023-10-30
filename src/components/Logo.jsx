import React from 'react'

import { useTheme } from '../context'
import '../styles/Logo.css'

const Logo = () => {
    const { theme } = useTheme()
    
    return (
        <div className='logo'>
            <p className='header-1' style={{
                color: theme === 'light' ? '#2A2A2A' : '#fff',
            }}>
                THE
            </p>
            <span className='logo-header-2' style={{
                color: theme === 'light' ? '#fff' : '#2A2A2A',
                backgroundColor: theme === 'light' ? '#2A2A2A' : '#fff',
            }}>
                PRODUCT
            </span>
            <p className='logo-header-1' style={{
                color: theme === 'light' ? '#2A2A2A' : '#fff',
            }}>
                COMPANY
            </p>
        </div>
    )
}

export default Logo
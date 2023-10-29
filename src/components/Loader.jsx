import React from 'react'

import { WhiteLoader, BlackLoader } from '../assets'
import { useTheme } from '../context'
import '../styles/Loader.css'

const Loader = () => {
    const { theme } = useTheme()

    return (
        <div className={`${theme === 'light' ? 'light-load' : 'dark-load'}`}>
            <img src={`${theme === 'light' ? WhiteLoader : BlackLoader}`} alt="loader" className={`${theme === 'light' ? 'white-loader' : 'black-loader'}`} />
        </div>
    )
}

export default Loader
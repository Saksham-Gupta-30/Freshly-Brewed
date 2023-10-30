import React, { useState, useEffect } from 'react'
import validator from 'validator'

import '../styles/Main.css'

import { useTheme } from '../context'
import { BlackTick, WhiteTick } from '../assets'
import { Loader } from '../components'

const Main = ({ setLaunch }) => {
    const { theme } = useTheme()
    const [emails, setEmails] = useState([])
    const [email, setEmail] = useState('')
    const [hours, setHours] = useState(null); // Set null to not show the Hours
    const [minutes, setMinutes] = useState(1); // Set minutes
    const [seconds, setSeconds] = useState(0); // Set seconds
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [invalid, setInvalid] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleSubmit = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setSuccess(validator.isEmail(email) ? true : false)
            if (validator.isEmail(email)) {
                if (emails.includes(email)) {
                    document.querySelector('.notify-text').innerHTML = 'Your email is already in our notify list. Try with another email';
                    setEmail('');
                    return;
                }
                setEmails([...emails, email])
                setEmail('')
            } else {
                setInvalid(true)
                setTimeout(() => {
                    setInvalid(false)
                }, 3000)
            }
        }, 3000)
    }

    const handleInputClick = () => {
        setSuccess(false)
        document.querySelector('.notify-text').innerHTML = 'Be the first to know! Share your email and We\'ll notify you when it\'s live';
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds((seconds) => seconds - 1);
                return;
            } else {
                if (minutes > 0) {
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                    return;
                } else {
                    if (hours > 0) {
                        setHours((hours) => hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                        return;
                    } else {
                        setHours(0);
                        setMinutes(0);
                        setSeconds(0);
                        setLaunch(true);
                        clearInterval(interval);
                        return;
                    }
                }
            }
        }, 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hours, minutes, seconds]);

    return (
        <div className='main' >
            <div className='main-header'>
                <div className='main-title'>
                    <div className={`${theme === 'light' ? 'rocket-light' : 'rocket-dark'}`}>
                        <></>
                    </div>
                    <div className={`title-text ${theme === 'light' ? 'title-text-light' : 'title-text-dark'}`}>
                        Launching New Module Soon!
                    </div>
                </div>
                <div style={{ width: "720px" }}>
                    <div className='title-sub' style={{
                        color: theme === 'light' ? '#333' : '#CCC'
                    }}>
                        Exciting things are in the works! We're currently <span className='title-sub-1' style={{
                            color: theme === 'light' ? '#0F0F0F' : '#FFF'
                        }}>Crafting a new feature </span>for you. Keep an eye out for updates – We're working to make it available soon!
                    </div>
                </div>
            </div>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className={`${theme === 'light' ? 'get-ready-light' : 'get-ready-dark'}`}>
                </div>
            </div>
            <div className='timer' style={{
                background: theme === 'light' ? 'linear-gradient(100deg, #E5B8D9 1%, #C9B8E5 100.1%)' : 'linear-gradient(99deg, #380D2C 0.87%, #4D173E 0.88%, #2B174D 97.78%)'
            }}>
                {hours !== null && (
                    <div className='timer-css'>
                        <div className='timer-css-1' style={{
                            color: theme === 'light' ? '#0F0F0F' : '#FFF'
                        }}>
                            {hours < 10 ? `0${hours}` : hours}
                        </div>
                        <div className='timer-css-2' style={{
                            color: theme === 'light' ? '#333' : '#CCC'
                        }}>
                            Hours
                        </div>
                    </div>
                )}
                {hours !== null && (
                    <div className='colon' style={{
                        color: theme === 'light' ? '#333' : '#CCC'
                    }}>
                        :
                    </div>
                )}
                <div className='timer-css'>
                    <div className='timer-css-1' style={{
                        color: theme === 'light' ? '#0F0F0F' : '#FFF'
                    }}>
                        {minutes < 10 ? `0${minutes}` : minutes}
                    </div>
                    <div className='timer-css-2' style={{
                        color: theme === 'light' ? '#333' : '#CCC'
                    }}>
                        Minutes
                    </div>
                </div>
                <div className='colon' style={{
                    color: theme === 'light' ? '#333' : '#CCC'
                }}>
                    :
                </div>
                <div className='timer-css'>
                    <div className='timer-css-1' style={{
                        color: theme === 'light' ? '#0F0F0F' : '#FFF'
                    }}>
                        {seconds < 10 ? `0${seconds}` : seconds}
                    </div>
                    <div className='timer-css-2' style={{
                        color: theme === 'light' ? '#333' : '#B3B3B3'
                    }}>
                        Seconds
                    </div>
                </div>
            </div>
            <div className='notify-section'>
                <div className='notify-text' style={{
                    color: theme === 'light' ? '#1A1A1A' : '#CCC'
                }}>
                    Be the first to know! Share your email and We'll notify you when it's live
                </div>
                <form className='notify-field'>
                    <input type="email" value={email} name='email' onClick={() => handleInputClick()} className={`${theme === 'light' ? 'notify-input-light' : 'notify-input-dark'}`} placeholder='Please enter your email id' onChange={handleChange} style={{
                        color: email === "" ? theme === 'light' ? '#4D4D4D' : '#808080' : theme === 'light' ? '#0F0F0F' : '#fff'
                    }} />
                    <button type='submit' className='notify-button' onClick={handleSubmit} disabled={email === "" || loading || success} style={{
                        color: email === "" ? theme === 'light' ? 'rgba(255, 255, 255, 0.50)' : 'rgba(15, 15, 15, 0.5)' : theme === 'light' ? '#fff' : '#0f0f0f',
                        background: theme === 'light' ? '#0f0f0f' : '#fff'
                    }}>
                        {loading ? (
                            <Loader />
                        ) : success ? (
                            <img src={`${theme === 'light' ? WhiteTick : BlackTick}`} alt="tick" style={{
                                width: '20px',
                                height: '20px'
                            }} />
                        ) : (
                            "Notify Me"
                        )}
                    </button>
                    {invalid && (
                        <span className='invalid'>
                            invalid email
                        </span>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Main
import React, { useState } from 'react'
import Link from 'next/link'
import axio from 'axios'
import { Navbar } from "../component/navbar";
import styles from '../../styles/signup.module.scss'
export default function RegisterForm() {
    const [email, setEmail] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        axio.post('http://localhost:8000/users/register/', {
            email: email,
            username: username,
            first_name: first_name,
            last_name: last_name,
            password: password,
            password2: password2,
        })
            .then(response => {
                //Connection Status
                const status = response.status
                if (status === 200) {
                    alert("Successfully Registered");
                    window.location.href = "/";
                } else {
                    alert("Error");
                }
            })
            .catch(error => {
                //Error data
                const error_respone = error.response;
                let resultString = ""
                if (error_respone === undefined) {
                    return 0
                } else {
                    //Show errors from email, username, first_name, last_name, password and password2
                    for (const [key] of Object.entries(error_respone)) {
                        if (key === 'data') {
                            for (const [keys, values] of Object.entries(error_respone[key])) {
                                resultString += `${keys} : \n${values}\n`
                            }
                        }
                    }
                    alert(resultString)
                }
            })
    }
    const handleChange = (e: any) => {
        const target = e.target
        const value = target.value
        const name = target.name
        if (name === 'email') {
            setEmail(value)
        } else if (name === 'first_name') {
            setFirst_name(value)
        } else if (name === 'last_name') {
            setLast_name(value)
        } else if (name === 'username') {
            setUsername(value)
        } else if (name === 'password') {
            setPassword(value)
        } else if (name === 'password2') {
            setPassword2(value)
        }
    }
    return (
        <div className='flex'>
            <Navbar />
            <div className='flex-grow'>
                <div className={styles.login_dark}>
                    <form method='post' onSubmit={handleSubmit}>
                        <h2 className={styles.sr_only}>Sign Up Form</h2>
                        <div>
                            <input className={styles.form_control} type="email" name="email" value={email || ''} onChange={handleChange} placeholder="Email" />
                        </div>
                        <div>
                            <input className={styles.form_control} type="text" name="username" value={username || ''} onChange={handleChange} placeholder="User Name" />
                        </div>
                        <div>
                            <input className={styles.form_control} type="text" name="first_name" value={first_name || ''} onChange={handleChange} placeholder="First Name" />
                        </div>
                        <div>
                            <input className={styles.form_control} type="text" name="last_name" value={last_name || ''} onChange={handleChange} placeholder="Last Name" />
                        </div>
                        <div>
                            <div className={styles.password_requirement}>
                                <b>Password Requirements</b><br />
                                <ul>
                                    <li>More 8 characters</li>
                                    <li>Less than 15 characters</li>
                                    <li>More one uppercase letter</li>
                                    <li>More one lowercase letter</li>
                                    <li>More one number</li>
                                    <li>More one special character</li>
                                </ul>
                            </div>
                            <input className={styles.form_control} type="password" name="password" value={password || ''} onChange={handleChange} placeholder="Password" />
                        </div>
                        <div>
                            <input className={styles.form_control} type="password" name="password2" value={password2 || ''} onChange={handleChange} placeholder="Comfirm Password" />
                        </div>
                        <div>
                            <input type="submit" className={styles.btn_primary} name="register" value="Sign Up" />
                        </div>
                        <Link className={styles.new_account} href="/component/login">Do you have an account?</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}
import styles from '../styles/signin.module.scss'
import Link from 'next/link'
export default function LoginForm() {
    return (
        <>
            <div className={styles.login_dark}>
                <form method='post'>
                    <h2 className={styles.sr_only}>Login Form</h2>
                    <div>
                        <input className={styles.form_control} type="email" name="email" placeholder="Email"/>
                    </div>
                    <div>
                        <input className={styles.form_control} type="password" name="password" placeholder="Password"/>
                    </div>
                    <div>
                        <button className={styles.btn_primary}>Log In</button>
                    </div>
                    <Link className={styles.new_account} href="/component/register">Do you need an new account?</Link>
                </form>
            </div>
        </>
    )
}
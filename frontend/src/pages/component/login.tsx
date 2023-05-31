import styles from "../../styles/signin.module.scss";
import axio from "axios";
import { Navbar } from "../component/navbar";
import Link from "next/link";
export default function LoginForm() {
  type inputs = {
    className? : any,
    types? : string,
    name? : string,
    placeholder? : string,
  }
  const data:inputs[] =[
    {className: styles.form_control, types: "email", name: "email", placeholder: "Email"},
    {className: styles.form_control, types: "password", name: "password", placeholder: "Password"},
  ]
  return (
    <div className="flex">
      <Navbar />
      <div className={styles.login_dark}>
        <form method="post">
          <h2 className={styles.sr_only}>Login Form</h2>
          {data.map((group, index) => (
            <div key={index}>
              <input
                className={group.className}
                type={group.types}
                name={group.name}
                placeholder={group.placeholder}
              />
            </div>
          ))}
          <div>
            <button className={styles.btn_primary}>Log In</button>
          </div>
          <Link className={styles.new_account} href="/component/register">
            Do you need an new account?
          </Link>
        </form>
      </div>
    </div>
  );
}

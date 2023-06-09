import React, { useState } from "react";
import Link from "next/link";
import axio from "axios";
import { Navbar } from "../component/navbar";
import styles from "../../styles/signup.module.scss";
import Footer from "./footer";
export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axio
      .post("http://localhost:8000/users/register/", {
        email: email,
        username: username,
        first_name: first_name,
        last_name: last_name,
        password: password,
        password2: password2,
      })
      .then((response) => {
        //Connection Status
        const status = response.status;
        if (status === 200) {
          alert("Successfully Registered");
          window.location.href = "/";
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        //Error data
        const error_respone = error.response;
        let resultString = "";
        if (error_respone === undefined) {
          return 0;
        } else {
          //Show errors from email, username, first_name, last_name, password and password2
          for (const [key] of Object.entries(error_respone)) {
            if (key === "data") {
              for (const [keys, values] of Object.entries(error_respone[key])) {
                resultString += `${keys} : \n${values}\n`;
              }
            }
          }
          alert(resultString);
        }
      });
  };
  const handleChange = (e: any) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    if (name === "email") {
      setEmail(value);
    } else if (name === "first_name") {
      setFirst_name(value);
    } else if (name === "last_name") {
      setLast_name(value);
    } else if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "password2") {
      setPassword2(value);
    }
  };
  type inputs = {
    className?: any;
    types?: string;
    name?: string;
    placeholder?: string;
    value?: any;
    onChange?: any;
  }
  const data: inputs[] = [
    {
      className: styles.form_control,
      types: "email",
      name: "email",
      placeholder: "Email",
      value: email,
      onChange: handleChange,
    },
    {
      className: styles.form_control,
      types: "text",
      name: "username",
      placeholder: "User Name",
      value: username,
      onChange: handleChange,
    },
    {
      className: styles.form_control,
      types: "text",
      name: "first_name",
      placeholder: "First Name",
      value: first_name,
      onChange: handleChange,
    },
    {
      className: styles.form_control,
      types: "text",
      name: "last_name",
      placeholder: "Last Name",
      value: last_name,
      onChange: handleChange,
    },
    {
      className: styles.form_control,
      types: "password",
      name: "password",
      placeholder: "Password",
      value: password,
      onChange: handleChange,
    },
    {
      className: styles.form_control,
      types: "password",
      name: "password2",
      placeholder: "Comfirm Password",
      value: password2,
      onChange: handleChange,
    },
    {
      className: styles.btn_primary,
      types: "submit",
      name: "register",
      value: "Sign Up",
    },
  ];
  return (
    <div className="wrapper">
      <div className="flex">
        <Navbar />
        <div className="flex-grow">
          <div className={styles.register}>
            <form method="post" onSubmit={handleSubmit}>
              <h2 className={styles.sr_only}>Sign Up Form</h2>              
              <div>
                {data.map((group, index) => (
                  <div key={index}>
                    <input
                      className={group.className}
                      type={group.types}
                      name={group.name}
                      placeholder={group.placeholder}
                      value={group.value}
                      onChange={group.onChange}
                    />
                  </div>
                ))}
              </div>
              <Link className={styles.new_account} href="/component/login">
                Do you have an account?
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
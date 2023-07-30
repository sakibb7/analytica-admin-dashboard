import styles from "./forgetPassword.module.css";

import analytica from "../assets/images/analytica.svg";
import loginBg from "../assets/images/login_bg.svg";
import InputField from "../ui/InputField";

function Login() {
  return (
    <section className={`${styles.login_page}`}>
      <div className={`${styles.site_details}`}>
        <div className={`${styles.logo}`}>
          <img src={analytica} width={24} alt="" />
          <h2>Analytica</h2>
        </div>
        <h1 className={`${styles.title}`}>
          Unlock your Project <br /> <span>performance</span>
        </h1>
        <img src={loginBg} alt="" />
      </div>

      {/* Login Form */}
      <div className={`${styles.login_area}`}>
        <div className={`${styles.login_header}`}>
          <h2>Forgot Your Password?</h2>
          <p>Reset Password with Analytica.</p>
        </div>

        <form action="" className={`${styles.login_form}`}>
          <InputField
            type={"text"}
            placeholder={
              "Enter your Email and instructions will be sent to you!"
            }
            disabled={"disabled"}
          />
          <InputField
            type={"Email"}
            placeholder={"Type your email"}
            label={"Password"}
          />

          <button style={{ cursor: "pointer" }}>Send Recovery Email</button>
        </form>
        <div className={`${styles.social_links}`}>
          <p className={styles.registration}>
            FORGET IT, <span>SEND ME BACK</span> TO THE SIGN IN
          </p>
        </div>

        <p className={styles.footer}>
          Copyright 2023, Analytica All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Login;

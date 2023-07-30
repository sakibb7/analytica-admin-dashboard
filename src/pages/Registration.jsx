import styles from "./registration.module.css";

// import {} from "../assets/icons";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import analytica from "../assets/images/analytica.svg";
import loginBg from "../assets/images/login_bg.svg";
import { IconContext } from "react-icons";
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
          <h2>Sign up</h2>
          <p>Create an account to start using Analytica</p>
        </div>

        <form action="" className={`${styles.login_form}`}>
          <InputField
            type={"text"}
            placeholder={"John Doe"}
            label={"Full Name"}
          />
          <InputField
            type={"text"}
            placeholder={"example@email.com"}
            label={"Email"}
          />
          <InputField
            type={"password"}
            placeholder={"*****"}
            label={"Password"}
          />

          <div className={`${styles.flex} ${styles.forget_area}`}>
            <div className={`${styles.check_box}`}>
              <input type="checkbox" name="signed" id="" />
              <label htmlFor="signed">
                You accept our Terms and Conditions and Privacy Policy
              </label>
            </div>
          </div>
          <button style={{ cursor: "pointer" }}>Sign In</button>
        </form>
        <div className={`${styles.social_links}`}>
          <p>Or continue with</p>
          <div className={styles.social_icons}>
            <IconContext.Provider value={{ color: "#00acee" }}>
              <AiFillTwitterCircle style={{ cursor: "pointer" }} />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#3b5998" }}>
              <BiLogoFacebookCircle style={{ cursor: "pointer" }} />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#0e76a8" }}>
              <TiSocialLinkedinCircular style={{ cursor: "pointer" }} />
            </IconContext.Provider>
            <FcGoogle style={{ cursor: "pointer" }} />
          </div>
          <p className={styles.registration}>
            already registered? <span>sign in</span>
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

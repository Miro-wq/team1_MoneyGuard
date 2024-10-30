import React, { useState } from 'react';
import styles from './LoginFormModal.module.css';
import icon from '../../assets/icon.png';
import iconEmail from '../../assets/icon_Email.svg';
import iconLock from '../../assets/icon_lacat.svg';
import iconLine from '../../assets/icon_Linie.png';

const LoginFormModal = ({ onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={icon} alt="Money Guard Icon" className={styles.icon} />
        <h1 className={styles.title}>Money Guard</h1>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <img src={iconEmail} alt="Email Icon" className={styles.inputIcon} />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={loginData.email}
              onChange={handleChange}
              required
            />
            <img src={iconLine} alt="Line Decoration" className={styles.inputLine} />
          </div>
          
          <div className={styles.inputField}>
            <img src={iconLock} alt="Password Icon" className={styles.inputIcon} />
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
            <img src={iconLine} alt="Line Decoration" className={styles.inputLine} />
            <i
              className={`${styles.passwordToggle} fas ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>

          <button type="submit" className={styles.loginButton}>Log In</button>
          <button type="button" className={styles.registerButton}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormModal;
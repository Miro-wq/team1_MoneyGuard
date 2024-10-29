import React, { useState } from 'react';
import styles from './LoginFormModal.module.css';
import icon from '../../assets/icon.png'; 

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
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputField}>
            <i className="fas fa-lock"></i>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
            <i
              className={`fas ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer', marginLeft: '8px' }}
            ></i>
          </div>
          <button type="submit" className={styles.btn}>Log In</button>
          <button type="button" className={styles.btn} onClick={() => console.log("Register clicked")}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormModal;
import React, { useState } from 'react';
import styles from './RegisterFormModal.module.css';
import icon from '../../assets/icon.png';
const RegisterFormModal = ({ onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', registerData);
    
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={icon} alt="Money Guard Icon" className={styles.icon} />
        <h1 className={styles.title}>Money Guard</h1>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={registerData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputField}>
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={registerData.email}
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
              value={registerData.password}
              onChange={handleChange}
              required
            />
            <i
              className={`fas ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer', marginLeft: '8px' }}
            ></i>
          </div>
          <div className={styles.inputField}>
            <i className="fas fa-lock"></i>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={registerData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.btn}>Register</button>
          <button type="button" className={styles.btnAlt} onClick={() => console.log("Log In clicked")}>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterFormModal;
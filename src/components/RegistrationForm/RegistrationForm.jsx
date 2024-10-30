import React, { useState } from 'react';
import styles from './RegisterFormModal.module.css';
import icon from '../../assets/icon.png';

const RegisterFormModal = ({ onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    console.log('Register Data:', registerData);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={icon} alt="Money Guard Icon" className={styles.icon} />
        <h1 className={styles.title}>Money Guard</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <i className="fas fa-user" aria-label="User icon"></i>
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
            <i className="fas fa-envelope" aria-label="Email icon"></i>
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
            <i className="fas fa-lock" aria-label="Password icon"></i>
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
              aria-label="Toggle password visibility"
            ></i>
          </div>
          <div className={styles.inputField}>
            <i className="fas fa-lock" aria-label="Confirm password icon"></i>
            <input
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={registerData.confirmPassword}
              onChange={handleChange}
              required
            />
            <i
              className={`fas ${isConfirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={toggleConfirmPasswordVisibility}
              style={{ cursor: 'pointer', marginLeft: '8px' }}
              aria-label="Toggle confirm password visibility"
            ></i>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.registerButton}>REGISTER</button>
          <button type="button" className={styles.loginButton} onClick={() => console.log("Log In clicked")}>LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterFormModal;
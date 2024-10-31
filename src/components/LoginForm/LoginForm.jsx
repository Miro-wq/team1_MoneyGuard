import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/operations/authOperations';
import { clearError } from '../../redux/slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import icon from './images/icon.png';
import iconEmail from './images/icon_Email.svg';
import iconLock from './images/icon_Lacat.svg';
import iconLine from './images/icon_Linie.png';
import { auth } from '../../redux/selectors/authSelectors';

const LoginFormModal = ({ onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector(auth);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Login Data:', loginData);
    dispatch(login(loginData));
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
    return () => dispatch(clearError());
  }, [user, dispatch, navigate]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <img src={icon} alt="Money Guard Icon" className={styles.icon} />
        <h1 className={styles.title}>Money Guard</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <img
              src={iconEmail}
              alt="Email Icon"
              className={styles.inputIcon}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={loginData.email}
              onChange={handleChange}
              required
            />
            <img
              src={iconLine}
              alt="Line Decoration"
              className={styles.inputLine}
            />
          </div>

          <div className={styles.inputField}>
            <img
              src={iconLock}
              alt="Password Icon"
              className={styles.inputIcon}
            />
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
            <img
              src={iconLine}
              alt="Line Decoration"
              className={styles.inputLine}
            />
            <i
              className={`${styles.passwordToggle} fas ${
                isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'
              }`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={styles.loginButton}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => navigate('/register')}
            className={styles.registerButton}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormModal;

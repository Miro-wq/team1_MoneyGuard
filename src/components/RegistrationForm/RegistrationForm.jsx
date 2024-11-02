import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/operations/authOperations';
import { clearError } from '../../redux/slices/AuthSlice';
import styles from './RegistrationForm.module.css';
import logo from './images/logo.svg';
import { auth } from '../../redux/selectors/authSelectors';

const RegisterFormModal = ({ onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector(auth);

  const togglePasswordVisibility = () => setIsPasswordVisible(prev => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(prev => !prev);

  const handleChange = e => {
    const { name, value } = e.target;
    setRegisterData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    dispatch(register(registerData));
    console.log('Register Data:', registerData);
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
    return () => {
      dispatch(clearError());
    };
  }, [user, dispatch, navigate]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <img src={logo} alt="Logo" className={styles.logo} />

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
              className={`fas ${
                isConfirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'
              }`}
              onClick={toggleConfirmPasswordVisibility}
              style={{ cursor: 'pointer', marginLeft: '8px' }}
              aria-label="Toggle confirm password visibility"
            ></i>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={styles.registerButton}
          >
            REGISTER
          </button>
          <button
            type="button"
            className={styles.loginButton}
            onClick={() => navigate('/login')}
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterFormModal;

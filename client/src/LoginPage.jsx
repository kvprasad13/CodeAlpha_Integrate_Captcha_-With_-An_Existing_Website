import { useState } from 'react';
import './LoginPage.css';
import ReCAPTCHA from "react-google-recaptcha";

const LoginPage = () => {
  const [captchaValue, setCaptchaValue] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleLogin = async () => {
    try {
      if (!captchaValue) {
        setLoginError('Please complete the CAPTCHA.');
        return;
      }

      console.log('Captcha Value:', captchaValue);

      setCaptchaValue('');
      setLoginError('');
    } catch (error) {
      console.error('Login Error:', error);
      setLoginError('An error occurred while logging in.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {loginError && <p className="login-error">{loginError}</p>}
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <ReCAPTCHA
            sitekey="6Le-BrInAAAAAKU13hDzXPGOFcF5OoQXdtruCQn_"
            onChange={handleCaptchaChange}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

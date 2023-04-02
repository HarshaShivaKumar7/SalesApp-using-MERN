import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

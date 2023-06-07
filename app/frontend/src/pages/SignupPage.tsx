import React from 'react';

function SignupPage() {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;

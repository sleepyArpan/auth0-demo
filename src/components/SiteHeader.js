import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function SiteHeader() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className='site-header'>
      {/* stuff on the left */}
      <div>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </div>

      {/* stuff on the right */}
      <div>
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
        {isAuthenticated && <button onClick={() => logout()}>Logout</button>}
      </div>
    </div>
  );
}

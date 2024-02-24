// This is a signup page , with normal inline css , no functionality

import React from 'react';

const SignIn: React.FC = () => {
  return (
    <div style={{ marginLeft: '400px', display: 'flex', alignItems: 'center' }}>
      <style jsx>{`
        @media (min-width: 640px) {
          margin-left: 80px;
        }
        @media (min-width: 768px) {
          margin-left: 120px;
        }
      `}</style>
      <div style={{ maxWidth: '32rem', width: '100%', marginTop: '6rem', marginBottom: '0' }}>
        <div>
          <h2 style={{ marginTop: '1.5rem', marginBottom: '0', textAlign: 'center', fontSize: '1.875rem', fontWeight: 'bold', color: '#374151', lineHeight: '2.25rem' }}>Sign in to your account</h2>
        </div>
        <form style={{ marginTop: '2rem', marginBottom: '0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} action="#" method="POST">
          <div style={{ borderRadius: '0.375rem', boxShadow: '0 0.0625rem 0.125rem rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <div>
              <label htmlFor="email-address" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0', borderStyle: 'solid' }}>Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required style={{ appearance: 'none', borderRadius: '0', position: 'relative', display: 'block', width: '100%', padding: '0.75rem', borderWidth: '1px', borderColor: '#e5e7eb', backgroundColor: '#fff', color: '#1f2937', fontSize: '0.875rem', lineHeight: '1.25rem', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform', transitionDuration: '0.3s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0s' }} placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0', borderStyle: 'solid' }}>Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required style={{ appearance: 'none', borderRadius: '0', position: 'relative', display: 'block', width: '100%', padding: '0.75rem', borderWidth: '1px', borderColor: '#e5e7eb', backgroundColor: '#fff', color: '#1f2937', fontSize: '0.875rem', lineHeight: '1.25rem', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform', transitionDuration: '0.3s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0s' }} placeholder="Password" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input id="remember-me" name="remember-me" type="checkbox" style={{ width: '1rem', height: '1rem', color: '#3b82f6', borderColor: '#d1d5db', borderRadius: '0.25rem', borderWidth: '1px' }} />
              <label htmlFor="remember-me" style={{ marginLeft: '0.5rem', fontSize: '0.875rem', color: '#374151', lineHeight: '1.25rem' }}>Remember me</label>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#3b82f6', lineHeight: '1.25rem' }}>
              <a href="#" style={{ fontWeight: 'bold', color: '#3b82f6', transition: 'color 0.15s ease-in-out' }} className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button type="submit" style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '1rem', paddingRight: '1rem', borderWidth: '1px', borderRadius: '0.375rem', transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform', transitionDuration: '0.3s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '0s', backgroundColor: '#2563eb', color: '#fff', fontSize: '0.875rem', lineHeight: '1.25rem', fontWeight: 'bold' }}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

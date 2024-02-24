// I made a searchbar for the webpage to look good and with some css, but it doesnt work for searching but 
//any adds or functionality will be added here

import { BellDot, Search, Settings } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const Searchbar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <form style={{ position: 'relative', width: '400px' }}>
        <div style={{ position: 'relative', borderRadius: '9999px', backgroundColor: '#E5E7EB', border: '1px solid #E5E7EB' }}>
          <input type="search" placeholder="Search Here" style={{ width: '100%', padding: '16px', paddingRight: '64px', borderRadius: '9999px', border: 'none', outline: 'none' }} />
          <button type="submit" style={{ position: 'absolute', right: '1px', top: '50%', transform: 'translateY(-50%)', padding: '16px', backgroundColor: '#6B7280', borderRadius: '9999px', border: 'none', cursor: 'pointer' }}>
            <Search style={{ color: 'white', width: '24px', height: '24px' }} />
          </button>
        </div>
      </form>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <Link href="/signin/page">
        <button style={{ marginRight: '10px', borderRadius: '9999px', padding: '8px 16px', background: '#1565C0', border: '1px solid #1565C0', color: '#fff' }}>
         Signup
       </button>
        </Link>
  
  <button style={{ borderRadius: '9999px', padding: '8px 16px', background: '#1565C0', border: '1px solid #1565C0', color: '#fff' }}>
    Login
  </button>
  </div>

      </div>
    
  );
};

export default Searchbar;

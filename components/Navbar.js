import React from 'react';
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-decoration-none pe-auto" aria-current="page" href="/admin"><span style={{cursor:"pointer"}} className='text-light ms-3 '>Admin</span></Link>
        </li>
        <li className="nav-item pe-auto">
          <Link classNameName="nav-link" href="/editor"><span style={{cursor:"pointer"}} className='text-light ms-3 '>Editor</span></Link>
        </li>
        </ul>
         

    </div>
  </div>
</nav>
    );
};

export default Navbar;
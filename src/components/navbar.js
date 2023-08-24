import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';

const Navbar = () => (
  <div className="navbar">
    <button aria-label="Button with Icon" type="button" onClick={() => window.history.back()} className="back-btn">&lt;&nbsp;Back</button>

    <Link to="/">
      <i className="fa-solid fa-chevron-left" />
    </Link>

    <p>
      Crypto World
    </p>
    <div className="lastmenu">
      <FaMicrophone style={{ fill: '#fff' }} />
      <AiFillSetting style={{ fill: '#fff' }} />
    </div>
  </div>
);

export default Navbar;

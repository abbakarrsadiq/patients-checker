import logo from "./logo1.jpg";
import useState from "react";

export default function Nav() {

  return (
    <div>
        <nav className='navigation'>
          <div className='right-nav'>
            <img src={logo} alt="LogoImage" className="logo" />
            <h2><i>NHS Pindixs</i></h2>
          </div>
          <div className="search-bar">
            <input type="search" id="search" placeholder='SEARCH A PATIENT BY NAME OR PHONE' />
          </div>
          <div className='right-nav'>
            <h3>GP Advises -</h3>
            <h3>Nurse Guide</h3>
          </div>
        </nav>
    </div>
  )
}

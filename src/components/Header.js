import React from 'react'
import logo from "../images/logo.svg";

export const Header = () => {
  return (
    <>
      <header className="header max-width">
        <div>
          <img src={logo} alt="Logo" />
          
          <nav>
            <ul>
              <li><button>Features</button></li>
              <li><button>Pricing</button></li>
              <li><button>Resources</button></li>
            </ul>
          </nav>
        </div>

        <ul>
          <li><button>Login</button></li>
          <li><button className='btn-cta'>Sign Up</button></li>
        </ul>
      </header>
    </>
  )
}

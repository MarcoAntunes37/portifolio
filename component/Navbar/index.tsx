import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/logo.svg'

const Navbar: React.FC = () => {    
  return (    
        <nav className="navbar navbar-expand-lg thicknes">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <span className='special-text'>
                        <Image src={logo} width={80} height={80} alt={'logo'}/>
                    </span>
                </a>
                <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item" >
                            <a className="nav-link" 
                                aria-current="page" 
                                href="/about"
                            >
                                <span className='special-text'>01.</span>
                                <span className='primary-text'>About</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                href="/experience"
                            >
                                <span className='special-text'>02.</span>
                                <span className='primary-text'>Experience</span>
                            </a>
                        </li>                
                        <li className="nav-item">                            
                            <a className="nav-link" 
                                href="work"
                            >
                                <span className='special-text'>03.</span>
                                <span className='primary-text'>Work</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                                href="contact"
                            >
                                <span className='special-text'>04.</span>
                                <span className='primary-text'>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>    
  )
}

export default Navbar;
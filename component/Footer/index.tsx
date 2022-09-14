import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-white">          
      <div className="text-center p-3">
        © 2022 Copyright:{' '}
        <a className="text-white" 
          href="https://github.com/MarcoAntunes37/"
        >
          Marco Aurelio
        </a>
      </div>
    </footer>
  )
}

export default Footer;
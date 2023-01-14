import React from 'react';
import { useState } from 'react';
import ParticlesBg from 'particles-bg';
import './App.css';
import { BsInstagram } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { GoFileSubmodule } from 'react-icons/go'
import Typist from 'react-typist';
import TextLoop from 'react-text-loop';

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: '🔨',
    hideWhenDone: true,
  };

  const [darkmode, setdarkmode] = useState(false);

  return (
    <div>
      <div className={`card ${darkmode ? 'dark' : ''}`}>
        <div className="toggle-btn" onClick={() => setdarkmode(!darkmode)}></div>
        <div className="dark-mode"></div>
        <div className="card_body">
          <div className="profile text-center">
            <img src="/PP-1.png" className="avatar" />
            <div className="bg_content rd_12 p_8">
            <h1>@Munir</h1>
              <p className="layanan mt-16">
                <strong>Learn Tech🚀</strong>
              </p>
              <Typist cursor={config_cursor}>Accounting Student at Universitas Islam Malang | Ex-Backend Engineering Student at Ruangguru.</Typist>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Familiar with {''}
              <TextLoop interval={800}>
                <span className="highlight">HTML</span>
                <span className="highlight">CSS</span>
                <span className="highlight">Javascript</span>
                <span className="highlight">Go</span>
                <span className="highlight">PostgreSQL</span>
                <span className="highlight">GORM</span>
                <span className="highlight">Bootstrap</span>
                <span className="highlight">TailwindCss</span>
                <span className="highlight">React JS</span>
              </TextLoop>{' '}
            </div>
          </div>
          <div className="mt-16">
            <a href="https://www.instagram.com/sirojul.munir__/" target="_blank" className="btn_action bg_content">
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a href="https://web-cs.vercel.app/" target="_blank"  className="btn_action bg_content">
              <SiTiktok />
              <span>Tiktok</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              href="https://www.linkedin.com/in/mohamad-sirojul-munir/" target="_blank" 
              className="btn_action bg_content"
            >
              <AiFillLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="mt-16">
            <a href="https://github.com/sirojulmunir20" target="_blank"  className="btn_action bg_content">
              <AiFillGithub />
              <span>Github</span>
            </a>
          </div>
          <div className="mt-16">
            <a href="https://mohamadsirojulmunir.netlify.app/" target="_blank"  className="btn_action bg_content">
              <GoFileSubmodule />
              <span>Portofolio</span>
            </a>
          </div>
        </div>
      </div>

      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;

import React from 'react';
import './Layout.css';

import srk from "./assets/rooms/srk.jpg"
import akshay from "./assets/rooms/akshay.jpg"
import lady from "./assets/rooms/lady.jpg"
import bye from "./assets/rooms/bye.jpg"
import kgf from "./assets/rooms/kgf.jpg"
import sholay from "./assets/rooms/sholay.jpg"
import titanic from "./assets/rooms/titanic.jpg"
import kabir from "./assets/rooms/kabir.jpeg"
import pooh from "./assets/rooms/pooh.jpg"
import herapheri from "./assets/rooms/herapheri.jpg"
import gril from "./assets/rooms/gril.jpg"
import bandi from "./assets/rooms/badni.jpg"
import rajpal from "./assets/rooms/rajpal.jpg"


const Layout: React.FC = () => {
  return (
    <>
    <div className='rooms'>
      <h1 className="main-title">Know your rooms</h1>

      <div className="container">
        <div className="title">D-313</div>
        <div className="content">
          <a target="_blank">
            <div className="content-overlay"></div>
            <img className="content-image" src={`${kabir}`} alt="" />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">Somyajeet</h3>
              <p className="content-text">Former depression patient</p>
            </div>
          </a>
        </div>
      </div>
      
<div className="container">
  <div className="title">D-317</div>
  <div className="content">
    <a target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${akshay}`} alt=""/>
      <div className="content-details fadeIn-right">
        <h3>Aditya Jha</h3>
        <p>Coolest guy in (atleast) HJB</p>
      </div>
    </a>
  </div>
</div>



<div className="container">
  <div className="title">D-204</div>
  <div className="content">
    <a  target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${lady}`} alt=""/>
      <div className="content-details fadeIn-right">
        <h3>Jyothiraditya</h3>
        <p>Gsec Sports and Games, TSG</p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <div className="title">D-203</div>
  <div className="content">
    <a  target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image"  src={`${sholay}`} alt=""/>
      <div className="content-details fadeIn-top fadeIn-left">
        <h3>Aditya Kumar</h3>
        <p>Events Head, KTJ</p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <div className="title">D-319</div>
  <div className="content">
    <a target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${titanic}`} alt=""/>
      <div className="content-details fadeIn-top fadeIn-right">
        <h3>Soham Mandal </h3>
        <p>GSEC daaru-gaanja, HJB</p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <div className="title">D-304</div>
  <div className="content">
    <a target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${bye}`} alt=""/>
      <div className="content-details fadeIn-bottom fadeIn-left">
        <h3>Moulik Kumar</h3>
        <p>Rich,white,stoned</p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <div className="title">H-124</div>
  <div className="content">
    <a target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${kgf}`} alt=""/>
      <div className="content-details fadeIn-bottom fadeIn-left">
        <h3>Vaibhav Joshi</h3>
        <p>Photoshop and chill</p>
      </div>
    </a>
  </div>
</div>


<div className="container">
  <div className="title">D-202</div>
  <div className="content">
    <a target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${srk}`} alt=""/>
      <div className="content-details fadeIn-bottom fadeIn-left">
        <h3>Abhinav Prakash</h3>
        <p>Blockchain ka choda</p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <div className="title">D-308</div>
  <div className="content">
    <a  target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${pooh}`} alt=""/>
      <div className="content-details fadeIn-bottom fadeIn-right">
        <h3>Kumar Divyanshu</h3>
        <p>GSEC Tech, HJB </p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <div className="title">D-310</div>
  <div className="content">
    <a  target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${herapheri}`} alt=""/>
      <div className="content-details fadeIn-bottom fadeIn-right">
        <h3>Tamaghna Mandal</h3>
        <p>Bengali rizzz</p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <div className="title">D-201</div>
  <div className="content">
    <a  target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${gril}`} alt=""/>
      <div className="content-details fadeIn-bottom fadeIn-right">
        <h3>Malothro Mena</h3>
        <p>Usain Bolt with less melanin</p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <div className="title">D-320</div>
  <div className="content">
    <a  target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${rajpal}`} alt=""/>
      <div className="content-details fadeIn-bottom fadeIn-right">
        <h3>Shauryan Pandey</h3>
        <p>Intern at Bajrang Dal</p>
      </div>
    </a>
  </div>
</div>

<div className="container">
  <div className="title">H-120</div>
  <div className="content">
    <a  target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={`${bandi}`} alt=""/>
      <div className="content-details fadeIn-bottom fadeIn-right">
        <h3>Bachali Sarthikeya</h3>
        <p>Bandi Load</p>
      </div>
    </a>
  </div>
</div>

</div>
    </>
  );
};

export default Layout;

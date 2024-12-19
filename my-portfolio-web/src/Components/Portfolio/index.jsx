import React, { useState, useEffect } from 'react';
import './style.css';

import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

// Website images
import W1 from '../../assets/PortfolioWebPics/6-1.jpg';
import W2 from '../../assets/PortfolioWebPics/7-1.jpg';
import W3 from '../../assets/PortfolioWebPics/8-1.jpg';
import W4 from '../../assets/PortfolioWebPics/1-1.jpg';
import W5 from '../../assets/PortfolioWebPics/2-1.jpg';
import W6 from '../../assets/PortfolioWebPics/3-1.jpg';
import W7 from '../../assets/PortfolioWebPics/4-1.jpg';
import W8 from '../../assets/PortfolioWebPics/5-1.jpg';

// 3D images
import Model1 from '../../assets/3D/1.png';
import Model2 from '../../assets/3D/2.jpg';
import Model3 from '../../assets/3D/3.jpg';
import Model4 from '../../assets/3D/4.png';
import Model5 from '../../assets/3D/5.jpg';
import Model6 from '../../assets/3D/6.jpg';
import Model7 from '../../assets/3D/7.jpg';
import Model8 from '../../assets/3D/8.jpg';
import Model9 from '../../assets/3D/9.jpg';
import Model10 from '../../assets/3D/10.jpg';
import Model11 from '../../assets/3D/11.jpg';

export default function Portfolio() {
  const [isWebsites, setIsWebsites] = useState(true);

  const toggleSwitch = (e) => {
    setIsWebsites(e);
  };

  return (
    <div className='portfolio'>
      <h2>My Recent Work</h2>
      <div className='switch-wrapper'>
        <div className='switch-content-wrapper'>
          <div
            className='switch-label-wrapper'
            onClick={() => toggleSwitch(true)}
          >
            <p className={`switch-label ${isWebsites ? 'active' : ''}`}>
              Websites
            </p>
          </div>
          <div
            className='switch-label-wrapper'
            onClick={() => toggleSwitch(false)}
          >
            <p className={`switch-label ${!isWebsites ? 'active' : ''}`}>
              3D Models
            </p>
          </div>
          <div className={`switch-pill ${!isWebsites ? 'clicked' : ''}`}></div>
        </div>
      </div>

      {isWebsites ? (
        <div
          className='portfolio-websites'
          style={{
            visibility: isWebsites ? 'visible' : 'hidden',
            height: isWebsites ? 'auto' : '0',
          }}
        >
          <figure class='website-figure'>
            <img src={W1} alt='Website 1' loading="lazy"/>
            <figcaption>
              <h3>Movie Website with Recommendation System</h3>
              <p>
                Introducing my capstone project, a dynamic movie website
                inspired by IMDB
              </p>
              <div class='icons'>
                <a
                  href='https://github.com/Arshak22/Capstone-Project'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={W2} alt='Website 2' loading="lazy"/>
            <figcaption>
              <h3>Team2B Company Website</h3>
              <p>
                Crafted a dynamic, multilingual website for Team2B, a versatile
                company providing services in accounting, marketing, and video
                production.
              </p>

              <div class='icons'>
                <a
                  href='https://team2b.am/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={W3} alt='Website 3' loading="lazy"/>
            <figcaption>
              <h3>Xbox Gamepad Store</h3>
              <p>
                The Xbox Gamepad Shop is an online retail platform dedicated to
                Xbox controllers
              </p>
              <div class='icons'>
                <a
                  href='https://xperiencexpad.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={W4} alt='Website 4' loading="lazy"/>
            <figcaption>
              <h3>Real Estate Agent Website</h3>
              <p>
                Introducing my creation, a cutting-edge Real Estate Agent
                Website that revolutionizes the way buyers and sellers connect
              </p>
              <div class='icons'>
                <a
                  href='https://demo1.mbswebsite.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={W5} alt='Website 5' loading="lazy"/>
            <figcaption>
              <h3>Insurance Agent Website</h3>
              <p>
                Introducing a dynamic Insurance Website Template that empowers
                agencies to establish a compelling online presence, featuring
                engaging design and robust customer engagement tools for
                effective client connections
              </p>

              <div class='icons'>
                <a
                  href='https://demo8.mbswebsite.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={W6} alt='Website 6' loading="lazy"/>
            <figcaption>
              <h3>Insurance Agent Website</h3>
              <p>
                Presenting my customizable Insurance Agent Website template,
                designed to empower insurance professionals by showcasing their
                expertise, services, and personal brand, helping them connect
                with clients effectivel
              </p>
              <div class='icons'>
                <a href='#'>
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={W7} alt='Website 7' loading="lazy"/>
            <figcaption>
              <h3>Insurance Agent Website</h3>
              <p>
                Unlock your insurance agency's online potential with a sleek and
                modern website template tailored specifically for agents.
                Seamlessly showcase your services, expertise, and personalized
                branding, while effortlessly connecting with clients
              </p>
              <div class='icons'>
                <a href='#'>
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={W8} alt='Website 8' loading="lazy"/>
            <figcaption>
              <h3>Real Estate Agent Website</h3>
              <p>
                Elevate your real estate brand with a dynamic website template
                designed exclusively for agents
              </p>
              <div class='icons'>
                <a href='#'>
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      ) : (
        <div
          className='portfolio-websites 3d'
          style={{
            visibility: !isWebsites ? 'visible' : 'hidden',
            height: !isWebsites ? 'auto' : '0',
          }}
        >
          <figure class='website-figure'>
            <img src={Model1} alt='3D-1' loading="lazy"/>
            <figcaption>
              <h3>Skrillix Energy Drinks</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/alldrinks-849c590ead1ca9712f8651cc9e15f3d1/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={Model2} alt='3D-2' loading="lazy"/>
            <figcaption>
              <h3>Robot for Landing Page</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/untitled-346683fcb1005821c8b72c72f1be84ba/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={Model3} alt='3D-3' loading="lazy"/>
            <figcaption>
              <h3>Custom Chess Set on the Chessboard</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/chessboard-163095a568526d10c174aac1239eae30/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={Model4} alt='3D-4' loading="lazy"/>
            <figcaption>
              <h3>Starlife Group Street Banner</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/untitled-cc9e9edeb1ba80974c5ab29966516511/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={Model5} alt='3D-5' loading="lazy"/>
            <figcaption>
              <h3>Ucom Coffee Cup with Star Wars design</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/ucomcup-7e2213a692557d310f46eb4a7c336ac5/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={Model6} alt='3D-6' loading="lazy"/>
            <figcaption>
              <h3>Fanta Can aestetics</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/untitled-df7cdc6b543d0f97a30a4e2ed5675c70/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={Model7} alt='3D-7' loading="lazy"/>
            <figcaption>
              <h3>Clash Royal Spirits</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/untitled-5884b7280d4700581d969b2782dd0414/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={Model8} alt='3D-8' loading="lazy"/>
            <figcaption>
              <h3>Halloween</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/untitled-a93434b16db9470c088a7cb4cdcf79ba/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={Model9} alt='3D-9' loading="lazy"/>
            <figcaption>
              <h3>Guitar on a stage</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/guitaraesthetic-0f55ec076448e279594f00bd5e16f71c/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={Model10} alt='3D-10' loading="lazy"/>
            <figcaption>
              <h3>Hot Mexican Sauce</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/ketchup-94ee780d4b9bec806f85d74ac6d48f33/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
          <figure class='website-figure'>
            <img src={Model11} alt='3D-11' loading="lazy"/>
            <figcaption>
              <h3>Poker Cards aestetic</h3>
              <div class='icons'>
                <a
                  href='https://my.spline.design/poker-0fd10ddf03edad991bf856feb67e9e17/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsFillArrowUpRightSquareFill />
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

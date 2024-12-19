import React, { useEffect, useRef, useState } from 'react';
import './index.css'; // Add your styles in this file
import { Link } from "react-router-dom";
// LocomotiveScroll and GSAP are external libraries, you can include them in your project as dependencies
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import OjusLogo from '../assets/logo.ico';
import drc from '../assets/dark_rider-character.webp';
import drcover from '../assets/dark_rider-cover.jpg';
import drtitle from '../assets/dark_rider-title.png';
import frcover from '../assets/force_mage-cover.jpg';
import frc from '../assets/force_mage-character.webp';
import frtitle from '../assets/force_mage-title.png';
import img from '../assets/img.jpg'
// import video from '../assets/nfs2.mp4'

const Index = () => {
  const [activeSlider, setActiveSlider] = useState(3);
  const page2Ref = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll('.elem');
    elems.forEach((ele) => {
      ele.addEventListener('click', () => {
        const bgVideo = ele.getAttribute('data-video');
        const existingVideo = page2Ref.current.querySelector('video');

        // Remove existing video if present
        if (existingVideo) {
          existingVideo.remove();
        }

        if (bgVideo) {
          // Create a video element and set attributes
          const videoElement = document.createElement('video');
          videoElement.src = bgVideo;
          videoElement.autoplay = true;
          videoElement.loop = true;
          videoElement.muted = true;
          videoElement.style.position = 'absolute';
          videoElement.style.top = '0';
          videoElement.style.left = '0';
          videoElement.style.width = '100%';
          videoElement.style.height = '100%';
          videoElement.style.objectFit = 'cover';
          videoElement.style.zIndex = '-1';

          page2Ref.current.appendChild(videoElement);
        }
      });
    });
  }, []);

  const handleSliderClick = (index) => {
    setActiveSlider(index);
  };

  const sliderData = [
    { name: 'Mike', title: 'web3 Developer', img: {drcover} },
    { name: 'samite', title: 'wordpress Developer', img: '../assets/img.jpg' },
    { name: 'hashi', title: 'java Developer', img: '/img.jpg' },
    { name: 'kaity', title: 'web Developer', img: '/img.jpg' },
    { name: 'lauren', title: 'php Developer', img: '/img.jpg' },
    { name: 'ryan', title: 'seo Developer', img: '/img.jpg' },
    { name: 'dakes', title: 'sql Developer', img: '/img.jpg' },
  ];

  return (
    <div id="main" ref={scrollContainerRef}>
      <div id="nav1">
        <img src={OjusLogo} width="90" height="90" alt="" />
        <button className="button">
          <div className="dots_border" />
          <Link to='/council'><span className="text_button">Cultural</span></Link>
        </button>
        <button className="button">
          <div className="dots_border" />
          <Link to='/heads'><span className="text_button">Heads</span></Link>
        </button>
      </div>

      <div id="page1" data-scroll data-scroll-speed="-3">
        <div className="container">
          <div className="left">
            <p>OJUS - 2k25</p>
          </div>
          <div className="bottom">
            <p>OJUS 2K25 OJUS 2K25 OJUS 2K25 OJUS 2K25 OJUS 2K25 OJUS 2K25</p>
          </div>
          <div className="image">
            <a href="/cultural">
              <div className="card">
                <div className="wrapper">
                  <img src={drcover} className="cover-image" alt="Dark Rider Cover" />
                </div>
                <img src={drtitle} className="title" alt="Dark Rider Title" />
                <img src={drc}className="character" alt="Dark Rider Character" />
              </div>
            </a>

            <a href="/sports">
              <div className="card">
                <div className="wrapper">
                  <img src={frcover}className="cover-image" alt="Force Mage Cover" />
                </div>
                <img src={frtitle} className="title" alt="Force Mage Title" />
                <img src={frc} className="character" alt="Force Mage Character" />
              </div>
            </a>
          </div>
          <div className="right">
            <p>OJUS - 2k25</p>
          </div>
          <div className="top">
            <p>OJUS 2K25 OJUS 2K25 OJUS 2K25 OJUS 2K25 OJUS 2K25 OJUS 2K25</p>
          </div>
        </div>
      </div>

      <div id="page2" data-scroll data-scroll-speed="1" ref={page2Ref}>
        <div className="elem">
          <h2>Festivals</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
            </div>
          </div>
        </div>

        <div className="elem" data-video="./nfs2.mp4">
          <h2>Sports</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
            </div>
          </div>
        </div>

        <div className="elem" data-video="./val.mp4">
          <h2>Cultural</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
            </div>
          </div>
        </div>

        <div className="elem" data-img="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630">
          <h2>Ghanekar</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
              <h5>Demo text</h5>
            </div>
          </div>
        </div>
      </div>

      <div id="page3">
        <section className="slider-container">
          <div className="slider-images">
            {sliderData.map((data, index) => (
              <div
                key={index}
                className={`slider-img ${activeSlider === index ? 'active' : ''}`}
                onClick={() => handleSliderClick(index)}
              >
                <img src={img} alt={`Slider Image ${index + 1}`} />
                <h1 className='h1'>{data.name}</h1>
                <div className="details">
                  <h2>{data.name}</h2>
                  <p>{data.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="text-center p-3">
          <h7 className="text-body">
            OJUS WebDev 2k25❤️
          </h7>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import React from 'react';
import './Content.css';
import './Header.css';
import { Parallax } from "react-parallax";
import Image1 from '../images/img1.jpg';
import Image2 from '../images/img2.jpg';
import Image3 from '../images/img3.jpg';
import Image4 from '../images/img4.jpg';
import Image5 from '../images/img5.jpg';
import Image6 from '../images/img6.jpg';
import BuyNow from '../images/related1.jpeg';
import { useState } from 'react';

const handleClick = (e) => {
    e.preventDefault(); // Prevents the default action of the anchor tag
  };

  const Related = () =>{
    const [isToolbarVisible, setIsToolbarVisible] = useState(false);
    
    // Toggle toolbar visibility
    const toggleToolbar = () => {
      setIsToolbarVisible(!isToolbarVisible);
      console.log('toolbar visible', !isToolbarVisible);
      
    };

    return (
        <div className="sticky-button">
            
        <button>
            <img src={BuyNow}
             alt="Expand Toolbar"
        className="toolbar-trigger-image"
         onClick={toggleToolbar} />
         </button>


        {isToolbarVisible && (
          <div className="expanded-toolbar">
            








            <div class="rbt-list-inner">

<div class="rbt-logo">
    <a href="#" onClick={handleClick} target="_blank">
        <div class="logo-svg-holder">
            <svg x="0px" y="0px" viewBox="0 0 87 87" style={{ fill: '#ee2852', height: '40px' }} >
                <path d="M55.4,81.5c6.1-11.1,5.2-16.1-4.3-24.3c6.1-3.5,9.5-8.5,9.1-15.7c-0.5-8.2-7.7-14.7-16.3-14.6
                    c-8.5,0.1-15.6,6.7-15.9,15c-0.3,8.5,5.9,15.8,14.3,16.6c1.4,0.1,2.8,0.2,4.2,0.5c5.9,1.2,10.2,6.7,9.8,12.6
                    c-0.4,6.4-5.5,11.4-11.8,11.7C24.9,84.2,5.9,68.5,3.2,49.3C-0.1,26.9,14.4,6.8,36.4,2.8c22.3-4,43.4,10,48.1,32
                    c4.3,20-8.6,41.2-28.4,46.7C55.9,81.5,55.6,81.5,55.4,81.5z"></path>
            </svg>
        </div>
        <p class="logo-text-holder">Qode Interactive</p>
    </a>
</div>



                        <span class="rbt-list-related">Related Themes</span>
                                    <a target="_blank" href="#" onClick={handleClick} title="Sonora - Photography WordPress Theme">
                <div class="rbt-theme">
                    <div class="rbt-img-hover">
                        <img itemprop="image" width="225" height="114" src="https://previews.customer.envatousercontent.com/files/481152732/00_preview.__large_preview.jpg" alt="Sonora" class=""/>
                    </div>
                    <span class="rbt-theme-name">Sonora</span>
                    <span class="rbt-theme-tag">photography</span>
                    <span class="rbt-theme-price">$85</span>
                </div>
            </a>
                                            <a target="_blank" href="#" onClick={handleClick} title="Cassia - Photography Portfolio Theme">
                <div class="rbt-theme">
                    <div class="rbt-img-hover">
                        <img itemprop="image" width="225" height="114" src="https://previews.customer.envatousercontent.com/files/438700442/00_preview.__large_preview.png" alt="Cassia" class=""/>
                    </div>
                    <span class="rbt-theme-name">Cassia</span>
                    <span class="rbt-theme-tag">photography</span>
                    <span class="rbt-theme-price">$79</span>
                </div>
            </a>
                                            <a target="_blank" href="#" onClick={handleClick} title="Amoli - Fashion Photography Theme">
                <div class="rbt-theme">
                    <div class="rbt-img-hover">
                        <img itemprop="image" width="225" height="114" src="https://previews.customer.envatousercontent.com/files/352423420/00_preview.__large_preview.png" alt="Amoli" class=""/>
                    </div>
                    <span class="rbt-theme-name">Amoli</span>
                    <span class="rbt-theme-tag">photography</span>
                    <span class="rbt-theme-price">$79</span>
                </div>
            </a>
            </div>



          </div>
        )}
        </div>


    );

};


const PurchaseLink = () => {
    return (


<a className="purchase-link" target="_blank" href="#" onClick={handleClick}>
    <span className="rbt-icon">
        <svg x="0px" y="0px" viewBox="0 0 24 24" style={{ fill: '#ee2852', height: '16px' }}>
            <circle cx="9" cy="21" r="2"></circle>
            <circle cx="20" cy="21" r="2"></circle>
            <path d="M23.8,5.4C23.6,5.1,23.3,5,23,5H6.8L6,0.8C5.9,0.3,5.5,0,5,0H1C0.4,0,0,0.4,0,1s0.4,1,1,1h3.2L5,6.2c0,0,0,0.1,0,0.1
                l1.7,8.3C7,16,8.2,17,9.6,17c0,0,0,0,0.1,0h9.7c1.5,0,2.7-1,3-2.4L24,6.2C24,5.9,24,5.6,23.8,5.4z"></path>
        </svg>
    </span>
</a>

      
    );
  };

const Content = () => {
    return (
        <div className="App">
            <Parallax strength={600} bgImage={Image1}>
                <div className="content">
                    <div className="text-content"> 
                        <div>
                            <div>
                                <h1 style={{ color: '#ffffff' }}>
                                    Victoria &amp; Billy									
                                    <a className="shashank-st-title-link" href="https://solene.qodeinteractive.com/portfolio/two-columns/" target="_self"></a>
                                </h1>
                                <h3 style={{ textTransform: 'none', fontStyle: 'italic', color: '#ffffff' }}>
                                    <span>January 24, 2019</span>
                                </h3>
                            </div>
                        </div>		            
                    </div>
                </div>
            </Parallax>

            <Parallax strength={600} bgImage={Image2}>
                <div className="content">
                    <div className="text-content"> 
                        <div>
                            <div>
                                <h1 style={{ color: '#ffffff' }}>
                                    Gloria &amp; Howard		
                                    <a href="https://solene.qodeinteractive.com/portfolio/three-columns/" target="_self"></a>
                                </h1>
                                <h3 style={{ textTransform: 'none', fontStyle: 'italic', color: '#ffffff' }}>
                                    <span>April 30, 2019</span>
                                </h3>
                            </div>
                        </div>		            
                    </div>
                </div>
            </Parallax>

            <Parallax strength={600} bgImage={Image3}>
                <div className="content">
                    <div className="text-content"> 
                        <div>
                            <div>
                                <h1 style={{ color: '#ffffff' }}>
                                    Teresa &amp; Roy			
                                    <a href="https://solene.qodeinteractive.com/portfolio/four-columns/" target="_self"></a>
                                </h1>
                                <h3 style={{ textTransform: 'none', fontStyle: 'italic', color: '#ffffff' }}>
                                    <span>November 9, 2019</span>
                                </h3>
                            </div>
                        </div>		            
                    </div>
                </div>
            </Parallax>

            <Parallax strength={600} bgImage={Image4}>
                <div className="content">
                    <div className="text-content"> 
                        <div>
                            <div>
                                <h1 style={{ color: '#ffffff' }}>
                                    Lori &amp; Gregory			
                                    <a href="https://solene.qodeinteractive.com/portfolio/two-columns/" target="_self"></a>
                                </h1>
                                <h3 style={{ textTransform: 'none', fontStyle: 'italic', color: '#ffffff' }}>
                                    <span>April 19, 2019</span>
                                </h3>
                            </div>
                        </div>		            
                    </div>                
                </div>
            </Parallax>

            <Parallax strength={600} bgImage={Image5}>
                <div className="content">
                    <div className="text-content"> 
                        <div>
                            <div>
                                <h1 style={{ color: '#ffffff' }}>
                                    Patricia &amp; Bruce			
                                    <a href="https://solene.qodeinteractive.com/portfolio/three-columns/" target="_self"></a>
                                </h1>
                                <h3 style={{ textTransform: 'none', fontStyle: 'italic', color: '#ffffff' }}>
                                    <span>September 4, 2019</span>
                                </h3>
                            </div>
                        </div>		            
                    </div>  
                </div>
            </Parallax>

            <Parallax strength={600} bgImage={Image6}>
                <div className="content">
                    <div className="text-content"> 
                        <div>
                            <div>
                                <h1 style={{ color: '#ffffff' }}>
                                    Rachel &amp; Austin			
                                    <a href="https://solene.qodeinteractive.com/portfolio/four-columns/" target="_self"></a>
                                </h1>
                                <h3 style={{ textTransform: 'none', fontStyle: 'italic', color: '#ffffff' }}>
                                    <span>March 9, 2019</span>
                                </h3>
                            </div>
                        </div>		            
                    </div>  
                 </div>
            </Parallax>

            <Related/>

         <PurchaseLink/>
<div class="spacer"></div>
            
        </div>
    );
};

export default Content;
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
            <p> extended toolbar</p>
            <button onClick={() => alert('Action 1 clicked!')}>Action 1</button>
            <button onClick={() => alert('Action 2 clicked!')}>Action 2</button>
            <button onClick={() => alert('Action 3 clicked!')}>Action 3</button>
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
import React from 'react';
import './Header.css';


const handleClick = (e) => {
    e.preventDefault(); // Prevents the default action of the anchor tag
  };
const Header = () => {
  return (
    <header class="shashank-page-header">
        <div class="shashank-menu-area">
        <div class="shashank-vertical-align-containers">
                <div class="shashank-position-left">
                    <div class="shashank-position-left-inner">
                        <div class="shashank-logo-wrapper">
                            <a itemprop="url" href="#" onClick={handleClick} style={{height: '20px;'}}>
                                <img itemprop="image" class="shashank-normal-logo" src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/Solene.png" width="150" height="80" alt="logo"/>
                                <img itemprop="image" class="shashank-dark-logo" src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/Solene.png" width="150" height="80" alt="dark logo"/>
                                <img itemprop="image" class="shashank-light-logo" src="https://solene.qodeinteractive.com/wp-content/uploads/2020/01/Solene.png" width="150" height="80" alt="light logo"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="shashank-position-right">
                    <div class="shashank-position-right-inner">
                        <a href="#" onClick={handleClick} class="shashank-fullscreen-menu-opener shashank-fullscreen-menu-opener-predefined">
                            <span class="shashank-fullscreen-menu-close-icon">
                                <span class="shashank-hm-label">Close</span><span class="shashank-hm-lines"><span class="shashank-hm-line shashank-line-1"></span>
                                <span class="shashank-hm-line shashank-line-2"></span>
                                </span>
                            </span>
                            <span class="shashank-fullscreen-menu-opener-icon">
                                <span class="shashank-hm-label">Menu</span>
                                    <span class="shashank-hm-lines">
                                        <span class="shashank-hm-line shashank-line-1"></span>
                                        <span class="shashank-hm-line shashank-line-2"></span>
                                    </span>							
                                </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
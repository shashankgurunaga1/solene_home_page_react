import React from 'react';
import './Footer.css';
import './Header.css';
import { useEffect } from 'react';

const handleClick = (e) => {
  e.preventDefault(); // Prevents the default action of the anchor tag
};


/*  animation method  */

const AnimatedText = () => {
  const text = "- Wedding - Photography - Studio - Solene";
  const totalChars = text.length;

  return (
    <div className="gadget shashank-complex-gadget">
      <div
        className="shashank-stamp-holder shashank-stamp-appeared shashank-appear shashank-init shashank-animate-stamp"
        style={{ color: '#4d504a', fontSize: '11px' }}
        data-appearing-delay="0"
      >
        <div className="shashank-stamp-image-holder">
          <img
            width="80"
            height="88"
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/footer-text-test.png"
            className="attachment-full size-full"
            alt="m"
            decoding="async"
            loading="lazy"
            align="centers"
          />
        </div>
        <div className="shashank-s-text" data-count={totalChars}>
          {text.split('').map((char, index) => {
            // Calculate rotation dynamically
            const rotation = (index * (360 / totalChars)) - 90; // Adjust the rotation range if needed
            const delay = `${index * 14.2857}ms`;

            return (
              <span
                key={index}
                className="shashank-s-character"
                style={{
                  transform: `rotate(${rotation}deg) translateZ(0px) translateX(-5px)`,
                  transitionDelay: delay
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
       
      </div>
    </div>
    
  );
};


const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById('eltdf-back-to-top');
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div>
    

   <div className="shashank-footer-top-holder">
  <div className="shashank-footer-top-inner shashank-grid">
    <div className="shashank-grid-row shashank-footer-top-alignment-center">
      <div className="shashank-column-content shashank-grid-col-4">
        <div className="gadget shashank-separator-gadget">
          <div className="shashank-separator-holder clearfix shashank-separator-center shashank-separator-normal">
           
          </div>
        </div>
        <div id="text-3" className="gadget shashank-footer-column-1 gadget_text">
          <div className="textgadget">
            <p>
              <span
                style={{
                  fontSize: '22px',
                  fontFamily: 'Cormorant Garamond',
                  color: '#4d504a',
                  fontWeight: 400,
                  letterSpacing: '.15em',
                }}
              >
                FOLLOW US
              </span>
            </p>
          </div>
        </div>

        <div className="gadget shashank-social-icons-group-gadget text-align-center">
          


     <a
    className="shashank-social-icon-gadget-holder shashank-icon-has-hover"
    data-hover-color="#afafa5"
    style={{
      color: '#84847c',
      fontSize: '18px',
      margin: '0 10px',
    }}
    href="#"
    onClick={handleClick}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="shashank-social-icon-gadget fab fa-instagram"></span>
    <span style={{ marginLeft: '5px' }}></span>
  </a>

        <a
    className="shashank-social-icon-gadget-holder shashank-icon-has-hover"
    data-hover-color="#afafa5"
    style={{
      color: '#84847c',
      fontSize: '18px',
      margin: '0 10px', // Added margin for spacing between icons
    }}
    href="#"
    onClick={handleClick}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="shashank-social-icon-gadget fab fa-facebook-f"></span>
    <span style={{ marginLeft: '5px' }}></span>
  </a>
  <a
    className="shashank-social-icon-gadget-holder shashank-icon-has-hover"
    data-hover-color="#afafa5"
    style={{
      color: '#84847c',
      fontSize: '18px',
      margin: '0 10px',
    }}
    href="#"
    onClick={handleClick}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="shashank-social-icon-gadget fab fa-twitter"></span>
    <span style={{ marginLeft: '5px' }}></span>
  </a>


  <a
    className="shashank-social-icon-gadget-holder shashank-icon-has-hover"
    data-hover-color="#afafa5"
    style={{
      color: '#84847c',
      fontSize: '18px',
      margin: '0 10px',
    }}
    href="#"
    onClick={handleClick}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="shashank-social-icon-gadget fab fa-youtube"></span>
    <span style={{ marginLeft: '5px' }}></span>
  </a>


        </div>

        <div id="text-4" className="gadget shashank-footer-column-1 gadget_text">
          <div className="textgadget">
            <p>
              <span
                style={{
                  fontSize: '20px',
                  fontFamily: 'Cormorant Garamond',
                  color: '#84847c',
                  fontStyle: 'italic',
                }}
              >
                <a href="#" onClick={handleClick}>
                  <span
                    className="cf_email"
                    data-cfemail="d380bcbfb6bdb693a2bcb7b6babda7b6a1b2b0a7baa5b6fdb0bcbe"
                  >
                    Solene@qodeinteractive.com
                  </span>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>




      <div className="shashank-column-content shashank-grid-col-4">
        <div className="gadget shashank-separator-gadget">
          <div className="shashank-separator-holder clearfix shashank-separator-center shashank-separator-normal">
            <div
              className="shashank-separator"
              style={{
                borderColor: '#ffffff',
                borderStyle: 'solid',
                width: '1px',
                borderBottomWidth: '1px',
                marginTop: '20px',
              }}
            ></div>
          </div>
        </div>




        <AnimatedText />




       
      </div>

      <div className="shashank-column-content shashank-grid-col-4">
        <div className="gadget shashank-separator-gadget">
          <div className="shashank-separator-holder clearfix shashank-separator-center shashank-separator-normal">
            <div
              className="shashank-separator"
              style={{
                borderColor: '#ffffff',
                borderStyle: 'solid',
                width: '1px',
                borderBottomWidth: '1px',
                marginTop: '19px',
              }}
            ></div>
          </div>
        </div>
        <div id="text-5" className="gadget shashank-footer-column-3 gadget_text">
          <div className="textgadget">
            <p>
              <span
                style={{
                  fontSize: '22px',
                  fontFamily: 'Cormorant Garamond',
                  color: '#4d504a',
                  fontWeight: 400,
                  letterSpacing: '.15em',
                }}
              >
                NEWSLETTER
              </span>
            </p>
            <p>
              <span
                style={{
                  marginTop: '-1px',
                  marginBottom: '-10px',
                  fontSize: '20px',
                  fontFamily: 'Cormorant Garamond',
                  color: '#84847c',
                  fontStyle: 'italic',
                }}
              >
                Follow our latest stories.
              </span>
            </p>
          </div>
        </div>
        <div className="gadget shashank-contact-form-7-gadget">
          <div className="wpcf7 no-js" id="wpcf7-f15-o1" lang="en-US" dir="ltr">
            <div className="screen-reader-response">
              <p role="status" aria-live="polite" aria-atomic="true"></p>
              <ul></ul>
            </div>

            <form
              action="/parallax-showcase/#wpcf7-f15-o1"
              method="post"
              className="wpcf7-form init demo"
              aria-label="Contact form"
              novalidate="novalidate"
              data-status="init"
            >
              <div style={{ display: 'none' }}>
                <input type="hidden" name="_wpcf7" value="15" />
                <input type="hidden" name="_wpcf7_version" value="5.9.8" />
                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f15-o1" />
                <input type="hidden" name="_wpcf7_container_post" value="0" />
                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
              </div>
              <div className="shashank-nl-custom-style">
                <span className="wpcf7-form-control-wrap" data-name="your-email">
                  <input
                    size="40"
                    maxlength="400"
                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="e-mail"
                    value=""
                    type="email"
                    name="your-email"
                  />
                </span>
                <button className="wpcf7-form-control wpcf7-submit shashank-btn shashank-btn-large shashank-btn-solid" type="submit">
                  <span className="shashank-btn-text">Send</span>
                </button>
              </div>
              <div className="wpcf7-response-output" aria-hidden="true"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="spacer"> </div>



    <div class="shashank-footer-bottom-holder">
      <div class="shashank-footer-bottom-inner shashank-grid">
        <div class="shashank-grid-row shashank-footer-bottom-alignment-center">
         
          <div class="shashank-grid-col-4">
           
          </div>
          <div class="shashank-grid-col-4">
          <div id="text-20" class="gadget shashank-footer-bottom-column-2 gadget_text">
            			<div class="textgadget">
                    <p>
                      <span style={{"font-size": '18px;', "font-family": "Cormorant Garamond;", "color": "#4d504a;", "font-style": "italic;", "font-weight": "400;"}}>
                        © 2020 <a href="https://qodeinteractive.com/" rel="nofollow noopener" target="_blank"> Qode Interactive</a>, All Rights Reserved
                      </span>
                      </p>
                  </div>
		      </div>   
        </div>
        <div class="shashank-grid-col-4">
      
        </div>
 
      </div>
    </div>
</div>




<a id="eltdf-back-to-top" href="#">
    <span>
        <svg className="eltdf-svg-circle">
            <circle cx="50%" cy="50%" r="45%"></circle>
        </svg>
        <svg className="eltdf-svg-circle">
            <circle cx="50%" cy="50%" r="45%"></circle>
        </svg>
        <svg className="eltdf-back-to-top-arrow" width="12.771px" height="19.503px" viewBox="8.563 4.497 12.771 19.503" xmlns="http://www.w3.org/2000/svg">
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="14.962" y1="23.433" x2="14.962" y2="5.058"/>
            <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" points="9.155,10.865 14.962,5.058 20.769,10.865"/>
        </svg>
    </span>
</a>


</div>
  );
};

export default Footer;
import React from 'react'

function Footer() {
    return (
      <div className="container">
        <div className="move-to-top">
          <a href="#hero">
            <i className="fas fa-chevron-up"></i>
          </a>
        </div>
        <div className="footer-content">
          <div className="footer-content-about animate-up">
            <h2>About Rosa</h2>
            <div className="asterisk">
              <i className="fas fa-asterisk"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              aliquid quia tenetur iusto alias laboriosam ad adipisci earum sit
              officiis praesentium, fugit provident voluptatem, nisi at expedita
              esse consequatur corrupti.
            </p>
          </div>
          <div className="footer-content-divider animate-bottom">
            <h3>Follow Along</h3>
            <ul className="social-media">
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h3>Subscribe to our newsletter</h3>
            <form action="">
              <input type="text" placeholder="Your email" />
              <button type="submit">
                <i className="fas fa-envelope"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Footer

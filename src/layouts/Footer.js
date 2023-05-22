import react from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a target="_blank" rel="nofollow" href="https://twitter.com/_KyleRobins">
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
                <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/robinskyle/">
                  <i aria-hidden="true" className="fab fa-linkedin" />
                </a>
                <a target="_blank" rel="nofollow" href="https://github.com/kylerobins">
                  <i aria-hidden="true" className="fab fa-github" />
                </a>
                <a target="_blank" rel="nofollow" href="https://discord.gg/BMFKaWPw">
                  <i aria-hidden="true" className="fab fa-discord" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="copyright-text align-center">
            © {currentYear} <strong>KyleRobins</strong>. All rights reserved.
            </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by <strong>Kyle From Elitco.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

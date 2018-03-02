import React, { Component } from 'react';



class Footer extends Component {
  render() {
    return (
			<footer>
        <div className="footer-container">
          <div className="main-info">
            <div className="base-intro">
              <h5>HighLevel3D</h5>
              <p>這是一個開放的高階數位模型庫，你可以在這裡下載並使用所有模型。</p>
            </div>
            <div className="quick-link">
              <div className="link-section">
                <h5 className="section-header">客戶服務</h5>
                <ul className="section-content list-unstyled">
                  <li><a href="#/faqs">常見問題</a></li>
                </ul>
              </div>

              <div className="link-section">
                <h5 className="section-header">關於我們</h5>
                <ul className="section-content list-unstyled" >
                  <li> <a href="#/company">建站理念</a></li>
                  <li> <a href="#/contact_us">聯繫方式</a></li>
                </ul>
              </div>

              <div className="link-section">
                <h5 className="section-header">官方社群</h5>
                <ul className="section-content list-unstyled" >
                  <li><a href="https://www.com" target="_blank"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i> 文化部官網</a></li>
                </ul>
              </div>

            </div>

          </div>
          <div className="copyright-info">
            <a className="link-left" href="#">使用條款</a>
            <a className="link-ritght" href="#">隱私政策</a>
            <p className="company"><span class="short-split-line"> | </span>HighLevel3D<span className="symbol">©</span>2017</p>
          </div>
        </div>
			</footer>
    );
  }
}

export default Footer;
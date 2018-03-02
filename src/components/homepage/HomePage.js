import React, { Component } from 'react';
import Banner from './Banner'


// img
import refPNG from '../../Assets/img/b01-7.png';

class Homepage extends Component {
  render() {
    return (
      
      <div className="content-pt70">
        <Banner />
        
        <div className="clearfix"></div>

        <div className="container hot-box">
            <div className="title">
              <h2>熱門推薦</h2>
              <div class="sub">
                有使用到模型庫的成果影片。
              </div>
            </div>
            <div className="hot-box-inner">
              <div className="item">
                <img src="http://via.placeholder.com/334x250" alt=""/>
                <div className="hot-box-title">中正紀念堂</div>
                <div className="hot-box-title-eng">Chiang Kai-shek Memorial Hall</div>
                <div className="hot-box-counter">
                  <div className="views"><i class="fas fa-eye"></i> 1151</div>
                  <div className="download"><i class="fas fa-download"></i> 152</div>
                </div>
              </div>
              <div className="item">
                <img src="http://via.placeholder.com/334x250" alt=""/>
                <div className="hot-box-title">中正紀念堂</div>
                <div className="hot-box-title-eng">Chiang Kai-shek Memorial Hall</div>
                <div className="hot-box-counter">
                  <div className="views"><i class="fas fa-eye"></i> 1151</div>
                  <div className="download"><i class="fas fa-download"></i> 152</div>
                </div>
              </div>
              <div className="item">
                <img src="http://via.placeholder.com/334x250" alt=""/>
                <div className="hot-box-title">中正紀念堂</div>
                <div className="hot-box-title-eng">Chiang Kai-shek Memorial Hall</div>
                <div className="hot-box-counter">
                  <div className="views"><i class="fas fa-eye"></i> 1151</div>
                  <div className="download"><i class="fas fa-download"></i> 152</div>
                </div>
              </div>
            </div>
        </div>

        <div className="container company">
          <div class="title">
            <h2>範例影片</h2>
            <div class="sub">
                有使用到模型庫的成果影片。
            </div>
          </div>
          <div class="row company-inner">
            <div class="item">
              <img src={refPNG} alt=""/>
            </div>
            <div class="item">
            <img src={refPNG} alt=""/>
            </div>
            <div class="item">
            <img src={refPNG} alt=""/>
            </div>
          </div>
        </div>
        
        <div className="container company">
          <div class="title">
            <h2>教學影片</h2>
            <div class="sub">
                有使用到模型庫的成果影片。
            </div>
          </div>
          <div class="row company-inner">
            <div class="item">
              <img src={refPNG} alt=""/>
            </div>
            <div class="item">
            <img src={refPNG} alt=""/>
            </div>
            <div class="item">
            <img src={refPNG} alt=""/>
            </div>
          </div>
        </div>

        <div class="call-action">
          <div class="container">
            <h2>在HighLevel3D下載模型如此簡單</h2>
            <a href="">立即瀏覽</a>
          </div>
        </div>

      </div>

    );
  }
}

export default Homepage;
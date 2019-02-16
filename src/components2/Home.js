import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import './Home.css'
import './css/slick.css'

class Home extends Component {
    render() {    
        return (
            <div className="wrap"><img src='./images/bg-02.png' alt=""/>
            <header>
                <nav className="d-nav">
                <ul className="psy-pane">
                    <li className="home"><img src='./images/home.png' alt=""/><a className="smooth psy-btn active" href="/">home</a></li>
                    <li className="contact"><img src="./images/contact.png" alt=""/><a className="smooth psy-btn" href="#id2">contact</a></li>
                    <li className="about"><img src="./images/about.png" alt=""/><a className="smooth psy-btn" href="#id3">about us</a></li>
                </ul>
                <ul className="top-right-menu">
                    <li className="sign"><img src="./images/sign.png" alt=""/><a className="smooth" href="">sign in</a></li>
                    <li className="sign"><img src="./images/sign.png" alt=""/><a className="smooth" href="">sign up</a></li>
                </ul>
                </nav>
                <button className="open-mnav"><span></span><span></span><span></span></button>
            </header>
            <section className="psy-section" id="id1">
                <div className="container">
                <div className="board"><img id="bb" src="./images/bh.png" alt=""/>
                    <div className="row">
                    <div className="col-lg-5 item">
                        <h1>CAT</h1>
                    </div>
                    <div className="col-lg-7 item">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aliquam dolore pariatur odit repellendus perspiciatis corrupti dolorem, porro est voluptatibus quo, eum unde rerum enim et animi nisi temporibus necessitatibus debitis! Quis molestias sint quaerat.</p>
                    </div>
                    </div><img id="sub1" src="./images/2x/sub1.png" alt=""/><img id="sub2" src="./images/2x/sub2.png" alt=""/><img id="sub3" src="./images/2x/sub3.png" alt=""/>
                </div>
                <div className="cta">
                    <div className="item-cta"><a className="psy-btn" href="#for-parent">Parents</a></div>
                    <div className="item-cta"><a className="psy-btn" href="#id2">Children</a></div>
                </div>
                </div><img className="f1 fish" src="./images/SVG/f1.svg" alt=""/><img className="f3 fish" src="./images/SVG/f3.svg" alt=""/><img className="f4 fish" src="./images/SVG/f3.svg" alt=""/><img className="f5 fish" src="./images/SVG/f5.svg" alt=""/><img className="b1 bubble" src="./images/SVG/b1.svg" alt=""/><img className="b2 bubble" src="./images/SVG/b1.svg" alt=""/><img className="b3 bubble" src="./images/SVG/b1.svg" alt=""/><img className="b4 bubble" src="./images/SVG/b1.svg" alt=""/>
            </section>
            <section className="psy-section" id="id2">
                <div className="container">
                    <div className="row tn">
                        <div className="col-lg-6 offset-lg-3">
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iste sunt explicabo? Doloremque, odio. Quos totam corrupti dignissimos? Consequuntur impedit quaerat non dolorum autem tenetur! Impedit deserunt dignissimos facilis odio.</h3>
                        </div>
                        <div className="col-lg-12">
                            <div className="bigwhale"><a className="test-now">
                                <img src="./images/2x/whale.png" alt=""/></a>
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                    <img className="girl" src="./images/girl.png" alt=""/>
                    <img className="boy" src="./images/boy.png" alt=""/>
                    <img className="whale" src="./images/wavebg.png" alt=""/>
                </div>
                <div className="container list-test">
                    <div className="row">
                        <div className="top">
                            <a className="test-item ghitar" href="/music">
                                <ReactSVG src="./images/SVG/music.svg" />
                            </a>
                            <a className="test-item brain" href="/iq">
                                <ReactSVG src="./images/SVG/iq.svg" />
                            </a>
                            <a className="test-item lightball" href="/creative">
                                <ReactSVG src="./images/SVG/creative.svg" />
                            </a>
                        </div>
                        <div className="bot">
                            <a className="test-item atom" href="/common">
                                <ReactSVG src="./images/SVG/common.svg" />
                            </a>
                            <a className="test-item zoom" href="/memory">
                                <ReactSVG src="./images/SVG/memory.svg" />
                            </a>
                            <a className="test-item chat" href="/language">
                                <ReactSVG src="./images/SVG/language.svg" />
                            </a>
                            <a className="test-item global" href="/position">
                                <ReactSVG src="./images/SVG/position.svg" />
                            </a>
                        </div>
                    </div>
                    <img className="f6" src="./images/SVG/f6.svg" alt=""/>
                    <img className="f7" src="./images/SVG/f7.svg" alt=""/>
                </div>
                <img id="island" src="./images/island.png" alt=""/>
            </section>
            <section id="for-parent">
        <div className="container">
          <div className="for-parent-title">
            <img src="./images/for-parent.png" alt="" />
          </div>

          <div className="for-parent-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              veniam consequatur provident laudantium voluptates ad blanditiis
              illo doloremque optio, consectetur veritatis officiis deleniti.
              Magni impedit, totam odio non exercitationem ut!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              vero aut amet quae inventore fugiat in praesentium natus cumque
              quidem.
            </p>
          </div>

          <div className="testnow-tailieu-wr">
            <button className="testnow">Test now</button>
            <button className="tailieu">Tai Lieu</button>
          </div>
          <div className="above-trynow">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex in
              itaque qui tempore minus ducimus magni, quam et consequatur cum
              sed exercitationem fugit iusto a quasi culpa, enim necessitatibus.
              Molestiae fuga, placeat quasi eum. Corporis, adipisci facilis in
              quod.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, soluta.
            </p>
          </div>

          <div className="trynow-btn-wr">
            <button>Try now</button>
          </div>

          <div className="article-slide-wr">
            <div className="article-slide">
              <div className="one-article">
                <div className="img-slide-wr">
                  <a href="#" 
                    ><img
                      id="img-1"
                      src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
                      alt=""
                  /></a>
                </div>

                <a href="#" >
                  <p className="slide-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione porro quia facere commodi laboriosam eius est
                    obcaecati, incidunt nemo, atque aliquid fugiat delectus,
                    accusantium quas.
                  </p>
                </a>
              </div>

              <div className="one-article">
                <div className="img-slide-wr">
                  <a href="#" 
                    ><img
                      id="img-1"
                      src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
                      alt=""
                  /></a>
                </div>

                <a href="#" >
                  <p className="slide-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione porro quia facere commodi laboriosam eius est
                    obcaecati, incidunt nemo, atque aliquid fugiat delectus,
                    accusantium quas.
                  </p>
                </a>
              </div>

              <div className="one-article">
                <div className="img-slide-wr">
                  <a href="#" 
                    ><img
                      id="img-1"
                      src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
                      alt=""
                  /></a>
                </div>

                <a href="#" >
                  <p className="slide-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione porro quia facere commodi laboriosam eius est
                    obcaecati, incidunt nemo, atque aliquid fugiat delectus,
                    accusantium quas.
                  </p>
                </a>
              </div>

              <div className="one-article">
                <div className="img-slide-wr">
                  <a href="#" 
                    ><img
                      id="img-1"
                      src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
                      alt=""
                  /></a>
                </div>

                <a href="#" >
                  <p className="slide-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione porro quia facere commodi laboriosam eius est
                    obcaecati, incidunt nemo, atque aliquid fugiat delectus,
                    accusantium quas.
                  </p>
                </a>
              </div>

              <div className="one-article">
                <div className="img-slide-wr">
                  <a href="#" 
                    ><img
                      id="img-1"
                      src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
                      alt=""
                  /></a>
                </div>

                <a href="#" >
                  <p className="slide-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione porro quia facere commodi laboriosam eius est
                    obcaecati, incidunt nemo, atque aliquid fugiat delectus,
                    accusantium quas.
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="ultilities-wr">
            <div className="ult-slide">
              <div className="one-ult">
                <div className="img-ult-wr">
                  <img src="images/icon1.png" alt="" />
                </div>

                <div className="ult-content">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="one-ult">
                <div className="img-ult-wr">
                  <img src="images/icon2.png" alt="" />
                </div>

                <div className="ult-content">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="one-ult">
                <div className="img-ult-wr">
                  <img src="images/icon3.png" alt="" />
                </div>

                <div className="ult-content">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="one-ult">
                <div className="img-ult-wr">
                  <img src="images/icon2.png" alt="" />
                </div>

                <div className="ult-content">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="one-ult">
                <div className="img-ult-wr">
                  <img src="images/icon1.png" alt="" />
                </div>

                <div className="ult-content">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                assumenda quaerat minima sunt, hic eos quas voluptatem, nesciunt
                ad, unde quis aspernatur maxime odio iusto! Cum illum facere,
                voluptate atque deserunt! Natus temporibus excepturi consectetur
                ratione qui libero corporis dolores.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                sapiente ad, odio facilis delectus quasi ab magni temporibus?
                Dolorum debitis, unde maiores tempora impedit fugit assumenda
                magni explicabo facere voluptate?
              </p>

            </div>
            <div className="col-md-4 col-xs-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                assumenda quaerat minima sunt, hic eos quas voluptatem, nesciunt
                ad, unde quis aspernatur maxime odio iusto! Cum illum facere,
                voluptate atque deserunt! Natus temporibus excepturi consectetur
                ratione qui libero corporis dolores.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                sapiente ad, odio facilis delectus quasi ab magni temporibus?
                Dolorum debitis, unde maiores tempora impedit fugit assumenda
                magni explicabo facere voluptate?
              </p>

            </div>
            <div className="col-md-4 col-xs-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                assumenda quaerat minima sunt, hic eos quas voluptatem, nesciunt
                ad, unde quis aspernatur maxime odio iusto! Cum illum facere,
                voluptate atque deserunt! Natus temporibus excepturi consectetur
                ratione qui libero corporis dolores.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                sapiente ad, odio facilis delectus quasi ab magni temporibus?
                Dolorum debitis, unde maiores tempora impedit fugit assumenda
                magni explicabo facere voluptate?
              </p>

            </div>
          </div>
        </div>
      </footer>
      <style>
      {`
        #id1 {
          margin-top: 100px;
          position: relative;
          padding: 100px 0;
          z-index: 3
        }
        
        #id1 .f1 {
          position: absolute;
          width: 100px;
          top: 40%;
          z-index: 4;
          left: 90%
        }
        
        #id1 .f5 {
          position: absolute;
          width: 70px;
          top: 400px;
          left: 50%
        }
        
        #id1 .f3 {
          position: absolute;
          width: 100px;
          top: 85px;
          left: 0;
          z-index: 11
        }
        
        #id1 .f4 {
          position: absolute;
          width: 80px;
          bottom: 100px;
          left: 50px;
          z-index: 2
        }
        
        #id1 .bubble {
          position: absolute;
          z-index: 5
        }
        
        #id1 .bubble.b1 {
          top: 100px;
          left: 100px;
          width: 50px
        }
        
        #id1 .bubble.b2 {
          top: 500px;
          left: 150px;
          width: 40px
        }
        
        #id1 .bubble.b3 {
          top: 200px;
          right: 250px;
          width: 30px
        }
        
        #id1 .bubble.b4 {
          top: 600px;
          right: 100px;
          width: 50px
        }
        
        #id1 .board {
          color: #066b7c;
          position: relative;
          z-index: 3
        }
        
        #id1 .board #bb {
          position: relative;
          z-index: 2
        }
        
        #id1 .board .row {
          position: absolute;
          z-index: 2;
          top: 30%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          width: 100%
        }
        
        #id1 .board .item {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center
        }
        
        #id1 .board .item.col-lg-5 {
          padding-left: 10vw;
          font-size: 60px;
          font-weight: bold;
          font-family: "Hobo", sans-serif
        }
        
        #id1 .board .item.col-lg-7 {
          padding: 0 10vw 0 0
        }
        
        #id1 .board #sub1 {
          width: 240px;
          position: absolute;
          left: 0;
          top: 0;
          -webkit-transform: translate(-25%, 10%);
          -ms-transform: translate(-25%, 10%);
          transform: translate(-25%, 10%);
          z-index: 5
        }
        
        #id1 .board #sub2 {
          width: 180px;
          position: absolute;
          top: 0;
          left: 45%;
          z-index: 3
        }
        
        #id1 .board #sub3 {
          width: 200px;
          position: absolute;
          top: -5%;
          left: 90%;
          z-index: 1
        }
        
        #id1 .cta {
          width: 100%;
          z-index: 3;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          margin-top: -100px
        }
        
        #id1 .cta .item-cta {
          position: relative;
          width: 300px;
          height: 80px
        }
        
        #id1 .cta .item-cta:first-child {
          left: 30px;
          margin-top: -10px
        }
        
        #id1 .cta .item-cta:nth-child(2) {
          left: -85px
        }
        
        #id1 .cta a {
          color: #000000;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          width: 100%;
          height: 100%;
          text-align: center;
          position: absolute;
          top: 50%;
          bottom: 25px;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          font-size: 30px;
          font-weight: bold;
          color: #066b7c;
          z-index: 3
        }
        
        #id2 {
          position: relative;
          z-index: 3
        }
        
        #id2 .container {
          position: relative
        }
        
        #id2 .container .whale {
          position: absolute;
          top: 0;
          left: calc(50% + 10px);
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          transform: translateX(-50%);
          z-index: 2
        }
        
        #id2 .container .girl {
          position: absolute;
          top: 50px;
          left: -100px;
          z-index: 3;
          width: 400px
        }
        
        #id2 .container .boy {
          position: absolute;
          top: 450px;
          left: 70%;
          z-index: 3;
          width: 400px
        }
        
        #id2 .container .row.tn {
          position: relative;
          z-index: 3;
          padding-top: 200px
        }
        
        #id2 .container .row.tn h3 {
          color: #066b7c;
          font-weight: bold;
          font-size: 20px
        }
        
        #id2 .container .bigwhale {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center
        }
        
        #id2 .container .bigwhale .bg {
          background: url(images/wave.png) no-repeat;
          background-position: -50px bottom;
          height: 300px;
          width: calc(100% - 42px);
          margin-top: -150px;
          margin-left: -40px
        }
        
        #id2 .container .test-now {
          display: block;
          width: 300px;
          margin: 30px auto 0;
          cursor: pointer
        }
        
        #id2 .container .list-test {
          position: relative;
          z-index: 5;
          margin-top: -50px
        }
        
        #id2 .container .bot,
        #id2 .container .top {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          width: 100%
        }
        
        #id2 .container .test-item {
          display: block;
          width: 100px;
          margin: 0 50px 40px;
          position: relative;
          z-index: 5
        }
        
        .test-item:hover {
          transform: scale(1.3);
          transition: .3s;
        }
        
        #id2 #island {
          width: 160vw;
          position: relative;
          margin-top: -70px;
          z-index: 4
        }
        
        #for-parent {
          position: relative;
          z-index: 5
        }
        
        .test-template-page #id2 {
          margin-top: 200px
        }
        
        .test-template-page #testForm {
          margin-left: 30px;
          margin-top: -50px;
          width: 90%;
          min-width: 300px;
          position: relative;
          z-index: 3
        }
        
        .test-template-page .tab {
          display: none;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center
        }
        
        .test-template-page .tab>img {
          width: 300px
        }
        
        .test-template-page .tab .answer {
          margin-top: 50px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center
        }
        
        .test-template-page .tab .answer label {
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          cursor: pointer
        }
        
        .test-template-page .tab .answer label:hover span:before {
          opacity: .3
        }
        
        .test-template-page .tab .answer label img {
          width: 90%
        }
        
        .test-template-page .tab .answer label input {
          position: absolute;
          opacity: 0
        }
        
        .test-template-page .tab .answer label input:checked~span:before {
          opacity: 1
        }
        
        .test-template-page .tab .answer label span {
          position: absolute;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          width: 20px;
          height: 20px;
          background: #ffffff;
          border: 1px solid #000;
          bottom: 0;
          left: 5%;
          font: normal normal normal 14px/1 FontAwesome;
          font-size: 18px;
          color: #D68657
        }
        
        .test-template-page .tab .answer label span:before {
          position: absolute;
          top: 0;
          left: 0;
          content: "\f00c";
          opacity: 0
        }
        
        .test-template-page .btn {
          margin-top: 50px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-pack: distribute;
          justify-content: space-around
        }
        
        .test-template-page button {
          background-image: url(images/gradient.png);
          width: 200px;
          height: 60px;
          border: 1px solid rgba(0, 0, 0, 0);
          outline: 1px solid rgba(0, 0, 0, 0);
          cursor: pointer;
          font-size: 32px;
          text-transform: uppercase;
          color: white;
          font-family: 'Tw Cen MT Condensed Extra Bold';
          border-radius: 15px;
          -webkit-box-shadow: 7px 7px 9px 2px rgba(0, 0, 0, 0.75);
          box-shadow: 7px 7px 9px 2px rgba(0, 0, 0, 0.75);
          text-shadow: 4px 4px 2px #969696
        }
        
        .test-template-page button:hover {
          opacity: 0.8
        }
        
        .test-template-page .dot {
          position: absolute;
          bottom: 0;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%)
        }
        
        .test-template-page .step {
          height: 15px;
          width: 15px;
          margin: 0 2px;
          background-color: #fff;
          border: none;
          border-radius: 50%;
          display: inline-block;
          opacity: 0.5
        }
        
        .test-template-page .step.active {
          opacity: 1;
          background: #D68657
        }
        
        .test-template-page .step.finish {
          background-color: #D68657
        }
        
        .slick-dots {
          padding-left: 0
        }
        
        .one-article {
          padding: 10px
        }
        
        .article-slide-wr,
        .ultilities-wr {
          padding: 20px 30px
        }
        
        .ultilities-wr {
          margin-top: 80px
        }
        
        .article-slide-wr {
          background-color: rgba(11, 11, 11, 0.4)
        }
        
        .one-article .slide-content {
          font-family: 'Times New Roman';
          font-size: 14px;
          color: #99ecff;
          text-align: center;
          margin-top: 30px
        }
        
        .slick-next,
        .slick-prev {
          position: absolute;
          border: 1px solid rgba(0, 0, 0, 0);
          z-index: 100;
          background-color: rgba(0, 0, 0, 0);
          color: rgba(0, 0, 0, 0);
          background-repeat: no-repeat;
          width: 20px;
          height: 24px;
          background-position: center center;
          cursor: pointer;
          padding: 5px;
          background-origin: padding-box
        }
        
        .slick-next,
        .slick-prev {
          top: 50%;
          transform: translateY(-50%);
          outline: none;
        }
        
        .slick-next {
          right: -20px;
          background-image: url("images/next-button.png")
        }
        
        .slick-prev {
          left: -20px;
          background-image: url("images/prev-button.png")
        }
        
        .slick-dots {
          list-style-type: none;
          margin: 10px auto!important;
          display: -webkit-box!important;
          display: -ms-flexbox!important;
          display: flex!important;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center
        }
        
        .slick-dots li {
          margin: 10px;
          cursor: pointer
        }
        
        .slick-dots li button {
          cursor: pointer;
          display: block;
          width: 13px;
          height: 13px;
          text-indent: -9999px;
          background: url("images/dot-normal.png") center center/contain no-repeat
        }
        
        .slick-dots li.slick-active button {
          background: url("images/dot-active.png") center center/contain no-repeat
        }
        
        .for-parent-title {
          text-align: center;
          padding-top: 20px
        }
        
        .for-parent-content {
          max-width: 615px;
          margin: 40px auto;
          color: white;
          font-family: "CapriUpright", sans-serif;
          font-size: 15px;
          text-align: justify
        }
        
        .testnow-tailieu-wr {
          max-width: 800px;
          margin: 10px auto;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-bottom: 50px
        }
        
        .tailieu,
        .testnow {
          background-image: url("images/gradient.png");
          width: 245px;
          height: 72px;
          border: 1px solid rgba(0, 0, 0, 0);
          outline: 1px solid rgba(0, 0, 0, 0);
          cursor: pointer;
          font-size: 32px;
          text-transform: uppercase;
          color: white;
          font-family: 'Tw Cen MT Condensed Extra Bold';
          border-radius: 15px;
          -webkit-box-shadow: 7px 7px 9px 2px rgba(0, 0, 0, 0.75);
          box-shadow: 7px 7px 9px 2px rgba(0, 0, 0, 0.75);
          text-shadow: 4px 4px 2px #969696
        }
        
        .above-trynow {
          background-color: rgba(12, 12, 12, 0.4);
          padding: 40px 60px;
          max-width: 700px;
          margin: 20px auto;
          color: white;
          font-family: "CapriUpright", sans-serif;
          font-size: 15px;
          text-align: justify
        }
        
        .trynow-btn-wr {
          text-align: center;
          margin: 60px auto 30px auto
        }
        
        .trynow-btn-wr button {
          background-image: url("images/trynow-bg.png");
          width: 294px;
          height: 86px;
          border: 1px solid rgba(0, 0, 0, 0);
          cursor: pointer;
          border-radius: 18px;
          font-size: 40px;
          color: white;
          text-transform: uppercase;
          font-family: 'Tw Cen MT Condensed Extra Bold';
          -webkit-box-shadow: 7px 7px 9px 2px rgba(0, 0, 0, 0.75);
          box-shadow: 7px 7px 9px 2px rgba(0, 0, 0, 0.75);
          text-shadow: 4px 4px 2px #969696
        }
        
        .img-ult-wr {
          text-align: center;
          display: flex;
          justify-content: center;
        }
        
        .img-ult-wr img {
          display: inline-block;
          cursor: pointer;
          -webkit-transform: translateX(8px);
          -ms-transform: translateX(8px);
          transform: translateX(8px)
        }
        
        .ult-content {
          max-width: 300px;
          margin: 0 auto;
          text-align: center;
          margin-top: 30px;
          cursor: pointer;
          font-size: 17px;
          font-family: 'Times New Roman';
          color: #ccccff
        }
        
      `}
      </style>
            </div>
        );
    }
}
    
export default Home;
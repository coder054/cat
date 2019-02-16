import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import axios from 'axios';
import classNames from 'classnames'
import { decorate, observable } from "mobx"
import { observer } from "mobx-react"
import $ from 'jquery';

var countTrue = [];

class Testposition extends Component {
    state = {
        quizs: []
    }
    componentDidMount() {
        axios.get('http://khoi.catopiana.com/wp-json/acf/v3/pos')
            .then(res => {
                console.log(res);
                this.setState({
                    quizs: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
            $('body').on('click', 'li img', function(){
                $(this).parent().siblings().children('img').css('opacity', '.5');
                $(this).css('opacity', '1');
            });

            $('body').on('click', '.xemkq', function(){
                let socaudung = 0;
                for(let i = 0; i < countTrue.length; i++){
                    if(countTrue[i]){
                        socaudung ++
                    }
                }
                $(this).text(socaudung);
            });
    }
    
    render() {
        const {quizs} = this.state;
        const myData = [].concat(quizs)
                .sort((a, b) => a.id - b.id)
        const quizList = quizs.length ? (
            myData.map((quiz, i) => {
                return (
                    <div className="question" key={quiz.id}>
                        <Item key={quiz.id} item={quiz} />
                    </div>
                )
            })
        ) : (
            <div className="center">No quiz yet</div>
        )
        return (
            <div className="wrap"><img src='./images/bg-02.png' alt=""/>
            <header>
                <nav className="d-nav">
                <ul className="psy-pane">
                    <li className="home"><img src='./images/home.png' alt=""/><a className="smooth psy-btn active" href="#id1">home</a></li>
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
            <section className="psy-section" id="id2">
                <div className="container">
                    <div className="row tn">
                        <div className="col-lg-12">
                            <div className="bigwhale">
                                <h1>TEST POSITION</h1>
                                <a className="test-item global" href="/position">
                                    <ReactSVG src="./images/SVG/position.svg" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-3">
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iste sunt explicabo? Doloremque, odio. Quos totam corrupti dignissimos? Consequuntur impedit quaerat non dolorum autem tenetur! Impedit deserunt dignissimos facilis odio.</h3>
                        </div>
                    </div>
                    <img className="girl" src="./images/girl.png" alt=""/>
                    <img className="whale" src="./images/wavems.png" alt=""/>
                </div>
                <div className="container test-content">
                    {quizList}
                    <button className="xemkq"> Xem Ket qua </button>    
                </div>
                <div className="container list-test">
                    <div className="row">
                        <div className="top">
                            <a className="test-item atom" href="/common">
                                <ReactSVG src="./images/SVG/common.svg" />
                            </a>
                            <a className="test-item ghitar" href="/music">
                                <ReactSVG src="./images/SVG/music.svg" />
                            </a>
                            <a className="test-item lightball" href="/creative">
                                <ReactSVG src="./images/SVG/creative.svg" />
                            </a>
                        </div>
                        <div className="bot">
                            <a className="test-item zoom" href="/memory">
                                <ReactSVG src="./images/SVG/memory.svg" />
                            </a>
                            <a className="test-item chat" href="/language">
                                <ReactSVG src="./images/SVG/language.svg" />
                            </a>
                            <a className="test-item brain" href="/iq">
                                <ReactSVG src="./images/SVG/iq.svg" />
                            </a>
                        </div>
                    </div>
                    <img className="f6" src="./images/SVG/f6.svg" alt=""/>
                    <img className="f7" src="./images/SVG/f7.svg" alt=""/>
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
                #id2 {
                    margin-top: 150px;
                }
                #id2 .container {
                    position: relative;
                }
                .girl {
                    width: 300px;
                    position: absolute;
                    top: 0;
                    left:0;
                    z-index: 5;
                }
                .test-content {
                    position: relative;
                    z-index: 5;
                }
                .q {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor:pointer;
                }
                .q img {
                    width: 150px;
                    transition: all linear .3s;
                }
                .test-content ul {
                    display: flex;
                    justify-content: center;
                }
                .test-content ul li {
                    margin: 40px 20px 0;
                }
                .countTrue {
                    display: none;
                }
                .bigwhale {
                    margin:300px 0 150px;
                    text-align: center;
                }
                #id2 .container .row.tn h3 {
                    margin-top: 120px;
                    margin-bottom: 200px;
                    font-size: 16px;
                    font-weight: lighter;
                }
                .tn {
                    position: relative;
                    z-index: 5;
                }
                .whale {
                    position: absolute;
                    top:0;
                    left:30px;
                    z-index: 2;
                    width: 100%;
                }
                .list-test {
                    position: relative;
                    z-index: 5;
                    background: rgba(112,90,237, .5);
                    width: 50%;
                    padding: 30px;
                    border-radius: 50px;
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
                    margin: 20px 50px;
                    position: relative;
                    z-index: 5
                }   
                .test-item:hover {
                    transform: scale(1.3);
                    transition: .3s;
                }
                #id2 .bigwhale .test-item {
                    display: block;
                    width: 200px;
                    margin: 0 auto;
                }
                .one-question > img {
                    display: block;
                    margin: 0 auto;
                    width: 200px;
                }
                .answer-list li img {
                    width:100px;
                }
            `}
            </style>
            </div>
        );
    }
}

const Item = observer(
    class Item extends Component {  
        mobxstate = {   
            answer_a: false,
            answer_b: false,
            answer_c: false,
            answer_d: false,
            answer_e: false,
            answer_f: false,
            dapandung: null,
            isUserChooseRight: false,
        }   
        componentDidMount(){    
            this.xuly() 
        }   
    
        xuly(){ 
            const {answer} = this.props.item.acf
            if(answer.answer_a.ta.length === 1){
                this.mobxstate.dapandung = 'answer_a';
                return
            }   
            if(answer.answer_b.tb.length === 1){
                this.mobxstate.dapandung = 'answer_b'
                return
            }   
            if( answer.answer_c.tc.length === 1){
                this.mobxstate.dapandung = 'answer_c'
                return
            }   
            if( answer.answer_d.td.length === 1){
                this.mobxstate.dapandung = 'answer_d'
                return
            }   
    
            if( answer.answer_e.te.length === 1){
                this.mobxstate.dapandung = 'answer_e'
                return
            }
            if(answer.answer_f.tf.length === 1){
                this.mobxstate.dapandung = 'answer_f'
                return
            }   
        }   
    
        handleClick(answer) {   
            this.mobxstate.answer_a = false;
            this.mobxstate.answer_b = false;
            this.mobxstate.answer_c = false;
            this.mobxstate.answer_d = false;
            this.mobxstate.answer_e = false;
            this.mobxstate.answer_f = false;
            this.mobxstate[answer]= true
    
            if(this.mobxstate[this.mobxstate.dapandung] === true) {
                this.mobxstate.isUserChooseRight = true
                countTrue += 1
            } else {
                this.mobxstate.isUserChooseRight = false
                countTrue -= 1
            }
        }

        checkIfChooseRight() {
        }   
    
    render() {  
        const {item} = this.props
        const answer = item.acf.answer
        const {answer_a, answer_b, answer_c, answer_d, answer_e, answer_f} = answer
        return (
            <div className="one-question">  
                <img src={item.acf.question} alt="" />
                <ul className="answer-list">
                    <li>
                        A: <img onClick={this.handleClick.bind(this, 'answer_a')}  className={classNames({'checked': this.mobxstate.answer_a})} src={answer_a.imga} alt=""/>
                    </li>
                    <li>
                        B: <img  onClick={this.handleClick.bind(this, 'answer_b')}  className={classNames({'checked': this.mobxstate.answer_b})}  src={answer_b.imgb} alt=""/>
                    </li>
                    <li>
                        C: <img  onClick={this.handleClick.bind(this, 'answer_c')}  className={classNames({'checked': this.mobxstate.answer_c})}  src={answer_c.imgc} alt=""/>
                    </li>
                    <li>
                        D: <img  onClick={this.handleClick.bind(this, 'answer_d')}  className={classNames({'checked': this.mobxstate.answer_d})}  src={answer_d.imgd} alt=""/>
                    </li>
                    {!!answer_e.imge && (
                    <li>
                        E: <img  onClick={this.handleClick.bind(this, 'answer_e')}  className={classNames({'checked': this.mobxstate.answer_e})}  src={answer_e.imge} alt=""/>
                    </li>
                    )}
                    {!!answer_f.imgf && (
                    <li>
                        F: <img  onClick={this.handleClick.bind(this, 'answer_f')}   className={classNames({'checked': this.mobxstate.answer_f})}  src={answer_f.imgf} alt=""/>
                    </li>
                    )}
                </ul>
                <p className="countTrue"> dap an dung: {this.mobxstate.dapandung} </p>
                <p className="countTrue">
                    Nguoi dung chon dung hay sai? { this.mobxstate.isUserChooseRight ?  ( <span className="ra"></span> + countTrue ):   ( <span className="wa"></span> + countTrue ) }
                </p>
            </div>  
        )   // return
    }   // render
})

decorate(Item, {
    mobxstate: observable,
})

export default Testposition;

import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames'
import { decorate, observable } from "mobx"
import { observer } from "mobx-react"

var countTrue = [];
var counterTime = 4;

class Memory extends Component {
    state = {
        quizs: []
    }
    componentDidMount() {
        axios.get('http://khoi.catopiana.com/wp-json/acf/v3/mem')
            .then(res => {
                console.log(res);
                this.setState({
                    quizs: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }

    render() {
        countTrue = document.querySelectorAll('.ra').length;
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
        <div className="container-fluid">
            {quizList}
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
            this.interval = setInterval(() => this.tick(), 1000);   
            this.xuly() 
        }
        componentWillUnmount() {
            clearInterval(this.interval);
        }

        tick() {
            if(this.counter > 0) { this.counter-- }
        }
        counter = counterTime
        isHetGio = () => this.counter <= 0
    
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
                {!this.isHetGio() && (
                    <div>
                    <img src={item.acf.question} alt="" />
                    <p> <button className="time-left"> {this.counter} </button> </p>
                    </div>
                )}
                {!!this.isHetGio() && (
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
                )}
                <p className=""> dap an dung: {this.mobxstate.dapandung} </p>
                <p className="">
                    Nguoi dung chon dung hay sai? { this.mobxstate.isUserChooseRight ?  ( <span className="ra"></span> + countTrue ):   ( <span className="wa"></span> + countTrue ) }
                </p>

                <style jsx global> {`
                    .countTrue {
                        visibility: hidden;
                    }
                    .one-question{  
                        
                    }
                    .answer-list li {
                        cursor: pointer;
                    }
                    .answer-list img{   
                    }   
                    .answer-list img.checked{   
                        border: 10px solid green;   
                    }   
                `}  
                </style>    
            </div>  
        )   // return
    }   // render
})

decorate(Item, {
    data: observable,
    index: observable,
    counter: observable,
    resultsOfUser: observable,
    resultsOfUserRaw: observable,
    showKetQua: observable,
    isClickXemKetQua: observable
})

export default Memory;
import React, {Component} from 'react'
import data from './../data/questions.json'
import { decorate, observable, flow, computed, action } from "mobx"
import { observer } from "mobx-react"
import FontAwesome from "react-fontawesome"
import classNames from 'classnames'
var counterTime = 4

const TestTriNho = observer(
	class TestTriNho extends Component{	
		data = data	
		index = 0
		counter = counterTime
		resultsOfUser = []
		resultOfUserRaw = []
		isClickXemKetQua = false
		lengthh = () => this.data.length	
		currentItem = () => this.data[this.index]
		isHetGio = () => this.counter <= 0
		numberOfQuestionLeft = () => {
			let number = 0
			for(let i = 0; i < this.resultsOfUser.length; i++){
				if(this.resultsOfUser[i] === null){
					number ++
				}
			}
			return number
		}

		showKetQua = () => {
			return this.numberOfQuestionLeft() === 0
		}

		ketquaCuthe = ()=> {
			let socaudung = 0
			for(let i = 0; i < this.resultsOfUser.length; i++){
			  if(this.resultsOfUser[i]){
			  	socaudung ++
			  }
			}

			return `Bạn đã trả lời đúng ${socaudung} trên tổng số ${this.data.length} câu!`
		}




		componentDidMount(){ 
			for(let i = 0; i < this.data.length; i++){
				this.resultsOfUser.push(null)
				this.resultOfUserRaw.push(null)
			}
			this.interval = setInterval(() => this.tick(), 1000);
		} 

		componentWillUnmount() {
			clearInterval(this.interval);
		}
		tick() {
			if(this.counter > 0){
				this.counter--
			}
		}
		componentDidUpdate(prevProps, prevState) {
				// console.log('prevProps', prevProps)
				// console.log('prevState', prevState)
				// console.log('cdu')
		}


		handleClick(answer){
			if( this.isClickXemKetQua){
				return
			}
			let result = false
			let answerName = "answer_" + answer
			let tName = "t" + answer

			if(typeof this.currentItem().acf.answer[answerName][tName] === "string"){

			} else{
				result = true
			}
			this.resultsOfUser[this.index] = result
			this.resultOfUserRaw[this.index] = answer
			console.log('result', result)
		}

		render(){	
			const sample = {
					"id": 122,
					"acf": {
						"question": "https://i.imgur.com/XvqZcZI.png",
						"answer": {
							"answer_a": {
								"imga": "https://i.imgur.com/9Vry7rd.png",
								"ta": ["t"]
							},
							"answer_b": {
								"imgb": "https://i.imgur.com/onQyxFy.png",
								"tb": ""
							}
						}
					}
				}

			const question = this.currentItem().acf
			return (	
				<div className="TestTriNho-wrapper">	
					{!!this.showKetQua() && (
						<div className="show-kg-button-wr">	
							<button onClick={e=> {
								this.isClickXemKetQua = true
								this.counter = 0
								this.index = 0
							}} className="xemkq"> Xem Ket qua </button>	
						</div>	
					
					)}
					<div>
						{!this.isHetGio() && (
							<div className="noidungcauhoi-wr">	
								<p> Hay ghi nho hinh sau day de tra loi: </p>	
								<p> <button className="time-left"> {this.counter} </button> </p>	
								<img src={question.question} alt=""/>	
							</div>	
						)}

						{!!this.isHetGio() && (
							<div className="noidung-dapan-wr">	
								{!!question.answer.answer_a.imga && (	
										<img className={classNames({'active': this.resultOfUserRaw[this.index] === "a"})} onClick={e=> { this.handleClick("a")}}   src={question.answer.answer_a.imga} alt=""/>		
								)}	
	
								{!!question.answer.answer_b.imgb && (	
										<img className={classNames({'active': this.resultOfUserRaw[this.index] === "b"})}  onClick={e=> { this.handleClick("b")}}  src={question.answer.answer_b.imgb} alt=""/>		
										
								)}	
	
								{!!question.answer.answer_c.imgc && (	
										<img className={classNames({'active': this.resultOfUserRaw[this.index] === "c"})}  onClick={e=> { this.handleClick("c")}}  src={question.answer.answer_c.imgc} alt=""/>		
										
								)}	
	
								{!!question.answer.answer_d.imgd && (	
										<img  className={classNames({'active': this.resultOfUserRaw[this.index] === "d"})}  onClick={e=> { this.handleClick("d")}}  src={question.answer.answer_d.imgd} alt=""/>		
										
								)}	
	
								{!!question.answer.answer_e.imge && (	
										<img  className={classNames({'active': this.resultOfUserRaw[this.index] === "e"})}  onClick={e=> { this.handleClick("e")}}  src={question.answer.answer_e.imge} alt=""/>		
										
								)}	
	
								{!!question.answer.answer_f.imgf && (	
										<img className={classNames({'active': this.resultOfUserRaw[this.index] === "f"})}   onClick={e=> { this.handleClick("f")}}  src={question.answer.answer_f.imgf} alt=""/>		
										
								)}	
							</div>	
						)}
					</div>


					<div className="dot-wr">
						{this.data.length && this.data
							? this.data.map((item, i) => (
									<span key={item.id} className={classNames('dot-navigation', {'is-active': this.index === i})} onClick={e => {
										this.index = i
										if(this.isClickXemKetQua){

										}else{
											this.counter = counterTime
										}
										
									}}> </span>
								))
							: null
						}
					</div>

					{!this.isClickXemKetQua && (
						<div> <p> Bạn còn {this.numberOfQuestionLeft()} câu hỏi chưa trả lời! </p> </div>	
					
					)}

					{!!this.isClickXemKetQua && (
						<div> <p> {this.ketquaCuthe()} </p> </div>	
					
					)}



					{
						this.resultsOfUser[this.index] === null ? 
						( null ):
						( 
							<React.Fragment>
								{!!this.isClickXemKetQua && (
				      		<div>	
										{	
											this.resultsOfUser[this.index] ? 	
											( <div className="text-success"> <i className="fa fa-check"></i> Đúng </div> ):	
											( <div className="text-danger"> <i className="fa fa-times"></i> Sai </div> )	
										}	 	
									</div>   	
				      	
				      	)}      	
							</React.Fragment>
						)
					}

					

					<style jsx> {`  
span.dot-navigation{
	width: 20px;
	height: 20px;
	border: 1px solid #ddd;
	display: inline-block;
	border-radius: 50%;
	margin-right: 15px;
	cursor: pointer;
	background-color: white;
}

.is-active{
	background-color: green!important;
}
.noidungcauhoi-wr, .noidung-dapan-wr{
	border: 1px solid #ddd;
	padding: 15px;
	width: 100%;
	min-height: 400px;
	margin-bottom: 30px;
}

button.time-left{
	border-radius: 50%;
	border: 5px solid green;
	width: 100px;
	height: 100px;
	color: green;
	font-weight: bold;
	font-size: 30px;
}

button.time-left{
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 10;
}

.TestTriNho-wrapper{
	position: relative;
}

.noidung-dapan-wr img{
  margin: auto 20px;
  display: inline-block!important;
  border: 1px solid #efefef;
  border-radius: 4px;
  cursor: pointer;
}

.noidung-dapan-wr img.active{
  border: 3px solid green;
}
.xemkq{
  position: absolute;
  bottom: 10px;
  right: 0;
  width: 150px;
  height: 40px;
  border: 2px solid green;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
  color: green;
  font-weight: bold;
  text-transform: uppercase;
}

.xemkq:hover{
  background: green;
  color: white;
}

					`}
					</style>
				</div>	
			)	
		}	
	}	
)


decorate(TestTriNho, {
	data: observable,
	index: observable,
	counter: observable,
	resultsOfUser: observable,
	resultsOfUserRaw: observable,
	showKetQua: observable,
	isClickXemKetQua: observable
})

export default TestTriNho

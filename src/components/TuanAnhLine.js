import React, {Component} from 'react'
import LineTo from 'react-lineto'
import { decorate, observable, flow, computed, action, toJS } from "mobx"
import { observer, inject } from "mobx-react"
import axios from "axios"
import classNames from 'classnames'
import matchingData from './../data/matching.json'
import {remove_character} from "./../helpers/index.js"
var audioUrl = "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-18146/zapsplat_multimedia_click_003_19369.mp3?_=1"
var audio  = new Audio(audioUrl)



const TuanAnhLine = observer(
	class TuanAnhLine extends Component{  
		data = []
		lineData = []
		resultList= [] // [true, false, null] cau dau tien dung, cau thu hai sai, cau thu ba chua tra loi
		currentIndex = 1
		currentQuestionIndex = 0
		showAnswer = false
		isClickXemKetQua = false
		
		reset= ( redrawMode = false )=>{
			let a = this.lineData[this.currentQuestionIndex]
			for(let i = 0; i < this.numberOfQuestion(this.data[this.currentQuestionIndex]); i++){
			  a[i] = {from: null, to: null}
			}

			if(!redrawMode){
				this.resultList[this.currentQuestionIndex] = null 
			}else{

			}
			
		}

		reDrawLines = () => {
			let a = this.lineData[this.currentQuestionIndex]
			let b = [...a]
			this.reset(true)

			for(let i = 0; i < b.length; i++){
			  setTimeout(() => {
					a[i] = {from: b[i].from, to: b[i].to}
			  },800)
			}
			
		}

		showKetQua = () => {
			return this.numberOfQuestionLeft() === 0
		}

		ketquaCuthe = ()=> {
			let socaudung = 0
			for(let i = 0; i < this.resultList.length; i++){
				if(this.resultList[i]){
					socaudung ++
				}
			}

			return `Bạn đã trả lời đúng ${socaudung} trên tổng số ${this.data.length} câu!`
		}
		numberOfImageOfCurrentQuestion(){
			let number = 0
			let question = this.data[this.currentQuestionIndex].acf.question
			if(question.question_1 && question.question_1.image) {
				number++
			}
			if(question.question_2 && question.question_2.image){
				number++
			}
			if(question.question_3 && question.question_3.image){
				number++
			}
			if(question.question_4 && question.question_4.image){
				number++
			}
			return number
		}

		numberOfQuestion (currentQuestion){
			let number = 0
			let question = currentQuestion.acf.question
			if(question.question_1 && question.question_1.image) {
				number++
			}
			if(question.question_2 && question.question_2.image){
				number++
			}
			if(question.question_3 && question.question_3.image){
				number++
			}
			if(question.question_4 && question.question_4.image){
				number++
			}
			return number
		}


		numberOfQuestionLeft(){
			let number = 0
			for(let i = 0; i < this.resultList.length; i++){
				if(this.resultList[i] === null){
					number++
				}
			}
			return number
		}

		handleLeftImageClick(from){
			
			let a = this.lineData[this.currentQuestionIndex] 

			for(let i = 0; i < a.length; i++){
			  if(a[i].from){

			  }else{
			  	a[i].from = from
			  	break
			  }
			}	

			this.checkAnswer()

		}

		handleRightImageClick(to){
			
			let a = this.lineData[this.currentQuestionIndex] 

			for(let i = 0; i < a.length; i++){
			  if(a[i].to){

			  }else{
			  	a[i].to = to
			  	break
			  }
			}	

			this.checkAnswer()
		}



		checkAnswer(){
			let a = this.lineData[this.currentQuestionIndex]
			// neu van con anh chua noi het, khong check nua
			for(let i = 0; i < a.length; i++){
			  if(a[i].from === null || a[i].to === null) {
			  	return
			  }
			}
			// nguoi dung noi tat ca cac anh, tiep tuc
			let acf = this.data[this.currentQuestionIndex].acf
			
			for(let i = 0; i < this.numberOfImageOfCurrentQuestion(); i++){
				let y = i + 1
				
				let questionName = remove_character(a[i].from , 9)
				let answerName = remove_character(a[i].to , 7)

				if( acf.question[questionName].tag !== acf.answer[answerName].tag ){
					this.resultList[this.currentQuestionIndex] = false
					console.log('this.resultList', toJS(this.resultList) )
					return
				}
			}
			this.resultList[this.currentQuestionIndex] = true
			console.log('this.resultList', toJS(this.resultList) )
		}

		componentDidMount(){
			this.data = matchingData
			for(let i = 0; i < this.data.length; i++){
					this.lineData.push([])
					this.resultList.push(null)

					for(let j = 0; j < this.numberOfQuestion(this.data[i]); j++){
					  this.lineData[i].push({from: null, to: null})
					}
			}

			console.log( toJS(this.lineData) )


			// NEU DUNG AXIOS THI DUNG DOAN CODE DUOI VA COMMENT DOAN CODE TREN
			// axios.get("http://khoi.catopiana.com/wp-json/acf/v3/matching?fbclid=IwAR1F4CnA83XLTVrONGyjWHP-gq_v_HS9_wF7FRoHjUmMo0GCd9NvOI9-eww")
			// .then(({data}) => {
			//  this.data = data
			//  for(let i = 0; i < this.data.length; i++){
			//    this.lineData[i] = {from1: null, from2: null, from3: null, to1: null, to2: null, to3: null, currentIndex: 1}
			//    this.resultList.push(null)

			//  }

			// })
			// .catch(err => console.log('err', err))

		}

		renderLines(){
				let a = this.lineData[this.currentQuestionIndex]
				return a.map((item, index)=> (
						<LineTo key={index} 
									from={item.from}
								  to={item.to} 
								  fromAnchor="middle right" 
									toAnchor="middle left"  
									borderWidth={3} 
									borderColor="#006699" 
								  />
				))
				
		}

		render(){
			let a = this.lineData[this.currentQuestionIndex]
			if(!this.data || !this.data.length){
				return <div> Loading... </div>
			}
			const currentQuestion = this.data[this.currentQuestionIndex]
			const { acf: {answer : {answer_1, answer_2, answer_3}, 
			question: {question_1, question_2, question_3} } 
		} = currentQuestion


			return (  
				<div className="TuanAnhLine-wrapper"> 


				{this.renderLines()}

					<div className="left-right-wr"> 
					{!!this.showKetQua() && (
						<div className="show-kg-button-wr"> 
							<button onClick={e=> {
								this.isClickXemKetQua = true
								// this.currentQuestionIndex = 0
								// this.reDrawLines()
							}} className="xemkq"> Xem Ket qua </button> 
						</div>  
					
					)}
					{
						// !this.isClickXemKetQua
						true

						 && (
						<p>  Bạn còn: {this.numberOfQuestionLeft()} câu hỏi chưa trả lời! </p>  
					
					)}
						{!this.isClickXemKetQua && (
							<div> <button onClick={e => {this.reset()}} className="lamlai-btn"> Lam lai! </button> </div> 
						
						)}
						<div className="left">  
{!!question_1.image && (
								<img onClick={e => {this.handleLeftImageClick(`question_${this.currentQuestionIndex}1`)
								audio.play()} }  
								className={`question_${this.currentQuestionIndex}1`} src={question_1.image} alt=""/>                
)}

{!!question_2.image && (
								<img onClick={e => {this.handleLeftImageClick(`question_${this.currentQuestionIndex}2`)
							audio.play()} }  
								className={`question_${this.currentQuestionIndex}2`} src={question_2.image} alt=""/>                
)}


{!!question_3.image && (
								<img onClick={e => {this.handleLeftImageClick(`question_${this.currentQuestionIndex}3`)
							audio.play()} }  
								className={`question_${this.currentQuestionIndex}3`} src={question_3.image} alt=""/>                
)}


						</div>  
						<div className="right"> 
{!!answer_1.image && (
								<img onClick={e => {this.handleRightImageClick(`answer_${this.currentQuestionIndex}1`)
							audio.play()} }   
								className={`answer_${this.currentQuestionIndex}1`} src={answer_1.image} alt=""/>              
)}


{!!answer_2.image && (
								<img onClick={e => {this.handleRightImageClick(`answer_${this.currentQuestionIndex}2`)
							audio.play()} }   
								className={`answer_${this.currentQuestionIndex}2`} src={answer_2.image} alt=""/>            
)}


{!!answer_3.image && (
								<img onClick={e => {this.handleRightImageClick(`answer_${this.currentQuestionIndex}3`)
							audio.play()} }   
								className={`answer_${this.currentQuestionIndex}3`} src={answer_3.image} alt=""/>        
)}

						</div>  

					</div>  
	
					<div className="dot-wr">
						{this.data.length && this.data
							? this.data.map((item, i) => (
									<span key={item.id} className={classNames('dot-navigation', {'is-active': this.currentQuestionIndex === i})} onClick={e => {
										this.currentQuestionIndex = i
										setTimeout(()=> {
											this.reDrawLines()
										}, 100)

									}}> </span>
								))
							: null
						}
					</div>


					{this.isClickXemKetQua && (
						<div> 
							{ 
								this.resultList[this.currentQuestionIndex] === null ?   
								( null ): 
								( <div> 
									<p> {this.ketquaCuthe()} </p>
									{ 
										this.resultList[this.currentQuestionIndex] === true ?   
										( <div className="text-success"> <i className="fa fa-check"></i> Đúng </div> ): 
										( <div className="text-danger"> <i className="fa fa-times"></i> Sai </div> )  
									} 
	
								</div> )  
							} 
						</div>    
					
					)}
				<style jsx global> {`   
	.left{  
		float: left;  
		width: 400px; 
		text-align: right;  
	} 
	
	.right{ 
		float: right; 
		width: 400px; 
		text-align: left; 
	} 
	
	.left-right-wr{ 
		float: left;  
		width: 100%;  
			
	} 
	.left-right-wr img {  
		max-width: 100%;  
		height: auto; 
		display: block; 
	} 
	
	.left img{  
		margin-left: auto;  
	} 


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

.left img, .right img {
	margin-bottom: 15px;
	cursor: pointer;
	position: relative;
	display: block!important;
	transition: all 0.1s ease;
}

.left img:after, .right img:after{
	content: "";
	width: 100px;
	height: 100%;
	border: 1px solid red;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100!important;
	background-color: red;
}



.left img:hover, .right img:hover {
	 transform: scale(1.01, 1.01);
}

.left img, .right img{
  height: 150px;
  border: 1px solid #efefef;
  margin-bottom: 20px;
  width: auto;
}
.left-right-wr{
  // background: #ddd;
  padding: 15px;
  margin-bottom: 40px;
  height: 600px;
}

.xemkq {
  position: absolute;
  bottom: -70px;
  right: 0px;
}

.left-right-wr{
  position: relative;
}

.lamlai-btn{
  width: 100px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid green;
  color: green;
  cursor: pointer;
  transition: all 0.1s ease;
}

.lamlai-btn:hover{
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

export default TuanAnhLine


decorate(TuanAnhLine, {
	data: observable,
	lineData: observable,
	currentQuestionIndex: observable,
	resultList: observable,
	showAnswer: observable,
	isClickXemKetQua: observable

})
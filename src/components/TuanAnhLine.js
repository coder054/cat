import React, {Component} from 'react'
import LineTo from 'react-lineto'
import { decorate, observable, flow, computed, action } from "mobx"
import { observer, inject } from "mobx-react"
import axios from "axios"
import classNames from 'classnames'
import matchingData from './../data/matching.json'


const TuanAnhLine = observer(
	class TuanAnhLine extends Component{  
		data = []
		// from1= null  
		// to1 = null 
		// from2= null  
		// to2 = null
		// from3= null  
		// to3 = null
		lineData = [{},{}, {}]
		resultList= []
		currentIndex = 1
		currentQuestionIndex = 0
		showAnswer = false
		isClickXemKetQua = false
		
		reset= ()=>{

			let a = this.lineData[this.currentQuestionIndex]
			a.from1 = null  
			a.to1 = null  
			a.from2= null 
			a.to2 = null
			a.from3= null 
			a.to3 = null
			a.currentIndex = 1
			this.resultList[this.currentQuestionIndex] = null 

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
			a["from"+ a.currentIndex] = from
			this.updateIndex()

		}

		handleRightImageClick(to){
			let a = this.lineData[this.currentQuestionIndex] 
			a["to"+ a.currentIndex] = to
		
			this.updateIndex()
		}

		checkAnswer(){
			let result = true
			let acf = this.data[this.currentQuestionIndex].acf
			for(let i = 0; i < this.numberOfImageOfCurrentQuestion(); i++){
				let y = i + 1
				let questionName = this.lineData[this.currentQuestionIndex]["from" + y]
				let answerName = this.lineData[this.currentQuestionIndex]["to" + y]
				if( acf.question[questionName].tag !== acf.answer[answerName].tag ){
					this.resultList[this.currentQuestionIndex] = false
					return
				}
			}
			this.resultList[this.currentQuestionIndex] = true
		}

		updateIndex(){
			let a = this.lineData[this.currentQuestionIndex]
			if(a["from"+ a.currentIndex] && a["to"+ a.currentIndex]){
				a.currentIndex++
			}
			if(a.currentIndex === this.numberOfImageOfCurrentQuestion() + 1){
				this.checkAnswer()
			}
		}



		componentDidMount(){
			this.data = matchingData
			for(let i = 0; i < this.data.length; i++){
					this.lineData[i] = {from1: null, from2: null, from3: null, to1: null, to2: null, to3: null, currentIndex: 1}
					this.resultList.push(null)
			}

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
				let lines = []
				for(let i = 0; i < this.numberOfImageOfCurrentQuestion(); i++){
					lines.push(
							<LineTo
								from={a["from" + (i + 1)]}  
								to={a["to" + (i + 1)]}  
								fromAnchor="middle right" 
								toAnchor="middle left"  
								borderWidth={3} 
								borderColor="#006699" 
				       	key={i} /> 
						)
				}

				return lines
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


			const line1 = a.from1 && a.to1 && question_1.image ? (  
				<LineTo
					from={a.from1}  
					to={a.to1}  
					fromAnchor="middle right" 
					toAnchor="middle left"  
					borderWidth={3} 
					borderColor="#009999" 
				/>  
			) : null; 


			const line2 = a.from2 && a.to2 && question_2.image ? (  
				<LineTo 
					from={a.from2}  
					to={a.to2}  
					fromAnchor="middle right" 
					toAnchor="middle left"  
					borderWidth={3} 
					borderColor="#006699" 
				/>  
			) : null;

			const line3 = a.from3 && a.to3 && question_3.image ? (  
				<LineTo 
					from={a.from3}  
					to={a.to3}  
					fromAnchor="middle right" 
					toAnchor="middle left"  
					borderWidth={3} 
					borderColor="#996600" 
				/>  
			) : null; 
			return (  
				<div className="TuanAnhLine-wrapper"> 


				{this.renderLines()}
				
					{!!this.showKetQua() && (
						<div className="show-kg-button-wr"> 
							<button onClick={e=> {
								this.isClickXemKetQua = true
								this.currentQuestionIndex = 0
							}} className="xemkq"> Xem Ket qua </button> 
						</div>  
					
					)}
					<div className="left-right-wr"> 

{this.isClickXemKetQua && (
						<div> 
							{ 
								this.resultList[this.currentQuestionIndex] === null ?   
								( null ): 
								( <p> 
										<p> {this.ketquaCuthe()} </p>
									{ 
										this.resultList[this.currentQuestionIndex] === true ?   
										( <div className="text-success"> <i className="fa fa-check"></i> Đúng </div> ): 
										( <div className="text-danger"> <i className="fa fa-times"></i> Sai </div> )  
									} 
	
								</p> )  
							} 
						</div>    
					
)}

					{!this.isClickXemKetQua && (
						<p>  Bạn còn: {this.numberOfQuestionLeft()} câu hỏi chưa trả lời! </p>  
					
					)}
						{!this.isClickXemKetQua && (
							<div> <button onClick={e => {this.reset()}} className="lamlai-btn"> Lam lai! </button> </div> 
						
						)}
						<div className="left">  
{!!question_1.image && (
								<img onClick={e => {this.handleLeftImageClick("question_1")} }  
								className="question_1" src={question_1.image} alt=""/>                
)}

{!!question_2.image && (
								<img onClick={e => {this.handleLeftImageClick("question_2")} }  
								className="question_2" src={question_2.image} alt=""/>                
)}


{!!question_3.image && (
								<img onClick={e => {this.handleLeftImageClick("question_3")} }  
								className="question_3" src={question_3.image} alt=""/>                
)}


						</div>  
						<div className="right"> 
{!!answer_1.image && (
								<img onClick={e => {this.handleRightImageClick("answer_1")} }   
								className="answer_1" src={answer_1.image} alt=""/>              
)}


{!!answer_2.image && (
								<img onClick={e => {this.handleRightImageClick("answer_2")} }   
								className="answer_2" src={answer_2.image} alt=""/>            
)}


{!!answer_3.image && (
								<img onClick={e => {this.handleRightImageClick("answer_3")} }   
								className="answer_3" src={answer_3.image} alt=""/>        
)}

						</div>  

					</div>  
	
					<div className="dot-wr">
						{this.data.length && this.data
							? this.data.map((item, i) => (
									<span key={item.id} className={classNames('dot-navigation', {'is-active': this.currentQuestionIndex === i})} onClick={e => {
										this.currentQuestionIndex = i
										this.reset()
									}}> </span>
								))
							: null
						}
					</div>
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
					`}  
					</style>  
				</div>  
			) 
		} 
	} 
	
)

export default TuanAnhLine


decorate(TuanAnhLine, {
	currentIndex: observable,
	from1: observable,
	to1: observable,
	from2: observable,
	to2: observable,  
	from3: observable,
	to3: observable,
	data: observable,
	lineData: observable,
	currentQuestionIndex: observable,
	resultList: observable,
	showAnswer: observable,
	isClickXemKetQua: observable

})
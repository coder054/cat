import React, {Component} from 'react'
import Slider from "react-slick";
import data from './../data/questions.json'
import classNames from 'classnames'
import { decorate, observable } from "mobx"
import { observer } from "mobx-react"



 class Question extends Component{

	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};




		return (
			<Slider {...settings}>
				
				{data.length && data
					? data.map((item) => (
							<Item key={item.id} item={item} />
						))
					: null
				}
				
 


			</Slider>
		);
	}
}

const Item = observer(
		
	class Item extends Component{ 
	
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
	
			if(answer.answer_a.ta.length == 1){ 
				this.mobxstate.dapandung = 'answer_a';  
				return  
			} 
	
			if(answer.answer_b.tb.length == 1){ 
				this.mobxstate.dapandung = 'answer_b' 
				return  
			} 
	
										if( answer.answer_c.tc.length == 1){  
				this.mobxstate.dapandung = 'answer_c' 
				return  
			} 
	
					if( answer.answer_d.td.length == 1){  
				this.mobxstate.dapandung = 'answer_d' 
				return  
			} 
	
					if( answer.answer_e.te.length == 1){  
				this.mobxstate.dapandung = 'answer_e' 
				return  
			} 
	
					if(answer.answer_f.tf.length == 1){ 
				this.mobxstate.dapandung = 'answer_f' 
				return  
			} 
	
	
		} 
	
	
		handleClick (answer){ 
			this.mobxstate.answer_a = false;  
			this.mobxstate.answer_b = false;  
			this.mobxstate.answer_c = false;  
			this.mobxstate.answer_d = false;  
			this.mobxstate.answer_e = false;  
			this.mobxstate.answer_f = false;  
	
			this.mobxstate[answer]= true  
	
	
			if(this.mobxstate[this.mobxstate.dapandung] === true){  
				this.mobxstate.isUserChooseRight = true 
			}else{  
				this.mobxstate.isUserChooseRight = false  
			} 
		} 
	
		checkIfChooseRight(){ 
	
		} 
	
	
		render(){ 
	
			const {item} = this.props   
			const answer = item.acf.answer  
			const {answer_a, answer_b, answer_c, answer_d, answer_e, answer_f} = answer 
	
	
	
			return (  
					<div className="one-question">  
							<p> question: {item.acf.question} </p>  
							<p> Hay chon mot dap an </p>  
							<div className="answer-list"> 
								<li>  
									A: {answer_a.imga} <img onClick={this.handleClick.bind(this, 'answer_a')} className={classNames({'checked': this.mobxstate.answer_a})} src="http://lorempixel.com/100/100/" alt=""/>  
								</li> 
								<li>  
									B: {answer_b.imgb} <img  onClick={this.handleClick.bind(this, 'answer_b')}  className={classNames({'checked': this.mobxstate.answer_b})}  src="http://lorempixel.com/100/100/" alt=""/> 
								</li> 
								<li>  
									C: {answer_c.imgc} <img  onClick={this.handleClick.bind(this, 'answer_c')}  className={classNames({'checked': this.mobxstate.answer_c})}  src="http://lorempixel.com/100/100/" alt=""/> 
								</li> 
								<li>  
									D: {answer_d.imgd} <img  onClick={this.handleClick.bind(this, 'answer_d')}  className={classNames({'checked': this.mobxstate.answer_d})}  src="http://lorempixel.com/100/100/" alt=""/> 
								</li> 
	{!!answer_e.imge && ( 
										<li>    
										E: {answer_e.imge}   <img  onClick={this.handleClick.bind(this, 'answer_e')}  className={classNames({'checked': this.mobxstate.answer_e})}  src="http://lorempixel.com/100/100/" alt=""/> 
									</li>   
										
	)}  
	{!!answer_f.imgf && ( 
										<li>    
										F: {answer_f.imgf}   <img  onClick={this.handleClick.bind(this, 'answer_f')}   className={classNames({'checked': this.mobxstate.answer_f})}  src="http://lorempixel.com/100/100/" alt=""/>  
									</li>   
										
	)}  
								
							</div>  
							<p> dap an dung: {this.mobxstate.dapandung} </p>  
					
							<p> Nguoi dung chon dung hay sai? { 
								this.mobxstate.isUserChooseRight ?  
								( "Dung" ): 
								( "Sai" ) 
							} </p>  
	
	
	
	
							<style jsx global> {`   
								.one-question{  
									border: 1px solid #ddd; 
								} 
								.answer-list img{ 
		margin: 10px auto;  
	} 
	.answer-list img.checked{ 
		border: 3px solid green;  
	} 
							`}  
							</style>  
					</div>  
			) 
		} 
	} 
	
)


decorate(Item, {
		mobxstate: observable,
})



export default Question

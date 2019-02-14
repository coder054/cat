import React, {Component} from 'react'

import {
	Active,
	Compose,
	Counter,
	Field,
	Focus,
	FocusManager,
	Form,
	Hover,
	Interval,
	List,
	Map,
	Set,
	State,
	Toggle,
	Touch,
	Value,
} from 'react-powerplug'

class PowerPlugDemo extends Component{
	render(){
		return (
			<div className="PowerPlugDemo-wrapper">
				<Template title="State">
					<State initial={{ favorite: "", picked: "" }}>
						{({ state, setState }) => (
							<div>
								<button
									onClick={() =>
										setState({
											favorite: "Alligator",
											picked: new Date().toLocaleTimeString()
										})
									}
								>
									Alligator
								</button>
								<button
									onClick={() =>
										setState({
											favorite: "Crocodile",
											picked: new Date().toLocaleTimeString()
										})
									}
								>
									Crocodilee
								</button>
								<button onClick={() => setState({ favorite: "", picked: "" })}>
									Reset
								</button>
								{state.favorite && state.picked && (
									<div>
										<br />You picked {state.favorite} at {state.picked}
									</div>
								)}
							</div>
						)}
					</State>

				</Template>

				<Template title="Active">
					<Active>
						{({ active, bind }) => (
							<div {...bind}>
								{!active && <span>Click here to activate!</span>}
								{active && <span>STOP CLICKING ME!!</span>}
							</div>
						)}
					</Active>

				</Template>


				<Template title="Form">
					<Form initial={{ firstName: '', lastName: '' }}>
						{({ field, values }) => (
							<form
								onSubmit={e => {
									e.preventDefault()
									console.log('Form Submission Data:', values)
								}}
							>
								<input
									type="text"
									placeholder="Your First Name"
									{...field('firstName').bind}
								/>
								<input
									type="text"
									placeholder="Your Last Name"
									{...field('lastName').bind}
								/>
								<input type="submit" value="All Done!" />
							</form>
						)}
					</Form>       	

				</Template>

			</div>
		)
	}
}


const Template = ({title, children}) => (
	<div className="wrpaaer">
		<h2> {title} </h2>
		{children}

		<style jsx> {`  
			.wrpaaer{
				border: 1px solid #ddd;
				margin-bottom: 50px;
				padding: 20px;
			}
		`}
		</style>
	</div>
)

export default PowerPlugDemo
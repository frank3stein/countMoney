import React, { Component } from 'react';
import './App.css';
import Count from './count';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pin: {
				name: 'PIN',
				multiplier: 1,
				amount: 0
			},
			fifties: {
				name: "50's",
				multiplier: 50,
				amount: 0
			},
			twenties: {
				name: "20's",
				multiplier: 20,
				amount: 0
			},
			tens: {
				name: "10's",
				multiplier: 10,
				amount: 0
			},
			fives: {
				name: "5's",
				multiplier: 5,
				amount: 0
			},
			change: {
				name: 'Change',
				multiplier: 1,
				amount: 0
			}
		};
	}

	handleChange = (event, object, bill) => {
		// object is the full state, bill is the key value for the bill ex. 'change' or 'tens'
		const number = parseFloat(event.target.value) || 0;
		const amount = number * parseFloat(object[bill].multiplier);
		this.setState(
			{
				[bill]: {
					...object[bill],
					number,
					amount
				}
			},
			this.calculateTotal
		);
	};

	calculateTotal = () => {
		const totalAmount =
			parseFloat(this.state.change.amount) +
			parseFloat(this.state.fives.amount) +
			parseFloat(this.state.tens.amount) +
			parseFloat(this.state.twenties.amount) +
			parseFloat(this.state.pin.amount) +
			parseFloat(this.state.fifties.amount);
		return totalAmount;
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1> Kassa = {this.calculateTotal().toLocaleString()}</h1>
					<p>After costs -450 = {(this.calculateTotal() - 450).toLocaleString()}</p>

					<Count name="change" handleAmount={this.handleChange} state={this.state} />
					<Count name="fives" handleAmount={this.handleChange} state={this.state} />
					<Count name="tens" handleAmount={this.handleChange} state={this.state} />
					<Count name="twenties" handleAmount={this.handleChange} state={this.state} />
					<Count name="fifties" handleAmount={this.handleChange} state={this.state} />
				</header>
			</div>
		);
	}
}

export default App;

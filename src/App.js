import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './count';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalAmount: 0,
			pin: {
				name: 'PIN',
				amount: 0
			},
			fifties: {
				name: "50's",
				number: 0,
				multiplier: 50,
				amount: 0
			},
			twenties: {
				name: "20's",
				number: 0,
				multiplier: 20,
				amount: 0
			},
			tens: {
				name: "10's",
				number: 0,
				multiplier: 10,
				amount: 0
			},
			fives: {
				name: "5's",
				number: 0,
				multiplier: 5,
				amount: 0
			},
			change: {
				name: 'Change',
				number: 0,
				multiplier: 1,
				amount: 0
			}
		};
	}

	handlePin = (event) => {
		const amount = parseFloat(event.target.value) || 0;
		this.setState(
			{
				pin: {
					...this.state.pin,
					amount
				}
			},
			this.calculateTotal
		);
	};

	handleChange = (event) => {
		const number = parseFloat(event.target.value) || 0;
		const amount = number * parseFloat(this.state.change.multiplier);
		this.setState(
			{
				change: {
					...this.state.change,
					number,
					amount
				}
			},
			this.calculateTotal
		);
	};

	handleFives = (event) => {
		const number = parseFloat(event.target.value) || 0;
		const amount = number * this.state.fives.multiplier;
		this.setState(
			{
				fives: {
					...this.state.fives,
					number,
					amount
				}
			},
			this.calculateTotal
		);
	};
	handleTens = (event) => {
		const number = parseFloat(event.target.value) || 0;
		const amount = number * this.state.tens.multiplier;
		this.setState(
			{
				tens: {
					...this.state.tens,
					number,
					amount
				}
			},
			this.calculateTotal
		);
	};
	handleTwenties = (event) => {
		const number = parseFloat(event.target.value) || 0;
		const amount = number * this.state.twenties.multiplier;
		this.setState(
			{
				twenties: {
					...this.state.twenties,
					number,
					amount
				}
			},
			this.calculateTotal
		);
	};
	handleFifties = (event) => {
		const number = parseFloat(event.target.value) || 0;
		const amount = number * this.state.fifties.multiplier;
		this.setState(
			{
				fifties: {
					...this.state.fifties,
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
		this.setState({
			totalAmount
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					{/* <p>
						Edit <code>src/App.js</code> and save to reload.
					</p> */}
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
					<h1> Final Amount:{this.state.totalAmount.toLocaleString()}</h1>
					<p>
						Total Amount - 50 kassa girl - 400 kassa + {this.state.pin.amount} PIN:{' '}
						{this.state.totalAmount - 50 - 400}
					</p>
					<Count handleAmount={this.handlePin} bill={this.state.pin} />
					<Count handleAmount={this.handleChange} bill={this.state.change} />
					<Count handleAmount={this.handleFives} bill={this.state.fives} />
					<Count handleAmount={this.handleTens} bill={this.state.tens} />
					<Count handleAmount={this.handleTwenties} bill={this.state.twenties} />
					<Count handleAmount={this.handleFifties} bill={this.state.fifties} />
				</header>
			</div>
		);
	}
}

export default App;

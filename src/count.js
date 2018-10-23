import React from 'react';

class Count extends React.Component {
	render() {
		const state = this.props.state;
		const bill = this.props.name;
		return (
			<div>
				<label htmlFor="count">{state[bill].name}</label>
				<input
					name="count"
					type="number"
					onChange={(event) => this.props.handleAmount(event, state, bill)}
					placeholder="0"
				/>
				<label htmlFor="count">{state[bill].amount}</label>
			</div>
		);
	}
}

export default Count;

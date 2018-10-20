import React from 'react';

class Count extends React.Component {
	render() {
		return (
			<div>
				<label htmlFor="change">{this.props.bill.name}</label>
				<input name="change" type="number" onChange={this.props.handleAmount} placeholder="0" />
				<label htmlFor="change">{this.props.bill.amount}</label>
				{/* <p>Amount: {this.props.bill.amount}</p> */}
				{/* <pre>
					<code>{JSON.stringify(this.props, null)}</code>
				</pre> */}
			</div>
		);
	}
}

export default Count;

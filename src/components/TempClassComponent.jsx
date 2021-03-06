import React, { Component } from 'react';

export default class TempClassComponent extends Component {
	state = {
		unit: 'C',
		min: -273.15,
		max: 100.0,
		indoor: {
			current: 23.0,
		},
		outdoor: {
			current: -2.0,
		},
	};
	changeTemp = (event) => {
		console.log('changeTemp', event.target);
		let theStateName = event.target.name; // outdoor or indoor
		let newValue = event.target.value; // from the textbox

		// state in class components are merged automatically. we only have to update the values we want to update, and leave out the rest.
		this.setState({
			[theStateName]: { current: newValue },
		});
	};

	render() {
		//destructuring

		let { unit, min, max, indoor, outdoor } = this.state;
		return (
			<div>
				<table className='col'>
					<thead>
						<tr className='table-danger'>
							<th colSpan='2'>Temperature </th>
						</tr>
					</thead>
					<tbody className='table-secondary'>
						<tr>
							<td>Min/Max</td>
							<td>
								{min} {unit} / {max} {unit}
							</td>
						</tr>
						<tr>
							<td>Indoor temperature</td>
							<td>
								{indoor.current} {unit}
							</td>
						</tr>
						<tr>
							<td>Outdoor temperature</td>
							<td>
								{outdoor.current} {unit}
							</td>
						</tr>
					</tbody>
				</table>
				<h3>New current temperatures</h3>
				<div className='container'>
					<div className='row'>
						<div className='col'>Indoor:</div>
						<div className='col-sm'>
							<input type='text' name='indoor' value={indoor.current} onChange={this.changeTemp} />
						</div>
					</div>
					<div className='row'>
						<div className='col'>Outdoor:</div>
						<div className='col-sm'>
							<input type='text' name='outdoor' value={outdoor.current} onChange={this.changeTemp} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

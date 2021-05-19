import React, { useState } from 'react';

export default function TempFunctionComponent() {
	const [tempdata, setTempdata] = useState({
		unit: 'C',
		min: -273.15,
		max: 100.0,
		indoor: {
			current: 13.0,
		},
		outdoor: {
			current: -12.0,
		},
	});

	const changeFuncTemp = (event) => {
		let theStateName = event.target.name; // outdoor or indoor
		let newValue = event.target.value; // from the textbox

		setTempdata((tempdata) => ({ ...tempdata, [theStateName]: { current: newValue } }));
	};
	//destructuring
	let { unit, min, max, indoor, outdoor } = tempdata;

	return (
		<div>
			<table className='col'>
				<thead>
					<tr className='table-info'>
						<th colSpan='2'>Temperature </th>
					</tr>
				</thead>
				<tbody className='table-secondary'>
					<tr>
						<td>Min/Max</td>
						<td>
							{min} {unit}/{max} {unit}
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
						<input type='text' name='indoor' value={indoor.current} onChange={changeFuncTemp} />
					</div>
				</div>
				<div className='row'>
					<div className='col'>Outdoor:</div>
					<div className='col-sm'>
						<input type='text' name='outdoor' value={outdoor.current} onChange={changeFuncTemp} />
					</div>
				</div>
			</div>
		</div>
	);
}

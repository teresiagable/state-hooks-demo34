import React, { useState } from 'react';

export default function TempFunctionComponent() {
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
						<td></td>
					</tr>
					<tr>
						<td>Indoor temperature</td>
						<td></td>
					</tr>
					<tr>
						<td>Outdoor temperature</td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<h3>New current temperatures</h3>
			<div className='container'>
				<div className='row'>
					<div className='col'>Indoor:</div>
					<div className='col-sm'></div>
				</div>
				<div className='row'>
					<div className='col'>Outdoor:</div>
					<div className='col-sm'></div>
				</div>
			</div>
		</div>
	);
}

import React from 'react';
import Exercise from './Exercise';
import { CSVLink } from 'react-csv';
function ExerciseList({ exercises, onDelete, onEdit }) {
	return (
		<div>
			<CSVLink data={exercises} filename={'assignment.csv'} className=''>
				Download CSV
			</CSVLink>

			<table id='Exercises'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Score</th>
						<th>Urgency</th>
						<th>Date</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{exercises.map((e, i) => (
						<Exercise
							exercise={e}
							key={i}
							onDelete={onDelete}
							onEdit={onEdit}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ExerciseList;

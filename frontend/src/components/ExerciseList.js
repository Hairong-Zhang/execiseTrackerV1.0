import React, { useState } from 'react';
import Exercise from './Exercise';
import { CSVLink } from 'react-csv';
import '../App.css';

function ExerciseList({ exercises, onDelete, onEdit }) {
	const [veryUrgent, setVeryUrgent] = useState(false);
	const [input, setInput] = useState('');
	return (
		<div>
			<div className='buttons'>
				<CSVLink data={exercises} filename={'assignment.csv'}>
					Download CSV
				</CSVLink>

				{/* Create a button that once click will show only the "very" urgency item */}
				<button
					onClick={() => {
						setVeryUrgent(!veryUrgent);
					}}
				>
					Show Very Urgent
				</button>

				{/* Add a input field to filter the table based on the keyword in the Name field */}
				<input
					type='text'
					placeholder='Search'
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
			</div>

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
					{/* click the button and toggle "very" urgent on and off , also implement the search input to filter the table based on Name*/}
					{exercises
						.filter((exercise) => {
							if (input === '') {
								return exercise;
							} else if (
								exercise.name.toLowerCase().includes(input.toLowerCase())
							) {
								return exercise;
							}
						})
						.filter((exercise) => {
							if (veryUrgent === false) {
								return exercise;
							} else if (exercise.urgency.toLowerCase() === 'very') {
								return exercise;
							}
						})
						.map((exercise) => (
							<Exercise
								key={exercise.id}
								exercise={exercise}
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

import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Exercise({ exercise, onDelete, onEdit }) {
	//convert the ISO time to MM/DD/YYYY format

	let date = new Date(exercise.date);
	/* Date format you have */
	let dateMDY = `${date.getMonth() + 1}-${date.getDate()+1}-${date.getFullYear()}`
	//
	return (
		<tr>
			<td>{exercise.name}</td>
			<td>{exercise.description}</td>
			<td>{exercise.score}</td>
			<td>{exercise.urgency}</td>
			<td>{dateMDY}</td>

			<td>
				<MdEdit
					onClick={() => {
						onEdit(exercise);
					}}
				/>
			</td>
			<td>
			<MdDeleteForever
                    onClick={() => {
                        if (
                            window.confirm('Are you sure you want to delete this assignment?')
                        ) {
                            onDelete(exercise._id);
                        }
                    }}
                />
			</td>
		</tr>
	);
}

export default Exercise;

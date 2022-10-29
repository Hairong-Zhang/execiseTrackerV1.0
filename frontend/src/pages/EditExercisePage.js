import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const EditExercisePage = ({ exerciseToEdit }) => {
	//instead of manually type the value for editing, use the existing value.

	const [name, setName] = useState(exerciseToEdit && exerciseToEdit.name);
	const [description, setDescription] = useState(exerciseToEdit && exerciseToEdit.description);
	const [score, setScore] = useState(exerciseToEdit && exerciseToEdit.score);
	const [urgency, setUrgency] = useState(exerciseToEdit && exerciseToEdit.urgency);
	const [date, setDate] = useState(exerciseToEdit && exerciseToEdit.date);
	//call the backend post method on/exercises to create a new exercise and the use the useHistory hook to redirect to the home page
	const handleChange = (e) =>{
		setUrgency(e.target.value)
	}
	
	const history = useHistory();
	const editExercise = async () => {
		const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				description: description,
				score: score,
				urgency: urgency,
				date: date,
			}),
		});
		if (response.status === 200) {
			alert('Exercise edited successfully');
			history.push('/');
		} else {
			alert(`Failed to edit exercise, status code: ${response.status}`);
			console.log(response);
		}
	};

	return (
		<div className='inputField'>
			<h1 className='addPage'>Edit Assignment</h1>

			<input
				className='inputSlot'
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				className='inputSlot'
				type='text'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<input
				className='inputSlot'
				type='number'
				value={score}
				onChange={(e) => setScore(e.target.value)}
			/>
			<select name="unit" id="unit-select" onChange={handleChange } value={urgency}>
			<option value="urgent">urgent</option>
			<option value="not urgent">not urgent</option>
			</select>
			<input
				className='inputSlot'
				type='date'
				value={date}
				onChange={(e) => setDate(e.target.value)}
			/>
			<button className='inputSlot' onClick={editExercise}>
				Save
			</button>
			<button className='inputSlot' onClick={() => history.push('/')}>
				cancel
			</button>
		</div>
	);
};

export default EditExercisePage;

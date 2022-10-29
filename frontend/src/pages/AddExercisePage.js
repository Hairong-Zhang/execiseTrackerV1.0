import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AddExercisePage = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [score, setScore] = useState(0);
	const [urgency, setUrgency] = useState('');
	const [date, setDate] = useState('');
	const handleChange = (e) =>{
		setUrgency(e.target.value)
	}
	
	//call the backend post method on/exercises to create a new exercise and the use the useHistory hook to redirect to the home page
	const history = useHistory();
	const postExercise = async (e) => {
		const response = await fetch('/exercises', {
			method: 'POST',
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
		if (response.status === 201) {
			alert('Exercise added successfully');
			history.push('/');
		} else {
			console.log(urgency)
			alert(`Failed to add exercise, status code: ${response.status}`);
			console.log(response);
		}
	};

	return (
		<div className='inputField'>
			<h1 className='addPage'>Add Assignment</h1>
			<body>You can add a new assignment here. Describption, score, and urgency are optional.</body>
			<input
				className='inputSlot'
				type='text'
				placeholder='Enter name here'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				className='inputSlot'
				type='text'
				placeholder='Enter description here'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<input
				className='inputSlot'
				type='number'
				placeholder='Enter score worth here.'
				value={score}
				onChange={(e) => setScore(e.target.value)}
			/>
				<input
				className='inputSlot'
				type='text'
				placeholder='Enter urgency here'
				value={urgency}
				onChange={(e) => setUrgency(e.target.value)}
			/>
			
			<input
				className='inputSlot'
				type='date'
				placeholder='Enter date here'
				value={date}
				onChange={(e) => setDate(e.target.value)}
			/>
			<button className='inputSlot' onClick={postExercise}>
				Submit
			</button>
			<button className='inputSlot' onClick={() => history.push('/')}>
				cancel
			</button>
		</div>
	);
};

export default AddExercisePage;

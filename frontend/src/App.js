import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/navigation.js';

function App() {
	const [exerciseToEdit, setExerciseToEdit] = useState();
	return (
		<div className='App'>
			<Header />
			<Router>
			<Navigation/>
				<div className='App-header'>
					<Route path='/' exact>
						<HomePage setExerciseToEdit={setExerciseToEdit} />
					</Route>
					<Route path='/add'>
						<AddExercisePage />
					</Route>
					<Route path='/edit'>
						<EditExercisePage exerciseToEdit={exerciseToEdit} />
					</Route>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

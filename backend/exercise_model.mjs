// Get the mongoose object

import mongoose from 'mongoose';

// Prepare to the database Exercises_db in the MongoDB server running locally on port 27017
mongoose.connect(
	'mongodb+srv://hairongaid20:1234@cluster0.z8eu6ra.mongodb.net/?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once('open', () => {
	console.log('Successfully connected to MongoDB using Mongoose!');
});

/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	score: {
		type: Number,
		required: false,
	},
	// urgency type string and only allow "kgs" or "lbs"
	urgency: {
		type: String,
		required: true,
	},
	//date format MM-DD-YYYY
	date: {
		type: Date,
		required: true,
	},
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

//POST method The request body will be a JSON object with all the 5 properties listed in the data model.
const createExercise = async (name, description, score, urgency, date) => {
	const exercise = new Exercise({
		name: name,
		description: description,
		score: score,
		urgency: urgency,
		date: date,
	});
	return await exercise.save();
};

//get all the exercises, No request body and no path parameters. return all the documents in json format, code 200
const findExercise = async () => {
	const exercises = await Exercise.find();
	return exercises;
};

const findExerciseUsingMicroservice = async () => {
	const exercises = await (
		await Exercise.find()
	).filter((exercise) => exercise.urgency === 'Very');
	return exercises;
};

//PUT method The request body will be a JSON object with all the 5 properties listed in the data model, return with json object with the updated document, code 200
const replaceExercise = async (id, name, description, score, urgency, date) => {
	const query = await Exercise.findByIdAndUpdate(id, {
		name: name,
		description: description,
		score: score,
		urgency: urgency,
		date: date,
	});
	return query;
};

//delete with the id,return code 204 and a message

const deleteExercise = async (id) => {
	const result = await Exercise.findByIdAndDelete(id);
	return result;
};

export {
	createExercise,
	findExercise,
	replaceExercise,
	deleteExercise,
	findExerciseUsingMicroservice,
};

import React, {Component} from 'react';
import axios from 'axios';

//import {Link} from 'react-router-dom';

const Exercise = (props) => (
    <tr>
        <td>{props.exercise.name}</td>
        <td>{props.exercise.setsXReps}</td>
        <td>{props.exercise.musclesWorked}</td>
        <td>{props.exercise.maxWeight}</td>
    </tr>
);

export default class ExerciseList extends Component {
    constructor (props) {
        super(props);
        this.state = { exercises: []};
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_FRONTEND_HOST+'/api/getAllExercises')
        .then((response) => {
            console.log(response.data.data)
            this.setState({exercises: response.data.data});
        })
        .catch(function (error){
            console.log(error);
        });
    }

    exerciseList() {
        return this.state.exercises.map((currentExercise) => {
            return (
                <Exercise exercise={currentExercise}
                key={currentExercise._id} />
            );
        })
    }

    render() {
        return (
            <div>
                <h3> Record List </h3>
                <table className= "table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Exercise Name</th>
                            <th>Sets x Reps</th>
                            <th>Muscles Worked</th>
                            <th>Max Weight</th>
                        </tr>
                    </thead>
                    <tbody>{this.exerciseList()}</tbody>
                </table>
            </div>
        )
    }
}
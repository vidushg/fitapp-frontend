import {React, Component} from "react";
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.onChangeExerciseName = this.onChangeExerciseName.bind(this);
        this.onChangeExerciseSetsXReps = this.onChangeExerciseSetsXReps.bind(this);
        this.onChangeExerciseMusclesWorked = this.onChangeExerciseMusclesWorked.bind(this);
        this.onChangeExerciseMaxWeight = this.onChangeExerciseMaxWeight.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            exerciseName: "",
            exerciseSetsXReps: "",
            exerciseMusclesWorked: "",
            exerciseMaxWeight: "",
        };
    }


    onChangeExerciseName(e) {
        this.setState({
            exerciseName: e.target.value,
        });
    }

    onChangeExerciseSetsXReps(e) {
        this.setState({
            exerciseSetsXReps: e.target.value,
        });
    }

    onChangeExerciseMusclesWorked(e) {
        this.setState({
            exerciseMusclesWorked: e.target.value,
        });
    }

    onChangeExerciseMaxWeight(e) {
        this.setState({
            exerciseMaxWeight: e.target.value,
        });
    }
 
    onSubmit(e) {
        e.preventDefault();

        console.log(this)
        const newExercise = {
            name: this.state.exerciseName,
            setsXreps: this.state.exerciseSetsXReps,
            musclesWorked: this.state.exerciseMusclesWorked,
            maxWeight: this.state.exerciseMaxWeight,
        };

        axios.post(process.env.REACT_APP_FRONTEND_HOST+'/api/addExercises', newExercise)
            .then((res) => console.log(res.data));

        //clearing the state

        this.setState({
            exerciseName: "",
            exerciseMaxWeight: "",
            exerciseMusclesWorked: "",
            exerciseSetsXReps: "",
        });
    }

    render() {
        return (
            <div style = {{marginTop: 20}}>
                <h3>Create new Exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Exercise Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.exerciseName}
                            onChange={this.onChangeExerciseName} />
                    </div>
                    <div className="form-group">
                        <label>Max Weight: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.exerciseMaxWeight}
                            onChange={this.onChangeExerciseMaxWeight} />
                    </div>
                    <div className="form-group">
                        <label>Mucles Worked: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.exerciseMusclesWorked}
                            onChange={this.onChangeExerciseMusclesWorked} />
                    </div>
                    <div className="form-group">
                        <label>Sets x Reps:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.exerciseSetsXReps}
                            onChange={this.onChangeExerciseSetsXReps} />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value= "Create Exercise"
                            className= "btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
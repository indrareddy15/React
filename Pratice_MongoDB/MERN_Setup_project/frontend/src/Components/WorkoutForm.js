import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContex";

function WorkoutForm() {
    const { dispatch } = useWorkoutContext();
    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState(null);
    const [emptyFileds, setEmptyFileds] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, reps, load };

        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFileds(json.emptyFileds);
        }
        if (response.ok) {
            setTitle("");
            setReps("");
            setLoad("");
            setError(null);
            setEmptyFileds([]);
            console.log("New workouts id added successfully", json);
            dispatch({ type: "CREATE_WORKOUT", payload: json });
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add New WorkOuts</h3>
            <label>Exercise Title</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFileds.includes('title') ? 'error' : ''}
            />

            <label>Load in (Kgs:)</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFileds.includes('load') ? 'error' : ''}
            />

            <label>Reps in (Kegs)</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFileds.includes('reps' ? 'error' : '')}
            />

            <button className="submit">Add Workout</button>
            {error && <div className="errrors">{error}</div>}
        </form>
    );
}

export default WorkoutForm;

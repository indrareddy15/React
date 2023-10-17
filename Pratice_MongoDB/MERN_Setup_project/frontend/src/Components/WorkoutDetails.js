import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContex';


//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function WorkoutDetails({ workout }) {

    const { dispatch } = useWorkoutContext()

    const handleDelete = async () => {
        const response = await fetch('/api/workouta' + workout._id, {
            method: 'DELETE',
        })

        const json = await response.json;

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }
    return (
        <div className='workout-details'>
            <h1>{workout.title}</h1>
            <p><strong>Load(Kgs :)</strong>{workout.load}</p>
            <p><strong>Reps(Kgs :)</strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleDelete}>Delete</span>
        </div>
    )
}

export default WorkoutDetails
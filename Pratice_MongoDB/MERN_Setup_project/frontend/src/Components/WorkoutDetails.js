import React from 'react'

function WorkoutDetails({ workout }) {
    return (
        <div className='workout-details'>
            <h1>{workout.title}</h1>
            <p><strong>Load(Kgs :)</strong>{workout.load}</p>
            <p><strong>Reps(Kgs :)</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails
import React, { useEffect, useState } from 'react'


const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:5000/api/workouts')
            const json = await response.json();

            if (response.ok) {
                setWorkouts(json);
            }
        };
        fetchWorkouts();
    }, [])

    const workout = workouts && workouts.map(() => (
        <p key={workout._id}>{workout.title}</p>
    ))

    return (
        <div className='home'>
            <h1>{workout}</h1>
        </div>
    )
}

export default Home
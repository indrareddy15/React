import React, { useEffect, useState } from 'react'

import WorkoutDetails from '../Components/WorkoutDetails';
import WorkoutForm from '../Components/WorkoutForm';


const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json();

            if (response.ok) {
                setWorkouts(json);
            }
        };
        fetchWorkouts();
    }, [])


    return (
        <div className='home'>
            {workouts && workouts.map((workout) => (
                // <p key={workouts._id}>{workouts.title}</p>
                <WorkoutDetails key={workout._id} workout={workout} />
            ))}
            <WorkoutForm />
        </div>
    )
}

export default Home
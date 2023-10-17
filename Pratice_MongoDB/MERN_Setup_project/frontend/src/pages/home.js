import React, { useEffect } from 'react'

import WorkoutDetails from '../Components/WorkoutDetails';
import WorkoutForm from '../Components/WorkoutForm';
import { useWorkoutContext } from '../hooks/useWorkoutContex';


const Home = () => {
    const { workouts, dispatch } = useWorkoutContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            }
        };
        fetchWorkouts();
    }, [dispatch])


    return (
        <div className='home'>
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
            ))}
            <WorkoutForm />
        </div>
    )
}

export default Home
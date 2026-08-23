import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const addDestinationPage = async () => {
    const res = await fetch("http://localhost:5000/destination")
    const destinations = await res.json();
    
    console.log(destinations);

    return (
        <div className='container mx-auto '>
            <h1>Explore All Destinations</h1>
            <p>Find your perfect travel experience from our curated collection</p>

            <div className='grid grid-cols-3 gap-5 items-stretch'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}/>)
                }
            </div>
        </div>
    );
};

export default addDestinationPage;
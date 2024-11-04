import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient.js';
import { Link } from 'react-router-dom';

const CrewmateGallery = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            let { data, error } = await supabase.from('crewmates').select('*');
            if (error) console.error('Error fetching crewmates:', error.message);
            setCrewmates(data || []);
        };
        fetchCrewmates();
    }, []);

    return (
        <div className="gallery">
            <h1>Crewmate Gallery</h1>
            {crewmates.length > 0 ? (
                crewmates.map((crewmate) => (
                    <div className="gallery-item" key={crewmate.id}>
                        {crewmate.avatar_url && (
                            <img src={crewmate.avatar_url} alt={`${crewmate.name} avatar`} width="100" />
                        )}
                        <h2>{crewmate.name}</h2>
                        <p>Type: {crewmate.character_type}</p>
                        <p>Attribute: {crewmate.attribute}</p>
                        <Link to={`/crewmate/${crewmate.id}`}>View Details</Link>
                    </div>
                ))
            ) : (
                <p>No crewmates found. Add some!</p>
            )}
        </div>
    );
};

export default CrewmateGallery;

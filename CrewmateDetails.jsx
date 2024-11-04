import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient.js';

const CrewmateDetails = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCrewmate = async () => {
            let { data, error } = await supabase
                .from('crewmates')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching crewmate:', error.message);
            } else {
                setCrewmate(data);
            }
        };

        fetchCrewmate();
    }, [id]);

    const deleteCrewmate = async () => {
        const { error } = await supabase.from('crewmates').delete().eq('id', id);
        if (error) {
            console.error('Error deleting crewmate:', error.message);
            alert('Failed to delete crewmate');
        } else {
            alert('Crewmate deleted successfully!');
            navigate('/gallery');
        }
    };

    return (
        <div className="details-container">
            {crewmate ? (
                <div>
                    {crewmate.avatar_url && (
                        <img src={crewmate.avatar_url} alt={`${crewmate.name} avatar`} width="200" />
                    )}
                    <h2>{crewmate.name}</h2>
                    <p>Type: {crewmate.character_type}</p>
                    <p>Attribute: {crewmate.attribute}</p>
                    <button onClick={deleteCrewmate} className="delete">Delete Crewmate</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CrewmateDetails;

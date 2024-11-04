import React, { useState } from 'react';
import { supabase } from './supabaseClient.js';

const CreateCrewmate = () => {
    const [name, setName] = useState('');
    const [attribute, setAttribute] = useState('');
    const [characterType, setCharacterType] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    // Predefined avatar URLs
    const avatarOptions = [
        'https://vxlceadybyaezshothlk.supabase.co/storage/v1/object/public/avatars/250px-troop-giant.webp',
        'https://vxlceadybyaezshothlk.supabase.co/storage/v1/object/public/avatars/th-4.jpg',
        'https://vxlceadybyaezshothlk.supabase.co/storage/v1/object/public/avatars/troop-archer.webp',
        'https://vxlceadybyaezshothlk.supabase.co/storage/v1/object/public/avatars/troop-wizard.png',
        "https://vxlceadybyaezshothlk.supabase.co/storage/v1/object/public/avatars/7ce7a2e83a4a294134fc7fbccef09109.webp",
        'https://vxlceadybyaezshothlk.supabase.co/storage/v1/object/public/avatars/BB-Baby-Dragon.png',
        'https://vxlceadybyaezshothlk.supabase.co/storage/v1/object/public/avatars/Clash-Of-Clans-Free-PNG-Clip-Art.png',
        'https://vxlceadybyaezshothlk.supabase.co/storage/v1/object/public/avatars/f58096cd710ceeef62f4500d75806994.jpg',
        'https://vxlceadybyaezshothlk.supabase.co/storage/v1/object/public/avatars/media_104efaabcd6057a1ed35c3f1216e4d23182c5444e.png',
        'https://vxlceadybyaezshothlk.supabase.co/storage/v1/object/public/avatars/png-clipart-woman-wearing-purple-cape-and-pink-dress-clash-of-clans-clash-royale-boom-beach-hay-day-witchcraft-clash-royal-purple-game.png',

    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.from('crewmates').insert([
            { name, attribute, character_type: characterType, avatar_url: avatarUrl }
        ]);

        if (error) {
            console.error('Error creating crewmate:', error.message);
            alert(`Failed to create crewmate: ${error.message}`);
        } else {
            alert('Crewmate created successfully!');
            setName('');
            setAttribute('');
            setCharacterType('');
            setAvatarUrl('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Character Name"
                required
            />
            <input
                type="text"
                value={attribute}
                onChange={(e) => setAttribute(e.target.value)}
                placeholder="Attribute (e.g., strength)"
                required
            />
            <input
                type="text"
                value={characterType}
                onChange={(e) => setCharacterType(e.target.value)}
                placeholder="Character Type (e.g., Warrior, Mage)"
                required
            />

            <div className="avatar-selection">
                <p>Select an Avatar:</p>
                <div className="avatar-options">
                    {avatarOptions.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Avatar ${index + 1}`}
                            width="80"
                            onClick={() => setAvatarUrl(url)}
                            style={{
                                border: avatarUrl === url ? '2px solid #3498db' : '2px solid transparent',
                                cursor: 'pointer',
                                margin: '5px',
                                borderRadius: '8px'
                            }}
                        />
                    ))}
                </div>
            </div>

            <button type="submit">Add Character</button>
        </form>
    );
};

export default CreateCrewmate;

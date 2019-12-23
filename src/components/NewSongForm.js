import React, { useState } from 'react';

const NewSongForm = ({addSong}) => {

    const [song, setSong] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(song)
        addSong(song)
        setSong('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Song name:</label>
            <input type="text" required onChange={(evt) => setSong(evt.target.value) } value={song} />
            <input type="submit" value="Add Song" />
        </form>
     );
}
 
export default NewSongForm;
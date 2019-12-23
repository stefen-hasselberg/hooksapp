import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm'

const SongList = () => {
   const [songs, setSongs] =  useState([
        {id: 1, title: "almost home"},
        {id: 2, title: "memory gospel"},
        {id: 3, title: "this wild darkness"}
    ])

    const addSong = (title) => {
        setSongs([...songs, {id: uuid(), title}])
    }

    useEffect(() => {
        console.log('use effect hook ran ', songs)
    })

    return ( 
        <div className="song-list">
            <ul>
                {
                    songs.map((song) => {
                        return (
                        <li key={song.id}>{song.title}</li>
                        )
                    })
                }
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>

     );
}
 

export default SongList ;
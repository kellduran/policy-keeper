import React from "react";

function NoteCard ({ note, body }) {
    console.log(note, "Note from NoteCard")
    console.log(body, "body from NoteCard")
    return(
        <div style={{fontSize: 45}}>
            <h2>Note: { body }</h2>
        </div>
    )
}

export default NoteCard;
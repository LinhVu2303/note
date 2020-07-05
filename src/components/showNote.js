import React, { useState } from "react";
import "./showNote.css";
import { connect } from "react-redux";
import { actEditNote, actRemoveNote } from "../actions/action"; 

function ShowNote (props) {
    const [noteContent, setNoteContent] = useState (props.noteData.content);

    const noteId = props.noteData.id;

    const handleChange = (e) => {
        setNoteContent(e.target.value);
        props.editNote(noteId, e.target.value);
    }

    const handleRemoveNote = () => {
        props.removeNote(noteId);
    }

    return (
        <div className="col-md-4" style={{marginTop: 10}}>
            <div className="card bg-warning">
                    <div className="card-body" style={{ height: 200 }}>
                        <textarea value= {noteContent} onChange = {handleChange}></textarea>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger btn-sm float-right" onClick={handleRemoveNote}>Xóa</button>
                    </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        editNote : (id, content) => {
            dispatch(actEditNote(id,content));
        },
        removeNote : (id) => {
            dispatch(actRemoveNote(id));
        }
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        note : state.note
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowNote);
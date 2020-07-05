import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';

import {actAddNote} from '../actions/action';

function AddNote (props){
    const [content, setContent] = useState();

    const noteInput = useRef(null);

    const handleAdd = () => {
        props.addNote(content);
        noteInput.current.value = '';

        setContent('');
    };

    return (
        <div className="col-md-12" style={{marginBottom : 15}}>
            <div className="input-group mb-8">
                <textarea
                    type = "text"
                    className="form-control"
                    placeholder = "Nội dung ghi chú"
                    value = {content}
                    onChange = {(e) => {
                        setContent(e.target.value)
                    }}    
                    ref ={noteInput}
                />
                
                <div className="input-group-append">
                    
                    <button type="button" className="btn btn-primary" onClick={handleAdd}>
                        Thêm
                    </button>
                    
                </div>
                
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote : (content) => {
            dispatch (actAddNote(content));
        },
    };
};

export default connect (null, mapDispatchToProps)(AddNote);
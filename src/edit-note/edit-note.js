import React, {Component} from 'react';

import './edit-note.css';

import {connect} from 'react-redux';
import * as actions from '../store/actions';

class EditNote extends Component {

    state = {
        id: this.props.currentNote.id,
        name: this.props.currentNote.name,
        content: this.props.currentNote.content,
        error: false
    }

    changeNameNote = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    changeContentNote = (e) => {
        this.setState({
            content:e.target.value
        })
    }

    saveNote = () => {

        if(this.state.name.length < 1 || this.state.content.length < 1) {
            this.setState({
                error: true
            })
        } else {
            let note = {
                id: this.state.id,
                name: this.state.name,
                content: this.state.content
            };
    
            this.props.noteToSave(note);
        }
    }

    render() {

        let {error, id, name, content} = this.state;
        let {hideCurrentNote, deleteNote} = this.props;
        let errorBlock = error ? <div className="error-edit-note">Fill in both fields!</div> : null;

        return (
            <div className="box-wrapper">
                <div className="box-wrapper-inner"></div>
                <div className="add-note form-group">
                <div className="new-note">
                    <p>EDIT NOTE!</p>
                </div>
                {errorBlock}
                <div className="input-name">
                    <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Title"
                            onChange={(e) => {this.changeNameNote(e)}}
                            value={name}
                            ></input>
                </div>
                <div className="input-content">
                    <textarea className="form-control " placeholder="Content"
                            onChange={(e) => {this.changeContentNote(e)}}
                            
                            defaultValue={content}
                    ></textarea>
                </div>
                <div className="buttom-note">
                   
                    <button type="button" 
                            className="btn btn-success"
                            onClick={() => { this.saveNote() }}
                            >Save</button>
                    <button type="button" 
                            className="btn btn-warning"
                            onClick={ () => hideCurrentNote() }>Cancel</button>
                    <button type="button" 
                            className="btn btn-danger"
                            onClick={ () => deleteNote(id) }
                            >Delete</button>
                </div>
            </div>
            </div>

            
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(EditNote);
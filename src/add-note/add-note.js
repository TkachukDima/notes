import React, {Component} from 'react';

import './add-note.css';

import {connect} from 'react-redux';
import * as actions from '../store/actions';

class AddNote extends Component {

    state = {
        name: '',
        content: "",
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
                name: this.state.name,
                content: this.state.content
            };
    
            this.props.noteToSave(note);
        }
        

    }

    render() {

        let {error, name, content} = this.state;

        let errorBlock = error ? <div className="error-add-note">Fill in both fields!</div> : null;

        return (
            <div className="box-wrapper">
                <div className="box-wrapper-inner"></div>
                <div className="add-note form-group">
                <div className="new-note">
                    <p>ADD NEW NOTE!</p>
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
                            className="btn btn-danger"
                            onClick={ () => {this.props.hideCurrentNote()} }>Cancel</button>
                </div>
            </div>
            </div>

            
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(AddNote);
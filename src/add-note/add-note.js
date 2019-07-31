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
        console.log(e.target.value);
    }

    changeContentNote = (e) => {
        this.setState({
            content:e.target.value
        })
        console.log(e.target.value);
    }

    saveNote = () => {
        
        if(this.state.name.length < 1 || this.state.content.length < 1) {
            this.setState({
                error: true
            })
        } else {
            const note = {
                name: this.state.name,
                content: this.state.content
            };
    
            this.props.noteToSave(note);
        }
        

    }

    render() {

        let error = this.state.error ? <div className="error-add-note">Fill in both fields!</div> : null;

        return (
            <div className="box-wrapper">
                <div className="box-wrapper-inner"></div>
                <div className="add-note form-group">
                <div className="new-note">
                    <p>ADD NEW NOTE!</p>
                </div>
                {error}
                <div className="input-name">
                    <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Title"
                            onChange={(e) => {this.changeNameNote(e)}}
                            value={this.state.name}
                            ></input>
                </div>
                <div className="input-content">
                    <textarea className="form-control " placeholder="Content"
                            onChange={(e) => {this.changeContentNote(e)}}
                            
                            defaultValue={this.state.content}
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
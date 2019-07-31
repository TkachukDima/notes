import React, {Component} from 'react';
import './list-notes.css';

import {connect} from 'react-redux';
import * as actions from '../store/actions';

class ListNotes extends Component {

    render() {
        let {notes,showCurrentNote, showFormNewNote} = this.props;
        
        let allNotes;
        if(notes.length) {
            allNotes = notes.map( (el) => {
                return (
                    <div key={el.id} className="notes_item" onClick={ () => showCurrentNote(el) }>
                        <div className="name">{el.name}</div>
                            <hr></hr>
                        <div className="content">{el.content}</div>
                    </div>
                );
            } ); 
        } else {
            allNotes = <div>No notes yet!</div>
        }

        return (
            <div className="list-notes">
                <div>
                    <button type="button"
                            className="btn-new-note btn btn-success"
                            onClick={ () => showFormNewNote() }
                            >Create new note
                    </button>
                </div>
                <div className="listNotes">
                  {allNotes}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(ListNotes)
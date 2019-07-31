import React, {Component} from 'react';

import './app.css';

import {connect} from 'react-redux';
import * as actions from '../store/actions';

import ListNotes from '../list-notes/list-notes';
import AddNote from '../add-note/add-note';
import EditNote from '../edit-note/edit-note';

import CurrentNote from '../current-note/current-note';

class App extends Component {

    render() {
        let {visibleCurrentNote, visibleAddNewNote, visibleEditNewNote} = this.props;
        
       let currentNote = visibleCurrentNote ? <CurrentNote /> : <ListNotes />;
       let addNote = visibleAddNewNote ? <AddNote /> : null;
       let editNote = visibleEditNewNote ? <EditNote /> : null;
       
       return (
           <div className="container">
                {addNote}
                {editNote}
                {currentNote}
           </div>
                
       );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actions)(App);
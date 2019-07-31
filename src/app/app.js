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

        
       const currentNote = this.props.visibleCurrentNote ? <CurrentNote /> : <ListNotes />;
       const addNote = this.props.visibleAddNewNote ? <AddNote /> : null;
       const editNote = this.props.visibleEditNewNote ? <EditNote /> : null;
       
       return (
           <div className="container">
                {addNote}
                {editNote}
                
                {/* <ListNotes /> */}
                {currentNote}
           </div>
                
       );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actions)(App);
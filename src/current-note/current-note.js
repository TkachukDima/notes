import React, {Component} from 'react';

import './current-note.css';

import {connect} from 'react-redux';
import * as actions from '../store/actions';

class CurrentNote extends Component {

    state = {
        authot_comment: '',
        content_comment: '',
        visibleCommentPanel: false,
        error: false
    }

    changeContentComment = (e) => {
        
        this.setState({
            content_comment: e.target.value
        })
    }

    changeAuthorComment = (e) => {
      
        this.setState({
            authot_comment: e.target.value
        })
    }

    saveComment = () => {
        
        if(this.state.authot_comment.length < 1 || this.state.content_comment.length < 1) {
            this.setState({
                error: true
            })
        } else {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() +1;
            let day = date.getDate();

            let createDate = `${day}-${month}-${year}`;

            let comment = {
                idCurrentNote: this.props.currentNote.id,
                authot_comment: this.state.authot_comment,
                content_comment: this.state.content_comment,
                createDate
            };
            this.props.addComment(comment);
            this.setState({
                visibleCommentPanel: false,
                error: false,
                authot_comment: '',
                content_comment: ''
            });
        }
  
    }

    showAddComment = () => {
        this.setState({
            visibleCommentPanel: true
        })
    }
    closeCommentPanel = () => {
        this.setState({
            visibleCommentPanel: false,
            error: false,
            authot_comment: '',
            content_comment: ''
        })
    }

    render() {
        
        console.log(this.props);
        let buttonComment = (
            <div className="button-add-comment">
                <button type="button" 
                        className="btn btn-info"
                        onClick={ () => {this.showAddComment()} }>Add Comment</button>
            </div>
        );
        let panelComment = (
            <div> 
                <div>
                    <input type="text"
                        className="form-control input-name-comment"
                        placeholder="Author"
                        value={this.state.authot_comment}
                        onChange={(e) => {this.changeAuthorComment(e)}}
                        ></input>   
                    <textarea type="text"
                            className="form-control input-content-comment"
                            placeholder="Add comments"
                            value={this.state.content_comment}
                            onChange={(e) => { this.changeContentComment(e) }}
                            
                            ></textarea>
                </div>
                <div className="btn-comments">
                
                    <button type="button" 
                            className="btn btn-danger"
                            onClick={() => {this.closeCommentPanel()}}>Cancel</button>
                    <button type="button" 
                            className="btn btn-success"
                            onClick={() => {this.saveComment()}}
                            >Comment</button>  
                </div>
            </div>
        )
        
        let addCommentPanel = this.state.visibleCommentPanel ? panelComment : buttonComment;
        let error = this.state.error ? <div className="error">Fill in both fields!</div> : null;

        let arrComments = this.props.comments
                                    .filter((el) => el.idCurrentNote === this.props.currentNote.id)
                                    .map( (el) => {
                                        return (
                                            <div key={el.id} className="item-comment">
                                                <div >
                                                    <span className="author">{el.authot_comment}</span> <span className="create-date">{el.createDate}</span> 
                                                </div>
                                                <div className="content">
                                                    {el.content_comment}
                                                </div>
                                        
                                            </div>

                                        );
                                    });
        console.log(arrComments);

        return (
            <div className="wrapper-current-note">
                <div className="current-note">
                    
                    <div className="note">
                        <div className="box-note">
                            <div className="name-note">
                                {this.props.currentNote.name}
                            </div>
                            <hr></hr>
                            <div className="content-note">
                            {this.props.currentNote.content}
                            </div>

                        </div>
                        <div className="btn-view-note">
                            <button type="button" 
                                    className="btn btn-primary btn-edit"
                                    onClick={ () => {this.props.edidCurrentNote()} }>Edit</button>
                            <button type="button" 
                                    className="btn btn-danger btn-close"
                                    onClick={() => { this.props.hideCurrentNote() }}
                                    >Close</button>  
                        </div>
                                        

                    </div>
                    <div className="note-comments">
                        <hr></hr>
                        {error}
                        {addCommentPanel}
                        <div className="list-comment">
                            {arrComments}
                        </div>
                            
                    </div>
                    
                    
                    
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(CurrentNote);
import React, {Component} from 'react';
import './current-note.css';
import {connect} from 'react-redux';
import * as actions from '../store/actions';

class CurrentNote extends Component {

    state = {
        author_comment: '',
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
            author_comment: e.target.value
        })
    }

    saveComment = () => {
        
       if(this.state.author_comment.split(" ").length !== 2 || this.state.content_comment.length < 1) {
            this.setState({
                error: true
            })
        } else {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() +1;
            let day = date.getDate();

            let createDate = `${day}-${month}-${year}`;
            let arr_author_comment = this.state.author_comment.split(" ");
            let author_comment = arr_author_comment.map( (el) => {
                return el[0].toUpperCase() + el.slice(1);
            } ).join(" ");

            let comment = {
                idCurrentNote: this.props.currentNote.id,
                content_comment: this.state.content_comment,
                createDate,
                author_comment
            };
            this.props.addComment(comment);
            this.setState({
                visibleCommentPanel: false,
                error: false,
                author_comment: '',
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
            author_comment: '',
            content_comment: ''
        })
    }

    render() {
        let {error, author_comment, content_comment, visibleCommentPanel} = this.state;
        let {comments, currentNote, edidCurrentNote, hideCurrentNote} = this.props;

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
                        placeholder="Ivan Ivanov"
                        value={author_comment}
                        onChange={(e) => {this.changeAuthorComment(e)}}
                        ></input>   
                    <textarea type="text"
                            className="form-control input-content-comment"
                            placeholder="Leave your comment..."
                            value={content_comment}
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
        
        let addCommentPanel = visibleCommentPanel ? panelComment : buttonComment;
        let errorBlock = error ? <div className="error">Fill in both fields! ( Author : Ivan Ivanov )</div> : null;

        let arrComments = comments.filter((el) => el.idCurrentNote === currentNote.id)
                                  .map( (el) => {
                                        return (
                                            <div key={el.id} className="item-comment">
                                                <div >
                                                    <span className="author">{el.author_comment}</span> <span className="create-date">{el.createDate}</span> 
                                                </div>
                                                <div className="content">
                                                    {el.content_comment}
                                                </div>
                                            </div>
                                        );
                                    })
                                  .reverse();
        // console.log(arrComments);

        return (
            <div className="wrapper-current-note">
                <div className="current-note">
                    <div className="note">
                        <div className="box-note">
                            <div className="name-note">
                                {currentNote.name}
                            </div>
                            <hr></hr>
                            <div className="content-note">
                            {currentNote.content}
                            </div>
                        </div>
                        <div className="btn-view-note">
                            <button type="button" 
                                    className="btn btn-primary btn-edit"
                                    onClick={ () => edidCurrentNote() }>Edit</button>
                            <button type="button" 
                                    className="btn btn-danger btn-close"
                                    onClick={() => hideCurrentNote() }
                                    >Close</button>  
                        </div>
                    </div>
                    <div className="note-comments">
                        <hr></hr>
                            {errorBlock}
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
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"ACTION_SAVE_NOTE",function(){return b}),n.d(a,"ACTION_SHOW_CURRENT_NOTE",function(){return v}),n.d(a,"ACTION_HIDE_CURRENT_NOTE",function(){return p}),n.d(a,"ACTION_SHOW_FORM_NEW_NOTE",function(){return f}),n.d(a,"ACTION_EDIT_NOTE",function(){return E}),n.d(a,"ACTION_DELETE_NOTE",function(){return h}),n.d(a,"ACTION_SAVE_COMMENT",function(){return C}),n.d(a,"noteToSave",function(){return O}),n.d(a,"showCurrentNote",function(){return y}),n.d(a,"hideCurrentNote",function(){return _}),n.d(a,"showFormNewNote",function(){return g}),n.d(a,"edidCurrentNote",function(){return j}),n.d(a,"deleteNote",function(){return w}),n.d(a,"addComment",function(){return T});var o=n(0),r=n.n(o),c=n(11),l=n.n(c),i=n(2),s=n(3),u=n(5),m=n(4),d=n(6),N=(n(24),n(1)),b="ACTION_SAVE_NOTE",v="ACTION_SHOW_CURRENT_NOTE",p="ACTION_HIDE_CURRENT_NOTE",f="ACTION_SHOW_FORM_NEW_NOTE",E="ACTION_EDIT_NOTE",h="ACTION_DELETE_NOTE",C="ACTION_SAVE_COMMENT",O=function(e){return{type:b,payload:e}},y=function(e){return{type:v,payload:e}},_=function(){return{type:p}},g=function(){return{type:f}},j=function(){return{type:E}},w=function(e){return{type:h,payload:e}},T=function(e){return{type:C,payload:e}},A=(n(29),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.notes,a=t.showCurrentNote,o=t.showFormNewNote;return e=n.length?n.map(function(e){return r.a.createElement("div",{key:e.id,className:"notes_item",onClick:function(){return a(e)}},r.a.createElement("div",{className:"name"},e.name),r.a.createElement("hr",null),r.a.createElement("div",{className:"content"},e.content))}):r.a.createElement("div",null,"No notes yet!"),r.a.createElement("div",{className:"list-notes"},r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn-new-note btn btn-success",onClick:function(){return o()}},"Create new note")),r.a.createElement("div",{className:"listNotes"},e))}}]),t}(o.Component)),I=Object(N.b)(function(e){return e},a)(A),S=(n(30),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",content:"",error:!1},n.changeNameNote=function(e){n.setState({name:e.target.value})},n.changeContentNote=function(e){n.setState({content:e.target.value})},n.saveNote=function(){if(n.state.name.length<1||n.state.content.length<1)n.setState({error:!0});else{var e={name:n.state.name,content:n.state.content};n.props.noteToSave(e)}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.error,a=t.name,o=t.content,c=n?r.a.createElement("div",{className:"error-add-note"},"Fill in both fields!"):null;return r.a.createElement("div",{className:"box-wrapper"},r.a.createElement("div",{className:"box-wrapper-inner"}),r.a.createElement("div",{className:"add-note form-group"},r.a.createElement("div",{className:"new-note"},r.a.createElement("p",null,"ADD NEW NOTE!")),c,r.a.createElement("div",{className:"input-name"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Title",onChange:function(t){e.changeNameNote(t)},value:a})),r.a.createElement("div",{className:"input-content"},r.a.createElement("textarea",{className:"form-control ",placeholder:"Content",onChange:function(t){e.changeContentNote(t)},defaultValue:o})),r.a.createElement("div",{className:"buttom-note"},r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.saveNote()}},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){e.props.hideCurrentNote()}},"Cancel"))))}}]),t}(o.Component)),k=Object(N.b)(function(e){return e},a)(S),x=(n(31),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={id:n.props.currentNote.id,name:n.props.currentNote.name,content:n.props.currentNote.content,error:!1},n.changeNameNote=function(e){n.setState({name:e.target.value})},n.changeContentNote=function(e){n.setState({content:e.target.value})},n.saveNote=function(){if(n.state.name.length<1||n.state.content.length<1)n.setState({error:!0});else{var e={id:n.state.id,name:n.state.name,content:n.state.content};n.props.noteToSave(e)}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.error,a=t.id,o=t.name,c=t.content,l=this.props,i=l.hideCurrentNote,s=l.deleteNote,u=n?r.a.createElement("div",{className:"error-edit-note"},"Fill in both fields!"):null;return r.a.createElement("div",{className:"box-wrapper"},r.a.createElement("div",{className:"box-wrapper-inner"}),r.a.createElement("div",{className:"add-note form-group"},r.a.createElement("div",{className:"new-note"},r.a.createElement("p",null,"EDIT NOTE!")),u,r.a.createElement("div",{className:"input-name"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Title",onChange:function(t){e.changeNameNote(t)},value:o})),r.a.createElement("div",{className:"input-content"},r.a.createElement("textarea",{className:"form-control ",placeholder:"Content",onChange:function(t){e.changeContentNote(t)},defaultValue:c})),r.a.createElement("div",{className:"buttom-note"},r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.saveNote()}},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return i()}},"Cancel"),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return s(a)}},"Delete"))))}}]),t}(o.Component)),D=Object(N.b)(function(e){return e},a)(x),R=(n(32),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={author_comment:"",content_comment:"",visibleCommentPanel:!1,error:!1},n.changeContentComment=function(e){n.setState({content_comment:e.target.value})},n.changeAuthorComment=function(e){n.setState({author_comment:e.target.value})},n.saveComment=function(){if(2!==n.state.author_comment.split(" ").length||n.state.content_comment.length<1)n.setState({error:!0});else{var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,o=e.getDate(),r="".concat(o,"-").concat(a,"-").concat(t),c=n.state.author_comment.split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(" "),l={idCurrentNote:n.props.currentNote.id,content_comment:n.state.content_comment,createDate:r,author_comment:c};n.props.addComment(l),n.setState({visibleCommentPanel:!1,error:!1,author_comment:"",content_comment:""})}},n.showAddComment=function(){n.setState({visibleCommentPanel:!0})},n.closeCommentPanel=function(){n.setState({visibleCommentPanel:!1,error:!1,author_comment:"",content_comment:""})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.error,a=t.author_comment,o=t.content_comment,c=t.visibleCommentPanel,l=this.props,i=l.comments,s=l.currentNote,u=l.edidCurrentNote,m=l.hideCurrentNote,d=r.a.createElement("div",{className:"button-add-comment"},r.a.createElement("button",{type:"button",className:"btn btn-info",onClick:function(){e.showAddComment()}},"Add Comment")),N=r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"form-control input-name-comment",placeholder:"Ivan Ivanov",value:a,onChange:function(t){e.changeAuthorComment(t)}}),r.a.createElement("textarea",{type:"text",className:"form-control input-content-comment",placeholder:"Leave your comment...",value:o,onChange:function(t){e.changeContentComment(t)}})),r.a.createElement("div",{className:"btn-comments"},r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){e.closeCommentPanel()}},"Cancel"),r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.saveComment()}},"Comment"))),b=c?N:d,v=n?r.a.createElement("div",{className:"error"},"Fill in both fields! ( Author : Ivan Ivanov )"):null,p=i.filter(function(e){return e.idCurrentNote===s.id}).map(function(e){return r.a.createElement("div",{key:e.id,className:"item-comment"},r.a.createElement("div",null,r.a.createElement("span",{className:"author"},e.author_comment)," ",r.a.createElement("span",{className:"create-date"},e.createDate)),r.a.createElement("div",{className:"content"},e.content_comment))}).reverse();return r.a.createElement("div",{className:"wrapper-current-note"},r.a.createElement("div",{className:"current-note"},r.a.createElement("div",{className:"note"},r.a.createElement("div",{className:"box-note"},r.a.createElement("div",{className:"name-note"},s.name),r.a.createElement("hr",null),r.a.createElement("div",{className:"content-note"},s.content)),r.a.createElement("div",{className:"btn-view-note"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-edit",onClick:function(){return u()}},"Edit"),r.a.createElement("button",{type:"button",className:"btn btn-danger btn-close",onClick:function(){return m()}},"Close"))),r.a.createElement("div",{className:"note-comments"},r.a.createElement("hr",null),v,b,r.a.createElement("div",{className:"list-comment"},p))))}}]),t}(o.Component)),F=Object(N.b)(function(e){return e},a)(R),M=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visibleCurrentNote,n=e.visibleAddNewNote,a=e.visibleEditNewNote,o=t?r.a.createElement(F,null):r.a.createElement(I,null),c=n?r.a.createElement(k,null):null,l=a?r.a.createElement(D,null):null;return r.a.createElement("div",{className:"container"},c,l,o)}}]),t}(o.Component),P=Object(N.b)(function(e){return e},a)(M),W=n(12),H=n(10),V=n(8),U={notes:[],comments:[],visibleCurrentNote:!1,visibleAddNewNote:!1,visibleEditNewNote:!1,lastId:0,currentNote:{}},J=function(e){return e+1};var L=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),B=Object(W.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:var n=t.payload,a=J(e.lastId);return n.id=a,Object(V.a)({},e,{lastId:a,comments:[].concat(Object(H.a)(e.comments),[t.payload])});case v:return Object(V.a)({},e,{visibleCurrentNote:!0,currentNote:t.payload});case f:return Object(V.a)({},e,{visibleAddNewNote:!0});case p:return Object(V.a)({},e,{visibleAddNewNote:!1,visibleCurrentNote:!1,visibleEditNewNote:!1});case E:return Object(V.a)({},e,{visibleEditNewNote:!0});case b:var o=t.payload.id;if(o){var r=e.notes.findIndex(function(e){return e.id===o}),c={id:e.notes[r].id,name:t.payload.name,content:t.payload.content};return Object(V.a)({},e,{visibleAddNewNote:!1,visibleEditNewNote:!1,currentNote:c,notes:[].concat(Object(H.a)(e.notes.slice(0,r)),[c],Object(H.a)(e.notes.slice(r+1)))})}var l=t.payload;return l.id=J(e.lastId),Object(V.a)({},e,{lastId:J(e.lastId),visibleAddNewNote:!1,visibleEditNewNote:!1,visibleCurrentNote:!1,notes:[].concat(Object(H.a)(e.notes),[l])});case h:var i=t.payload,s=e.notes.findIndex(function(e){return e.id===i}),u=e.comments.filter(function(e){return e.idCurrentNote!==i});return Object(V.a)({},e,{comments:u,visibleAddNewNote:!1,visibleEditNewNote:!1,visibleCurrentNote:!1,notes:[].concat(Object(H.a)(e.notes.slice(0,s)),Object(H.a)(e.notes.slice(s+1)))});default:return e}},L);B.subscribe(function(){!function(e,t){var n,a,o=!1}(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}(B.getState())},1e3)}),l.a.render(r.a.createElement(N.a,{store:B},r.a.createElement(P,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.30835565.chunk.js.map
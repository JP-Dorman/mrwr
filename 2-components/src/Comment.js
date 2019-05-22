// Import the React and ReactDOM libraries
import React from 'react';


const CommentCss = {
  display: 'flex',
  flexFlow: 'row nowrap',
  marginBottom: '20px 20px 0 20px'
}

const avatarCss = {
  width: '50px',
  height: '50px',
  borderRadius: '4px',
  marginRight: '10px'
}

const commentHeaderCss = {
  display: 'flex',
  alignItems: 'flex-end'
}

const authorCss = {
  fontSize: '16px',
  marginRight: '5px'
}

const metadataCss = {
  color: '#aaa',
  fontSize: '14px'
}



const Comment = (props) => {
  return(
    <div className="Comment" style={CommentCss}>

      {/* Image */}
      <a href="https://www.google.co.uk" className="avatar">
        <img style={avatarCss} src={props.avatar} alt="avatar" />
      </a>


      <div className="content">
        {/* Comment Header */}
        <div className="comment-header" style={commentHeaderCss}>
          <a href="https://www.google.co.uk" className="author" style={authorCss}>
            {props.name}
          </a>
          <div className="metadata" style={metadataCss}>
            <span className="date">{props.dateTime.toString()}</span>
          </div>
        </div>

        {/* Comment Body */}
        <div className="comment-body">
          {props.content}
        </div>
      </div>
    </div>
  );
}



export default Comment;

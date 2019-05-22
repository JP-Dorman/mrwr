// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';


const comments = [
  {
    name: 'Alex',
    avatar: faker.image.avatar(),
    dateTime: 'Today at 15:00',
    content: 'Great blog post!',
  },
  {
    name: 'Sam',
    avatar: faker.image.avatar(),
    dateTime: 'Yesterday at 08:00',
    content: 'Informative. Thanks.',
  },
  {
    name: 'Jane',
    avatar: faker.image.avatar(),
    dateTime: '14th Nov at 14:00',
    content: 'Looks great.',
  }
];



//========== Content ==========//
const App = () => {
  return(
    <div>
      <div id="commentList">
        {comments.map((obj, index) => {
          return(
            // Comment is now a prop of ApprovalCard
            <ApprovalCard key = {index}>
              <Comment
                name = {obj.name}
                avatar = {obj.avatar}
                dateTime = {obj.dateTime}
                content = {obj.content}
              />
            </ApprovalCard>
          );
        })}
      </div>
      <ApprovalCard>This is an example of plain text usage</ApprovalCard>
    </div>
  );
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

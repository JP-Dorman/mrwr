// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const buttonStyle = {
  backgroundColor: 'red',
  color: '#fff',
  border: '1px solid blue'
}


// Objects cannot be used for text, but we can use their children values
const buttonText = {text: 'Hi There'};
// const buttonText = 'Hi There';
// const buttonText = ['Hi ', 'There'];


// Create a react component
const App = () => {
  return(
    <div>
      <label className="label" htmlFor="name">Enter Name:</label>
      <input id="name" type="text" />
      <button style={buttonStyle}>{buttonText.text}</button>
    </div>
  );
}


// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

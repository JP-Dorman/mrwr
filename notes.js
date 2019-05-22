// Aaaaalways use super and pass it props in the constructor
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beep: 1,
      boop: 'foo',
    }
  }
}




// Code in the render method will work but since render() gets called almost constantly - we DO NOT want to put code there as it will slow EVERYTHING down.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render()  {
    console.log('THIS IS A BAD IDEA');
    return(
      <div>Yo</div>
    )
  }
}



// Component lifecycle methods
/*  - Constructor
    - Render
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount
*/




// A nicer way of setting default props to a component
import React from 'react';

const Loader = (props) => {

  return(
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  )
}

Loader.defaultProps = {
  message: 'Loading..'
}

export default Loader;





// Important react props - onChange, onClick, onSubmit


// Arrow functions automatically bind 'this' for all the code inside them
// If you don't want to do that for every usage of the function, invoke it with (e) => this.myFuncName(e) instead where you DO want to bind 'this' (e if you're passing event)






// In es2015, if keys and values are identical, we can just write the value
this.setState({ spans });




// We can destructure out the props by referencing an object and grabbing the child elements directly. This stops us having to say props.video all over the place
import React from 'react';

const VideoItem = ({ video }) => {
  return(
    <div className="video-item">
      video item
    </div>
  );
}

export default VideoItem;




// With objects and arrays,'===' does not compare values - it checks if they are literally the same object / array in memory
const myNumbers = [1,2,3];
myNumbers === [1,2,3] ? true : false;   // false
// they are different arrays in memory with the same value




// In a redux reducer - never ever return the state argument unless you're doing nothing to it

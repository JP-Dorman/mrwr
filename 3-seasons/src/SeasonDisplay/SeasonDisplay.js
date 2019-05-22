import React from 'react';
import './SeasonDisplay.css'

// Config
const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Brr it\'s cold',
    iconName: 'snowflake'
  }
}


// The component
const SeasonDisplay = (props) => {
  const hemisphere = props.latitude >= 0 ? 'N' : 'S';
  const month = new Date().getMonth();
  const season = getSeason();
  const {text, iconName} = seasonConfig[season];

  // Return 'summer' or 'winter' based on the current hemisphere / month
  function getSeason() {
    if (hemisphere === 'N') {
      return month >= 3 && month <=8 ? 'summer' : 'winter';
    } else {
      return month >= 3 && month <=8 ? 'winter' : 'summer';
    }
  }


  return(
    <div id="season-display" className={season}>
      <i className={`massive ${iconName} icon icon-left`}></i>
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon icon-right`}></i>
    </div>
  )
}

export default SeasonDisplay;

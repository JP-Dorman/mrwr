import React from 'react';

import LanguageContext from '../../contexts/LanguageContext';
import ColourContext from '../../contexts/ColourContext';


class Button extends React.Component {
  renderLanguage(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(colourValue) {
    return(
      <button className={`ui button ${colourValue}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderLanguage(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return(
      <ColourContext.Consumer>
        {(colourValue) => this.renderButton(colourValue)}
      </ColourContext.Consumer>
    );
  }
}

export default Button;

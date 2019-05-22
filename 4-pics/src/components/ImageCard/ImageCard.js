import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    }

    this.imageRef = React.createRef();
  }

  /*========== Functions ==========*/
  componentDidMount = () => {
    // listen for the image loading then fire setSpans()
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10) + 1;

    // In ES2015, if keys and values are identical, we can just write the value
    this.setState({ spans });
  }


  /*========== Render ==========*/
  render() {
    const { description, urls } = this.props.image;


    return(
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

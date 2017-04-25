// Any JS in here is automatically ran for us

// Import React Library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';




// Create a component
class App extends Component {
  //Special method
  constructor(props) {
      super(props);

      //Initalize state object
      this.state = {images:[]};
  }

  componentWillMount() {
    // Fantastic place to load data!
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then( response => this.setState({ images:response.data.data }))
      .catch( (error) => {
        console.log(error);
      });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

// Render this component to the screen
Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));


});

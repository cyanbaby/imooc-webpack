import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends Component {


  componentDidMount() {
    axios.get('/app/mock/235740/react/api/header.json').then((res) => {
        console.log(res.data);
      })
  }

	render() {
		return <div>Hello World</div>
	}
}

ReactDom.render(<App />, document.getElementById('root'));

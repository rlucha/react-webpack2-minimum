import React, { Component } from "react";
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
		return <div className="App">Hello world</div>;
	}
}

ReactDOM.render(<App/>, document.querySelector('#app'));

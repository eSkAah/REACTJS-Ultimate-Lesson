import React, { Component } from 'react';
import './App.css';
import Mycars from "./Components/Mycars";


class App extends Component {

    state = {
        title: 'Mon catalogue Voiture'
    }

    changeTitle = (e:any) => {
        console.log(e.target);
        this.setState({
            title:"Title via Fonction"
        })
    }

    changeViaParam = (title:string) => {
        this.setState({
            title: title
        })
    }

    changeViaBind = (param:string) => {
        this.setState({
            title: param
        })
    }



  render(){
      return(
          <div className="App">
            <header className="App-header">
                <Mycars title={this.state.title} />
                <button onClick={this.changeTitle}>ChangeName</button>
                <button onClick={() => this.changeViaParam('Title via Param')}>Change Param</button>
                <button onClick={this.changeViaBind.bind(this, 'Title via Bind')}>Change Bind</button>

            </header>
          </div>
      );
  }

}

export default App;

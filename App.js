import React from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      users:null
    }
  }
  componentDidMount(){
    fetch('https://reqres.in/api/users').then((resp)=>{
      resp.json().then((result)=>{
        // console.warn(result.data)
        this.setState({users:result.data})
      })
    })
  }
  render(){
    return(
      <div className="App-header">
        <h1>
          Fetch API data
        </h1>
        {
          this.state.users ?
          this.state.users.map((item,i)=>
          <div><p>{i}--- {item.first_name} {item.last_name} {item.email}</p></div>
          )
          :
          null
        }
      </div>
    );
  }
}

export default App;

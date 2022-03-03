import React from 'react';
import ReactDOM from 'react-dom';

class Lifecycle extends React.Component
{
  constructor()
  {
    super();
    this.state={value:"Welcome"};
  }
  componentWillMount() 
  {
    alert("Hello");
  }
  render(){
    return <div>
      <h1>{this.state.value}</h1>
      <button type="button" onClick={this.changevalue}> Submit </button>
      <button type="button" onClick={this.deleteheadder}> Delete </button>

      </div>
  }
  changevalue = ()=>
  {
    this.setState({value:"Thank you for submitting"});
  }
  deleteheadder =()=>
  {
    this.setState({value:false});
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({value:"Thank You"})},5000)  
  }
  componentWillUpdate(){
    alert("Do you want to update");
  }
  //componentDidUpdate(){
    //document.getElementById('mydiv').innerHTML="New Value Updated Succeffuly";
  //}
  //shouldComponentUpdate(){
    //return false;
  //}
  componentWillUnmount(){
    alert("Header Deleted");
  }
}
ReactDOM.render(<Lifecycle/>,document.getElementById('root'));



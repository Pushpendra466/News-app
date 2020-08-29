import React from 'react';
import './App.css';
import THselection from './component/THselection';
import TopHeadline from './component/TopHeadlines';
import Query from './component/Query';

class App extends React.Component {
constructor(props){
  super(props);
  this.state=({
    flag:false,
    country:'in',
    category:'general',
    q:''
  })
  this.handleSearch = this.handleSearch.bind(this);
  this.handleCountry = this.handleCountry.bind(this);
  this.handleCategory = this.handleCategory.bind(this);
}

handleSearch(val){
  this.setState({
    q:val,
    flag:true
  })
}

handleCountry(val){
  this.setState({
    country:val,
    flag:false
  });
}
handleCategory(val){
  this.setState({
    category:val,
    flag:false
  });
}

handleHom = ()=>{
  this.setState({
    flag:false
  })
}
  render(){
  if(!this.state.flag)
  {
    return (
      <div>
      <THselection handleChangeC={this.handleCountry} handleChangeCat={this.handleCategory} handleQuerySubmit={this.handleSearch} handleHm={this.handleHom}/>
      <TopHeadline country={this.state.country} category={this.state.category}/>
      </div>
    );
  }
else 
  {return (
    <div>
    <THselection handleChangeC={this.handleCountry} handleChangeCat={this.handleCategory} handleQuerySubmit={this.handleSearch} handleHm={this.handleHom}/>
    <Query q={this.state.q}/>
    </div>);
  }

}


}

export default App;

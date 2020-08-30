import React from 'react';
import Newscard from './News-card';
const apiKey = 'a9814ac2dd464010b03fefa6f969132d';
let pageSize = '100';
class Query extends React.Component {

    constructor(props){
        super(props);
        this.state={
            news:[],
            startDate:new Date(),
            sd:'',
            ed: '',
            sortBy:'publishedAt',
            q:'',
        }
        
    }    
    
    componentDidMount(){   
      if(this.props.q!=='')
  {let url = 'https://cors-anywhere.herokuapp.com/'+'https://newsapi.org/v2/everything?'+'qInTitle='+this.props.q+
  '&' +'pageSize='+pageSize+'&'+'apiKey='+apiKey;
  let req = new Request(url);
  fetch(req)
  .then(response => response.json())
  .then((news) => {
    this.setState({
      isLoaded: true,
      news: news.articles,
      q:this.props.q
    })
  })
  .catch(error => {
    console.log(error);
  });}
  }

componentDidUpdate(prevProps,prevState){
    if(this.props.q!==''){
if(prevProps.q!==this.props.q)
{let url = 'https://cors-anywhere.herokuapp.com/'+'https://newsapi.org/v2/everything?'+'qInTitle='+this.props.q+
'&' +'pageSize='+pageSize+'&'+'apiKey='+apiKey;
let req = new Request(url);
fetch(req)
.then(response => response.json())
.then((news) => {
  this.setState({
    isLoaded: true,
    news: news.articles,
    q:this.props.q
  })
})
.catch(error => {
  console.log(error);
});

}}
}

newsArrayWithDate(){
  // if(this.state.sd!==''&this.state.ed!=='')
  {let url = 'https://cors-anywhere.herokuapp.com/'+'https://newsapi.org/v2/everything?'+'qInTitle='+this.state.q+
  '&'+'from='+ this.state.sd +'&'+'to='+this.state.ed+'&'+'sortBy='+this.state.sortBy+'&'+'pageSize='+pageSize+'&'+'apiKey='+apiKey;
  let req = new Request(url);
  fetch(req)
  .then(response => response.json())
  .then((news) => {
    this.setState({
      isLoaded: true,
      news: news.articles,
    })
  })
  .catch(error => {
    console.log(error);
  });}
}

handleChangeStartDate=(event)=>{
this.setState({
  sd:event.target.value
})
}

handleChangeEndDate = (event)=>{
  this.setState({
    ed:event.target.value
  })
}

handleDateSubmit(){
  this.newsArrayWithDate();
}

handleChangeSortBy(event){
  this.setState({
    sortBy:event.target.value
  })
  this.newsArrayWithDate();
}

 convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}
convertMin(str){
  var m = str.getMonth()+1;
  if(m!==1)
  {var date = new Date(str),
    mnth = ("0" + (date.getMonth() )).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");}
  else{
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() )).slice(-2),
    day = ("0" + date.getDate()).slice(-2),
    yr = date.getFullYear()-1;
  return [yr, mnth, day].join("-");
  }
}
    render(){
        return (<div >
          <h1 className="mt5">Search Results for {this.props.q} :</h1>
          <div >
          <p className = ' dib pa2'>From</p>
          <input type="date" 
          className="browser-default custom-select col-md-2 offset-md-0"
          value={this.state.sd}
          min={this.convertMin(this.state.startDate)} max={this.convert(this.state.startDate)}
          onChange={this.handleChangeStartDate} 
          />
          <p className = ' dib pa2 '>To</p>
          <input type="date"
          className="browser-default custom-select col-md-2 offset-md-0"
          value={this.state.ed}
          min={this.convertMin(this.state.startDate)} max={this.convert(this.state.startDate)}
          onChange={this.handleChangeEndDate}
          />
        <div className="pa2 dib"><button className = 'f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray dib' onClick={()=>this.handleDateSubmit()}>OK</button></div>
          
       
          <p className = ' dib pa2 pl6'>Sort By : </p>
          <select className="browser-default custom-select col-md-2 offset-md-0" value={this.state.sortBy} onChange={(e)=>this.handleChangeSortBy(e)}>
           <option value="publishedAt"> publishedAt</option>
           <option value="popularity"> popularity</option>
           <option value="grelevancy"> relevancy</option>
           </select>
           </div>
            <Newscard news={this.state.news} />
            </div> );

    }
}
export default Query;

import React from 'react';
import Newscard from './News-card';
const apiKey = 'a9814ac2dd464010b03fefa6f969132d';
let pageSize = '100'; //max is 100 default is 20

class TopHeadline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
          news: [],
        };
      }
      
     componentDidMount()
    {
      let ct=this.props.country;
      let cat=this.props.category;
      // eslint-disable-next-line
    let url = 'https://cors-anywhere.herokuapp.com/'+'https://newsapi.org/v2/top-headlines?' +'country='+ct+'&category='+cat+
    '&' +'pageSize='+pageSize+'&'+'apiKey='+apiKey;
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



    componentDidUpdate(prevProps, prevState) {
        // check whether client has changed
        if (prevProps.country !== this.props.country || prevProps.category!==this.props.category) {
          let cat=this.props.category;
          let ct=this.props.country;
          // eslint-disable-next-line
        let url = 'https://cors-anywhere.herokuapp.com/'+'https://newsapi.org/v2/top-headlines?'+'country='+ct+'&category='+cat+
        '&'+'pageSize='+pageSize+'&'+'apiKey='+apiKey;
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
        });




        }
      }


    render(){
  
        const { isLoaded, news } = this.state;
        if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div>
            
            <h1 className="mt5">Top Headlines</h1>
            
            <Newscard news={news} />
            
            </div>
          );
        }
    
    }

}

export default TopHeadline;

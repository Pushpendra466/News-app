import React from 'react';
import Card from './Card';

function Newscard (props){
     let list = props.news.map(news => (
       <Card title={news.title} description={news.description} image={news.urlToImage} url={news.url} publishedAt={news.publishedAt} content={news.content}/>
      ))
   return <div className="tc center">{list}</div>;
}
export default Newscard;
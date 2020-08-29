import React from 'react';
import { ExternalLink } from 'react-external-link';
function Card (props){
return(
    <div className = 'tc bg-white mw7 dib br3 pa3 ma2 '>
    <img src={props.image} alt="" className="w-100 db"/>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <p>{props.publishedAt}</p>
    <ExternalLink href={props.url}>
    <span>For more detail Click here</span>
    </ExternalLink>
    </div>
)
}
export default Card;
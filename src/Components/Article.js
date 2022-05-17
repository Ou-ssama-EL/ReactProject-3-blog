import React from "react";

const Article = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <img src= {props.image} />
            <p>
               {props.content}
            </p>
        </div>
    )
}

export default Article;


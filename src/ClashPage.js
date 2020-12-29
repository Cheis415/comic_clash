import React from "react";

function ClashPage(props) {
  return (
    <div className="ClashPage">
      <span>
        <h3>{props.name1}</h3>
        <img src={props.image1}></img>
        <h3>{props.name2}</h3>
        <img src={props.image2}></img>
      </span>
      <p><b>{props.description}</b></p>
      <p>{props.body}</p>
    </div>
  )
}

export default ClashPage;
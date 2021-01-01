import React from "react";
import ClashForm from "./ClashForm"

function ClashPage({ formData, resp, resp2 }) {

  console.log("RESPONSE---->", resp)
  console.log("RESPONSE---->", resp2)
  return (

    <div className="ClashPage">
      {resp && resp2 ?
        <div>
          <span>
            <h3>{resp.data.results[0].name}</h3>
            <img src={resp.data.results[0].image}></img>
          </span>
          <span>
            <h3>{resp2.data.results[0].name}</h3>
            <img src={resp2.data.results[0].image}></img>
          </span>
          <p><b>{formData.description}</b></p>
          <p>{formData.body}</p>
        </div>
        :
        <div>
          <span>No Heroes have been selected!</span>
          <div />
        </div>}

    </div>
  )
}

export default ClashPage;
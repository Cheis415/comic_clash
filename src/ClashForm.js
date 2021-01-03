import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import ComicApi from "./api.js";
import ClashPage from "./ClashPage"
import versus from "./vs.jpg";
import "./ClashForm.css"

function ClashForm() {

  const history = useHistory();

  const [resp, setResp] = useState({});
  const [resp2, setResp2] = useState({});
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name1: "",
    name2: "",
    description: "",
    body: ""
  });

  function handleChange(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    try {
      evt.preventDefault();
      let response;
      let response2;
      const API = new ComicApi();
      const API_2 = new ComicApi();
      await API.getCharacter(formData.name).then(
        resp => {
          let resArr = resp.data.results
          for (let i = 0; i < resArr.length; i++) {
            console.log('???????',resArr[i].name)
            if (resArr[i].name.toString() === formData.name.toString()) {
              console.log('!!!!!!!!!!',formData.name.toString())
              response = resp;
              resp = resp.data.results[i];
              console.log("COMPONENT RESPONSE2-->", resp2);
              setResp({ resp });
              setLoading(false);
            }
          }
        });
      await API_2.getCharacter(formData.name2).then(
        resp2 => {
          let resArr = resp2.data.results
          for (let j = 0; j < resArr.length; j++) {
            console.log('???????',resArr[j].name)
            if (resArr[j].name.toString() === formData.name2.toString()) {
              console.log('!!!!!!!!!!',formData.name2.toString())
              response2 = resp2;
              resp2 = resp2.data.results[j];
              console.log("COMPONENT RESPONSE2-->", resp2);
              setResp2({ resp2 });
              setLoading(false);
              setFormData({ name1: formData.name1, name2: formData.name2, description: formData.description, body: formData.body });
            }
          }
         
        }
      );
    } catch (e) {
      console.log("ERROR HERE---> ", e);
    } finally {
      console.log("FINALLY")
    }
  }
  if (loading) return "Loading..."

  return (
    <div>
      {Object.keys(resp).length === 0 || Object.keys(resp2).length === 0 ?
        <div className="formContainer">
          <span>
            <img src={formData.image1}></img>
          </span>
          <form className="clashForm" onSubmit={handleSubmit}>
            <label> Enter your first Character
          <input
                placeholder="character search"
                id="name"
                onChange={handleChange}
                name="name"
                value={formData.name}
              />
            </label>
            <label> Enter your second Character
          <input
                placeholder="character search"
                id="name2"
                onChange={handleChange}
                name="name2"
                value={formData.name2}
              />
            </label>
            <label> Enter the description of the Clash
          <input
                placeholder="description"
                id="description"
                onChange={handleChange}
                name="description"
                value={formData.description}
              />
            </label>
            <label>
              <textarea
                placeholder="body"
                id="body"
                onChange={handleChange}
                name="body"
                value={formData.body}
              />
            </label>
            <button className="btn">Submit</button>
          </form>
        </div>
        :
        <div ><h1 className="vs">VS.</h1>{console.log({resp, resp2})}
          <span className="player1">
            <h3>{resp.resp.name}</h3>
            <img src={resp.resp.image.url}></img>
            <h3>Power stats</h3>
            <ul>
              <li>combat: {resp.resp.powerstats.combat}</li>
              <li>durabilty: {resp.resp.powerstats.durability}</li>
              <li>intelligence: {resp.resp.powerstats.intelligence}</li>
              <li>power: {resp.resp.powerstats.power}</li>
              <li>speed: {resp.resp.powerstats.speed}</li>
              <li>strength: {resp.resp.powerstats.strength}</li>
            </ul>
            <div className="line-block"></div>
            <div className="clash_body">
            <p><b>CLASH BREAKDOWN: {formData.body}</b></p>
            </div>
          </span>
          <span className="player2">
            <h3>{resp2.resp2.name}</h3>
            <img src={resp2.resp2.image.url} ></img>
            <h3>Power stats</h3>
            <ul>
              <li>combat: {resp2.resp2.powerstats.combat}</li>
              <li>durabilty: {resp2.resp2.powerstats.durability}</li>
              <li>intelligence: {resp2.resp2.powerstats.intelligence}</li>
              <li>power: {resp2.resp2.powerstats.power}</li>
              <li>speed: {resp2.resp2.powerstats.speed}</li>
              <li>strength: {resp2.resp2.powerstats.strength}</li>
            </ul>
            <div className="line-block"></div>
            <div className="clash_body">
      <p><b>CLASH DESCRIPTION: {formData.description}</b></p>
     
      
      </div>
          </span>
   
          
        </div>
       
      }
     

    </div>
  );
}

export default ClashForm;
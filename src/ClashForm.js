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
          setLoading(true);
          response = resp;
          console.log("COMPONENT RESPONSE-->", resp);
          setResp({ resp: resp });
        });
      await API_2.getCharacter(formData.name2).then(
        resp2 => {
          response2 = resp2;
          setResp2({ resp2: resp2 });
          setLoading(false);
          setFormData({ name1: formData.name1, name2: formData.name2, description: formData.description, body: formData.body });
        }
      );
    } catch (e) {
      console.log("ERROR HERE---> ", e);
    } finally {
      console.log("FINALLY")
    }
  }

  return (
    <div>
      {Object.keys(resp).length === 0 || Object.keys(resp2).length === 0 ?
        <div className="formContainer">
          <span>
            <img src={formData.image1}></img>
            <img></img>
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
            <h3>{resp.resp.data.results[0].name}</h3>
            <img src={resp.resp.data.results[0].image.url}></img>
          </span>
          <span className="player2">
            <h3>{resp2.resp2.data.results[0].name}</h3>
            <img src={resp2.resp2.data.results[0].image.url} ></img>
          </span>
          <div className="battle">
          <p><b>CLASH DESCRIPTION: {formData.description}</b></p>
          <p>CLASH BREAKDOWN: {formData.body}</p>
          </div>
        </div>
        
      }
    </div>
  );
}

export default ClashForm;
import React, { useState } from "react";
import ComicApi from "./api.js";


function Profile() {
  
  const [formData, setFormData] = useState({
    name: "",
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

  async function handleSubmit(evt, name) {
    try {
    evt.preventDefault();
    let name = "Wolverine"
    const resp = await ComicApi.getName(name);
    console.log("API RESPONSE-->", resp);
    console.log("DATA--->", resp.results)
    } catch (e) {
      console.log("ERROR HERE---> ", e)
    } finally {
      setFormData({ name: "", name2: "", description: "", body: "" });
    }
  }

  return (
    <div>
      <form className="clashForm">
        <label> Enter your first Character
          <input
            placeholder="character search"
            id="name"
            onChange={handleChange}
            name="name"
            value={formData.name}
            required/>
        </label>
        <label> Enter your second Character
          <input
            placeholder="character search"
            id="name2"
            onChange={handleChange}
            name="name2"
            value={formData.name2}
            required />
        </label>
        <label> Enter the description of the Clash
          <input
            placeholder="description"
            id="description"
            onChange={handleChange}
            name="description"
            value={formData.description}
            required />
        </label>
        <label>
          <textarea
            placeholder="body"
            id="body"
            onChange={handleChange}
            name="body"
            value={formData.body}
            required />
        </label>
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Profile;
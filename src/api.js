import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

// https://superheroapi.com/api/

class ComicApi {

  // the token for interactive with the API will be stored here.
  token;

  request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `/${endpoint}`;
    // const headers = { Authorization: `Bearer ${ComicApi.token}` };
    const params = (method === "get")
      ? { format: 'json', ...data }
      : {};

    try {
      console.log("PARAMS--->", params)
      console.log("URL-->", url)
     return axios.get(url, { params }).then(resp => { console.log(resp); return resp });
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  async getCharacter(name) {
    let res = await this.request("api", { name });
    console.log(res)
    return res;
  }
}


export default ComicApi;
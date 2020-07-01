import axios from 'axios';
import { authenticate } from '../util/helpers';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

class BaseApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = authenticate();

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `${BACKEND_URL}/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

}


export default BaseApi;
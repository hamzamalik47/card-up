// common business logic related util methods
import axios from "axios";
import { baseUri } from "../config/config";

axios.defaults.headers.post["Content-Type"] = "application/json";

const _url = "https://cors-anywhere.herokuapp.com/";
export async function invokeApi({
  path,
  method = "GET",
  headers = {},
  queryParams = {},
  postData = {},
}) {
  const reqObj = {
    method,
    url: baseUri + path,
    headers,
  };

  console.log(baseUri, "baseUri");
  reqObj.params = queryParams;

  if (method === "POST") {
    reqObj.data = postData;
  }
  if (method === "PUT") {
    reqObj.data = postData;
  }
  if (method === "DELETE") {
    reqObj.data = postData;
  }

  let results;

  console.log("<===REQUEST-OBJECT===>", reqObj);

  try {
    results = await axios(reqObj);
    // console.log("<===Api-Success-Result===>", results);
    console.log(results.data, "--API SUCCESS");
    return results.data;
  } catch (error) {
    // console.log("<===Api-Error===>", error.response.data);
    console.log(error.response, "--API ERROR");

    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
    }

    return {
      code: error.response.status,
      message: error.response.data.message ? error.response.data.message : "",
    };
  }
}

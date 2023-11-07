import { api_key } from "../../config/config";
import { invokeApi } from "../../bl_libs/invokeApi";

export const _get_website_page = async (data) => {
  const requestObj = {
    path: `app/get_website_page`,
    method: "POST",
    headers: {
      "x-auth-api-key": api_key,
    },
    postData: data,
  };
  return invokeApi(requestObj);
}; // examples

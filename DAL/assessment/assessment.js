import { api_key } from "../../config/config";
import { invokeApi } from "../../bl_libs/invokeApi";

export const _set_sale_page_question = async (data) => {
  const requestObj = {
    path: `app/set_sale_page_question`,
    method: "POST",
    headers: {
      "x-auth-api-key": api_key,
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

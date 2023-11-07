import { api_key } from "../../config/config";
import { invokeApi } from "../../bl_libs/invokeApi";

export const get_site_setting = async () => {
  const requestObj = {
    path: `api/site_setting/get_site_setting_for_web`,
    method: "GET",
    headers: {
      "x-auth-api-key": api_key,
    },
  };
  return invokeApi(requestObj);
};

const _get_user_from_localStorage = () => {
  const user_profile = localStorage.getItem("user");
  if (
    user_profile &&
    user_profile !== undefined &&
    user_profile !== "undefined" &&
    user_profile !== null
  ) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return {};
  }
};

const _set_user_in_localStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const _set_token_in_localStorage = (token) => {
  localStorage.setItem("token", token);
};

const _get_token_from_localStorage = () => {
  return localStorage.getItem("token");
};

const _get_content_setting_localStorage = () => {
  return JSON.parse(localStorage.getItem("content_setting"));
};
const _get_client_dashboard_setting_localStorage = () => {
  return JSON.parse(localStorage.getItem("client_dashboard_setting"));
};
const _get_testmonial_localStorage = () => {
  return JSON.parse(localStorage.getItem("testmonial"));
};
const _get_home_event_localStorage = () => {
  return JSON.parse(localStorage.getItem("home_event"));
};
const _get_admin_time_zone_localStorage = () => {
  return JSON.parse(localStorage.getItem("admin_time_zone"));
};
const get_project_info_localStorage = () => {
  return JSON.parse(localStorage.getItem("project_info"));
};
const get_consultant_data_localStorage = () => {
  return JSON.parse(localStorage.getItem("consultant_data"));
};
const _get_navbar_list_localStorage = () => {
  return JSON.parse(localStorage.getItem("navbar_list"));
};
const _get_is_seen_video_localStorage = () => {
  return localStorage.getItem("is_seen_video");
};
module.exports = {
  _get_user_from_localStorage,
  _set_user_in_localStorage,
  _get_content_setting_localStorage,
  _get_client_dashboard_setting_localStorage,
  _get_testmonial_localStorage,
  _get_home_event_localStorage,
  _get_admin_time_zone_localStorage,
  get_project_info_localStorage,
  get_consultant_data_localStorage,
  _get_navbar_list_localStorage,
  _get_is_seen_video_localStorage,
  _set_token_in_localStorage,
  _get_token_from_localStorage,
};

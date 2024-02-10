const axios = require("axios");

//get service
const AxiosGetService = async (url, token="25c243d486661d197396722471d12eb99332d178") => {
  let headers = {
    // "Content-Type": "multipart/form-data",
    headers: { Authorization: "Token " + token },
  };

  const promise = axios.get(url, headers);
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

//post service
const AxiosPostService = async (
  url,
  data,
  auth_type = true,
  is_open_url = false
) => {
  // let headers = {
  //   "Content-Type": "multipart/form-data",
  //   // headers: auth,
  // };

  let headers = {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    Cookie: "Cookie_1=value",
    // headers: { Authorization: authorization_type + token },
  };

  const promise = axios.post(url, data, headers);
  const dataPromise = promise.then((response) => response);

  return dataPromise;
};

// End of post

//put request
const AxiosPutService = async (url, data) => {
  let headers = {
    "Content-Type": "multipart/form-data",
    // headers: { Authorization: authorization_type + token },
  };

  // console.log(data);
  const promise = axios.put(url, data, headers);
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

//delete request
const AxiosDeleteService = async (url) => {
  let headers = {
    "Content-Type": "multipart/form-data",
    // headers: { Authorization: authorization_type + token },
  };
  const promise = axios.delete(url, headers);
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

export {
  AxiosGetService,
  AxiosPostService,
  AxiosPutService,
  AxiosDeleteService,
};

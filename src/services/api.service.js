import axios from 'axios';

class ApiService {
  server = 'http://10.112.218.35:8091/api/';

  get = url => {
    let _url = this.generateUrl(url);
    console.log(_url);
    return axios.get(_url);
  };

  post = (url, data) => {
    let _url = this.generateUrl(url);
    return axios.post(_url, data);
  };

  generateUrl = url => {
    return this.server + url;
  };
}

export default ApiService;

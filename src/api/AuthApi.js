import BaseApi from './ApiHelper';


class AuthApi {
  static async login(username, password) {
    const res = await BaseApi.request('login', { username, password }, "post");
    return res.token;
  }
}


export default AuthApi;
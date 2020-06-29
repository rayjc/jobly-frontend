import BaseApi from './ApiHelper';


class UserApi {
  static async getCompanies() {
    const res = await BaseApi.request('users');
    return res.users;
  }

  static async getUser(username) {
    let res = await BaseApi.request(`users/${username}`);
    return res.user;
  }

  static async createUser(user) {
    const res = await BaseApi.request('users', user, "post");
    return res.user;
  }

  static async updateUser(username, user) {
    const res = await BaseApi.request(`users/${username}`, user, "patch");
    return res.user
  }

  static async removeUser(username) {
    const res = await BaseApi.request(`users/${username}`, "delete");
    return res.message;
  }
}


export default UserApi;
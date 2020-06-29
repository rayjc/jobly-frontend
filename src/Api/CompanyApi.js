import BaseApi from './ApiHelper';


class CompanyApi {
  static async getCompanies(query) {
    const res = await BaseApi.request('companies', query);
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await BaseApi.request(`companies/${handle}`);
    return res.company;
  }

  static async createCompany(company) {
    const res = await BaseApi.request('companies', company, "post");
    return res.company;
  }

  static async updateCompany(handle, company) {
    const res = await BaseApi.request(`companies/${handle}`, company, "patch");
    return res.company
  }

  static async removeCompany(handle) {
    const res = await BaseApi.request(`companies/${handle}`, "delete");
    return res.message;
  }
}


export default CompanyApi;
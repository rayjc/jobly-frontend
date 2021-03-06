import BaseApi from './ApiHelper';


class JobApi {
  static async getJobs(query) {
    const res = await BaseApi.request('jobs', query);
    return res.jobs;
  }

  static async getJob(id) {
    let res = await BaseApi.request(`jobs/${id}`);
    return res.job;
  }

  static async createJob(job) {
    const res = await BaseApi.request('jobs', job, "post");
    return res.job;
  }

  static async updateJob(id, job) {
    const res = await BaseApi.request(`jobs/${id}`, job, "patch");
    return res.job
  }

  static async removeJob(id) {
    const res = await BaseApi.request(`jobs/${id}`, undefined, "delete");
    return res.message;
  }

  static async applyForJob(id) {
    const res = await BaseApi.request(`jobs/${id}/apply`, undefined, "post");
    return res.message;
  }
}


export default JobApi;
// @ts-check

export class ApiClient {
  constructor(request, baseURL = 'https://demowebshop.tricentis.com') {
    this.request = request;
    this.baseURL = baseURL;
  }

  async get(route) {
    return this.request.get(new URL(route, this.baseURL).toString());
  }
}

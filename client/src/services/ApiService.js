class ApiService {
  #baseUrl;

  constructor(baseUrl = '') {
    this.#baseUrl = baseUrl;
  }

  async #get(path) {
    const res = await fetch(`${this.#baseUrl}${path}`);
    if (!res.ok) throw new Error(`API error ${res.status}: ${res.statusText}`);
    return res.json();
  }

  getProfile(lang = 'en') {
    return this.#get(`/api/profile?lang=${lang}`);
  }

  getProjects(lang = 'en') {
    return this.#get(`/api/projects?lang=${lang}`);
  }
}

export const apiService = new ApiService();

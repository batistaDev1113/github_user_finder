/// Github class
class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // get user method
  async getUser(user) {

    //headers passed
    const headers = {
      "Authorization": `Token 53a285ec9f7ddb3dd47a4ad3459bc01419003ef5`
    }
    // fetch inoput user
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    // fetch repos from user
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, {
      "method": "GET",
      "headers": headers
    });

    const profileData = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profileData,
      repos
    }
  }
}
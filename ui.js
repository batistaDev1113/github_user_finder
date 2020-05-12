// class for UI
class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // show profile on UI
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card-header text-center text-uppercase">Github Profile</div>
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2 rounded-circle" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-block btn-primary mb-4">View profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Info: ${user.following}</span>
            <br><br>
            <ul class="list-group">
            <li class="list-group-item">Company: ${user.company === null ? 'A Company has Not been registered yet!' : user.company}</li>
            <li class="list-group-item">Website/Blog:<a id="web-link" href=${user.blog}> ${user.blog === '' ? 'No website/blog has been added' : user.blog}</a></li>
            <li class="list-group-item">Location: ${user.location === null ? 'No location has been added to profile' : user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
          </div>
        </div>
        <div class="card-header text-center text-uppercase">Latest Repos</div>
        <div id="repos"></div>
      </div>
     
    
    
    
    `;
  }


  // show alert message
  showAlert(message, className) {
    // remove an yalert before adding another
    this.clearAlert();
    // create div element
    const div = document.createElement('div');
    // add classnme
    div.className = className;
    // add text Node
    div.appendChild(document.createTextNode(message));
    //get parent elem
    const container = document.querySelector('.search-container');
    //get search box
    const search = document.querySelector('.search');
    // insert alert
    container.insertBefore(div, search);

    //timeout alert after a few seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }


  // show repos from user
  showRepos(repos) {
    let output = '';

    //loop over the array
    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
            <a id="repo" href=${repo.html_url}>${repo.name}</a>         
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">:Forks ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      
      `;
    });

    // output repos to card
    document.getElementById('repos').innerHTML = output;
  }
  //clear alert to avoid repetition
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    //check if an alert is in the DOM
    if (currentAlert) {
      //remove alert if present
      currentAlert.remove();
    }
  }
  // clear profile method
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
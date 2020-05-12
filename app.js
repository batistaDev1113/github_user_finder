// instantiate github object from class
const github = new Github;

// instantiate UI object from class
const ui = new UI;

// Search input element
const searchUser = document.getElementById('searchUser');

// Search input -- add event listener
searchUser.addEventListener('keyup', (e) => {

  // keep footer at the bottom
  const foot = document.querySelector('footer');


  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // make http call
    github.getUser(userText)
      .then(data => {
        if (data.profileData.message === 'Not Found') {
          // show alert Message
          ui.showAlert('User Not Found', 'alert alert-danger');
        } else {
          //show profile data
          ui.showProfile(data.profileData);
          // show repos from user
          ui.showRepos(data.repos);
        }
      });
  } else {
    // Clear profile
    ui.clearProfile();

    //kep footer down
    //foot.style.cssText = 'position: absolute; bottom: 0; width: 100%;'
  }
});
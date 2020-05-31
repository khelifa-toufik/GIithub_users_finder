// init UI class
const ui = new UI;

// init github class
const github = new Github;

// Search input
const searchUser = document.querySelector('#searchUser');

// Search input eventListeners
searchUser.addEventListener('keyup', (e) => {

    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    ui.showAlert('User Not Found', 'alert alert-danger')
                } else {
                    //show the profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});
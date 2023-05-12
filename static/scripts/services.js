const GIT_BASE_PATH = 'https://api.github.com/users';
const GIT_REPO_PATH = 'https://api.github.com/repos/pgm-jerodeno';

function GitApi () {
  this.getUser = async (username) => {
    try {
      const response = await fetch(`${GIT_BASE_PATH}/${username}`);
      const user = await response.json();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  this.getRepos = async (username) => {
    try {
      const response = await fetch(`${GIT_BASE_PATH}/${username}/repos?page=1&per_page=50`);
      const repos = await response.json();
      return repos;
    } catch (error) {
      console.log(error);
    }
  }

  this.getLanguages = async (reponame) => {
    try {
      const response = await fetch(`${GIT_REPO_PATH}/${reponame}/languages`);
      const languages = await response.json();
      return languages;
    } catch (error) {
      console.log(error);
    }
  }
}
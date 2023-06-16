(() => {
  const app = {
    async init() {
      this.username = 'pgm-jerodeno';
      this.gitApi = new GitApi();
      this.cacheElements();
      const repos = await this.getRepos()
      this.generateHTMLForRepos(repos);
      this.generateProjectDetails(repos);
      this.closeButton();
    },
    cacheElements() {
      this.$projects = document.querySelector('.projects');
      this.$projectDetails = document.querySelector('.project-details');
      this.$projectDetailsWrapper = document.querySelector('.project-details__wrapper');
      this.$closeButton = document.querySelector('.close-button');
    },
    async getRepos() {
      let repos = await this.gitApi.getRepos('pgm-jerodeno');
      repos = repos.filter((repo) => {return repo.name !== 'pgm-jerodeno'});
      repos = repos.filter((repo) => {return repo.name !== 'portfolio'});
      return repos;
    },
    generateHTMLForRepos(repos) {
      let output = '';
      repos.forEach(async (repo) => {
        let reponame = repo.name;
        reponame = reponame.split('_');
        reponame = reponame.join(' ');
        reponame = reponame.toUpperCase();
        output += `<div class="project" data-id="${repo.id}">
          <img src="static/images/${repo.name}.png" alt="">
          <h3>${reponame}</h3>
        </div>`;
      });
      this.$projects.innerHTML = output;
    },
    async generateProjectDetails(projects) {
      console.log(projects);
      $projectsList = document.querySelectorAll('.project');      
      $projectsList.forEach((project) => {
        project.addEventListener('click', async (ev) => {
          const id = ev.currentTarget.dataset.id;
          const project = projects.find((project) => project.id == id);
          let projectname = project.name;
          projectname = projectname.split('_');
          projectname = projectname.join(' ');
          projectname = projectname.toUpperCase();
          this.$projectDetails.innerHTML = `<div class="picture"><img src="static/images/${project.name}.png" alt=""></div>
          <div class="info">
            <h3>${projectname}</h3>
            <p>${project.description}</p>
            <a href="${project.html_url}" target="blank" class="code">Bekijk de code</a>
            <a href="https://pgm-jerodeno.github.io/${project.name}/" target="blank" class="site">Bekijk de site</a>
          </div>`
          this.$projectDetailsWrapper.classList.toggle('isopen');
        })
      });
    },
    closeButton() {
      this.$closeButton.addEventListener('click', () => {
        this.$projectDetailsWrapper.classList.toggle('isopen');
      });
    },
  }
  app.init();
})()
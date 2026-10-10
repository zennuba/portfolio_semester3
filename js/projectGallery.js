class ProjectGallery {
  constructor(projects, selectedCategory = null) {
    this.projects = projects;
    this.selectedCategory = selectedCategory;
  }

  render() {
    const section = document.createElement("section");
    const heading = document.createElement("div");
    const projectList = document.createElement("div");

    heading.className = "home-section__heading";
    heading.innerHTML = `<h1>Mit arbejde</h1>`;

    // Vis hvilket filter der er valgt + vej tilbage
    if (this.selectedCategory) {
      heading.innerHTML += `
        <p>Viser: <strong>${this.selectedCategory}</strong> ·
        <a href="projects.html">Vis alle</a></p>
      `;
    }

    projectList.className = "project-list";
    this.projects.forEach((project) => projectList.append(project.render()));

    section.append(heading, projectList);
    return section;
  }
}

export { ProjectGallery };
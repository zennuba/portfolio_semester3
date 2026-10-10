class ProjectCard {
  constructor(
    title,
    description,
    team,
    category,
    caseId,
    duration,
    targetGroup,
  ) {
    this.title = title;
    this.description = description;
    this.team = team;
    this.category = category;
    this.caseId = caseId;
    this.duration = duration;
    this.targetGroup = targetGroup;
  }

  render() {
    const article = document.createElement("article");
    article.className = "project-card";

    let caseLink = "";

    if (this.caseId) {
      caseLink = `<a href="case.html?id=${this.caseId}">Se case study</a>`;
    }

    article.innerHTML = `
      <div class="project-card__categories">
        ${this.category
          .map(
            (category) => `
              <a class="project-card__category"
                 href="projects.html?category=${encodeURIComponent(category)}">
                ${category}
              </a>
            `,
          )
          .join("")}
      </div>

      <h3>${this.title}</h3>
      <p>${this.description}</p>

      <dl class="project-card__meta">
        <div><dt>Team</dt><dd>${this.team}</dd></div>
        <div><dt>Varighed</dt><dd>${this.duration}</dd></div>
        <div><dt>Målgruppe</dt><dd>${this.targetGroup}</dd></div>
      </dl>

      ${caseLink}
    `;

    return article;
  }
}

export { ProjectCard };

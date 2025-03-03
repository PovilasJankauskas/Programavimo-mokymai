const BASE_URL = "http://localhost:7788";

const getData = (url) => {
  return fetch(BASE_URL + url).then((response) => response.json());
};

const generateProjectsHTML = (projects) => {
  return projects
    .map((project) => {
      return ` 
<div class="col-sm-3 mb-0 mb-sm-0">
                    <div class="card project-card">
                        <div class="project-card-body">
                            <h5>${project.name}</h5>
                            <p>${project.description}</p>
                            <div class="main-block-tags">
                              ${project.technologies
                                .map((item) => `<p>${item}</p>`)
                                .join("")}
                            </div>
                            <a href="#" class="btn btn-outline-dark">Žiūrėti</a>
                        </div>
                    </div>
                </div>
              
                `;
    })
    .join("");
};

const generateWorkExperienceHTML = (workExp) => {
  return workExp
    .map((experience) => {
      return `
<div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card job-card">
        <div class="job-card-body">
            <h5>${experience.company}</h5>
            <p>${experience.title}</p>
            <p>${experience.date}</p>
            <p>${experience.location}</p>
            <p>${experience.description}</p>
            <div class="main-block-tags">
              ${experience.skills
                .map((item) => `<p>${item}</p>`)
                .join("")}
            </div>
        </div>
    </div>
</div>

`;
    })
    .join("");
};

window.addEventListener("DOMContentLoaded", async () => {
  let projects = await getData("/projects/latest/3");
  let workExp = await getData("/work-experience/latest/2");
  console.log(projects);
  console.log(workExp);

  document.querySelector(".first-card-group").innerHTML =
    generateProjectsHTML(projects);

  document.querySelector(".second-card-group").innerHTML =
    generateWorkExperienceHTML(workExp);
});

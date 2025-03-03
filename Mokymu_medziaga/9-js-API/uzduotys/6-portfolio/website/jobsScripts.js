const BASE_URL = "http://localhost:7788";

const getData = (url) => {
  return fetch(BASE_URL + url).then((response) => response.json());
};
const addWorkIntoTeble= (jobs) => {
    let tableBody = document.querySelector('#table-rows');

    tableBody.innerHTML = jobs.map((job) => {
        return `
            <tr>
                <td>${job.date}</td>
                <td>${job.company}</td>
                <td>${job.title}</td>
                <td>${job.description}</td>
                <td>${job.location}</td>
            </tr>
        `
    }).join('');
}

window.addEventListener("DOMContentLoaded", async () => {
  let workExp = await getData("/work-experience/latest/2")
  addWorkIntoTeble(workExp);
});

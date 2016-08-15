import $ from "jquery";
import token from "./secret.js"
import time from './time.js'

const projectId = "414867"

loadCards("started,unscheduled,unstarted,finished,delivered")

function loadCards (filter) {
let url = `https://www.pivotaltracker.com/services/v5/projects/${projectId}/stories?filter=owner:ah+state:${filter}`
$.ajax({
    url: url,
    beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('X-TrackerToken', token);
    },
    success: function success(data) {
        let html = "" ;
        for(let story of data) {
          html += `
          <div class="mb3 mh2 mh3 bg-near-white mw5 miw-16 pa3 card tc black-80 shadow-5 ">
            <h1 class=" bb b--gray  pb2 f6 ttu tracked lh-title">${story.name}</h1>
            <div class="meta">
              <p>${story.current_state}</p>
              <div class="">
                ${printLables(story.labels)}
              </div>
            </div>
            <p class=" truncate lh-copy">
              ${story.description === undefined ?
              `Sorry, no description given` : story.description }
            </p>
            <div>
              <a class="btn btn--s btn--gray-dark" href="${story.url}">More Details</a>
            </div>
          </div>
          </div>
          `
        }
        $("#main").html(html)
    }
});
}

function printLables(arr) {
  let html = '' ;
  for (let lable of arr){
    html += `
      <small class="small-caps dib mb3 pa2 b--near-black bw2 shadow-2 br1 lable">${lable.name}</small>
    `
  }
  return html;
}

$('.time').html(time.timeGreeting()).addClass(time.timeColor());

$('.js-filter').on('click', function (e){
  e.preventDefault();
  let filter;
  $(this).text().toLowerCase() === "all" ? filter = "started,unscheduled,unstarted,finished,delivered" : filter = $(this).text();
  loadCards(filter)
})

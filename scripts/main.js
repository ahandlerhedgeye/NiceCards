import $ from "jquery";
import token from "./secret.js"
import time from './time.js'

const projectId = "414867"
const url = `https://www.pivotaltracker.com/services/v5/projects/${projectId}/stories?filter=owner:ah+state:started,unscheduled,unstarted,started,finished,delivered`

$.ajax({
    url: url,
    beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('X-TrackerToken', token);
    },
    success: function success(data) {
        let html = '' ;
        console.log(data)
        for(let story of data) {
          html += `
          <div class=" fl w-100 w-50-ns card tc black-80 bg-transparent shadow-5 ">
            <h1 class="f3 lh-title">${story.name}</h1>
            <div class="meta">
              <p>${story.current_state}</p>
              <div class="">
                ${printLables(story.labels)}
              </div>
            </div>
            <h3 class="f5 lh-copy">
              ${story.description === undefined ?
              `Sorry, no description given` : story.description }
            </h3>
            <div>
              <a class="link" href="${story.url}">link here</a>
            </div>
          </div>
          `
        }
        $("#main").html(html)
    }
});

function printLables(arr) {
  let html = '' ;
  for (let lable of arr){
    html += `
      <p class="small-caps dib pa2 b--near-black bw2 shadow-2 br1 lable">${lable.name}</p>
    `
  }
  return html;
}



$('.time').html(time.timeGreeting())

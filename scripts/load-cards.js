import $ from "jquery";
import secret from "./secret.js"
import printLables from "./print-labels.js"

function loadCards (filter) {
let url = `https://www.pivotaltracker.com/services/v5/projects/${secret.projectId}/stories?filter=owner:ah+state:${filter}`
$.ajax({
    url: url,
    beforeSend: function beforeSend(xhr) {
        xhr.setRequestHeader('X-TrackerToken', secret.apiToken);
    },
    success: function success(data) {
        let html = "" ;
        if (data.length === 0) {
          html += `<h1 class='bb b--black pb2 white-90 f3 ttu tracked lh-title'>No cards to show with this filter</h1>`
        } else {
          for(let story of data) {
            html += `
            <div class="mb3 mh2 mh3 bg-near-white mw5 miw-16 pa3 card tc black-80 shadow-5 js-card">
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
        }
        $("#main").html(html)
    }
});
}

export default loadCards

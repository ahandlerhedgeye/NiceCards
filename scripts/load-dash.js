import secret from './secret.js'
import $ from "jquery";

function loadDash () {
  let url = `https://www.pivotaltracker.com/services/v5/projects/${secret.projectId}/stories?filter=owner:ah+state:started,unscheduled,unstarted,finished,delivered`
  let url2 = `https://www.pivotaltracker.com/services/v5/projects/${secret.projectId}/releases?offset=-1`
  $.ajax({
      url: url,
      beforeSend: function beforeSend(xhr) {
          xhr.setRequestHeader('X-TrackerToken', secret.apiToken);
      },
      success: function success(data) {
        $('.openCards').html(data.length)
        let finishedCards = data.filter(item => item.current_state === 'finished').length
        $('.finishedCards').html(finishedCards)
        let percentage = finishedCards / data.length * 100
        $('.finishedPercent').html(`${Math.floor(percentage)}%`)
        let estimate = 0;
        for(let story of data ){
          if(story.estimate){
            estimate += story.estimate
          }
        }
        $('.points').html(estimate)

        $.ajax({
            url: url2,
            beforeSend: function beforeSend(xhr) {
                xhr.setRequestHeader('X-TrackerToken', secret.apiToken);
            },
            success: function success(data) {
              let currentSprint = data[0]
              let niceDate = currentSprint.deadline.split("T")[0].split("2016-")[1] //brute forcey
              $('.finishedDate').html(niceDate)
            }
          });
      }
 });

}

export default loadDash

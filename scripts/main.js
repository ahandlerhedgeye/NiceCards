import $ from "jquery";
import time from './time.js'
import loadCards from './load-cards.js'
import secret from './secret.js'
import loadDash from './load-dash.js'

$('.time').html(time.timeGreeting()).addClass(time.timeColor());

loadCards("started,unscheduled,unstarted,finished,delivered");
loadDash();

$('.js-filter').on('click', function (e){
  e.preventDefault();
  let filter;
  $(this).text().toLowerCase() === "all" ? filter = "started,unscheduled,unstarted,finished,delivered" : filter = $(this).text();
  loadCards(filter)
});

import $ from "jquery";
import time from './time.js'
import loadCards from './load-cards.js'

loadCards("started,unscheduled,unstarted,finished,delivered")

$('.time').html(time.timeGreeting()).addClass(time.timeColor());

$('.js-filter').on('click', function (e){
  e.preventDefault();
  let filter;
  $(this).text().toLowerCase() === "all" ? filter = "started,unscheduled,unstarted,finished,delivered" : filter = $(this).text();
  loadCards(filter)
});

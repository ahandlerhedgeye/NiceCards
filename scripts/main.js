import $ from "jquery";
import time from './time.js'
import loadCards from './load-cards.js'

$('.time').html(time.timeGreeting()).addClass(time.timeColor());

loadCards("started,unscheduled,unstarted,finished,delivered")

$('.js-filter').on('click', function (e){
  e.preventDefault();
  let filter;
  $(this).text().toLowerCase() === "all" ? filter = "started,unscheduled,unstarted,finished,delivered" : filter = $(this).text();
  loadCards(filter)
});

import '../imports/startup/client';
import '../imports/startup/both';

Meteor.startup(function() {

	/* Javascript Libraries */
	/* jQuery */
	$.getScript("/js/jquery.min.js"); /* jQuery Library */
	$.getScript("/js/jquery-ui.min.js"); /* jQuery UI */
	$.getScript("/js/jquery.easing.1.3.js"); /* jQuery Easing - Requirred for Lightbox + Pie Charts*/

	/* Bootstrap */
	$.getScript("js/bootstrap.min.js");

	/* Charts */
	$.getScript("/js/charts/jquery.flot.js"); /* Flot Main */
	$.getScript("/js/charts/jquery.flot.time.js"); /* Flot sub */
	$.getScript("/js/charts/jquery.flot.animator.min.js"); /* Flot sub */
	$.getScript("/js/charts/jquery.flot.resize.min.js"); /* Flot sub - for repaint when resizing the screen */

	$.getScript("/js/sparkline.min.js"); /* Sparkline - Tiny charts */
	$.getScript("/js/easypiechart.js"); /* EasyPieChart - Animated Pie Charts */
	$.getScript("/js/charts.js"); /* All the above chart related functions */

	/* Map */
	$.getScript("/js/maps/jvectormap.min.js"); /* jVectorMap main library */
	$.getScript("/js/maps/usa.js"); /* USA Map for jVectorMap */

	/*  Form Related */
	$.getScript("/js/icheck.js"); /* Custom Checkbox + Radio */

	/* UX */
	$.getScript("/js/scroll.min.js"); /* Custom Scrollbar */

	/* Other */
	$.getScript("/js/calendar.min.js"); /* Calendar */
	$.getScript("/js/feeds.min.js"); /* News Feeds */


	/* All JS functions */
	$.getScript("/js/functions.js");
});

/*
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/
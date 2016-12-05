import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app-body.js';

FlowRouter.route('/', {
  name: 'App.home',
  action: function() {
    BlazeLayout.render('App_body');
  },
  triggersEnter: [function() {
    $('body').attr('id', 'skin-tectile');
  }]
});
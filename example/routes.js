'use strict';

module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        label: 'Home',
        action: function (context, payload, done) {
            context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Home | flux-examples | routing' });
            done();
        }
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        label: 'About',
        action: function (context, payload, done) {
            context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'About | flux-examples | routing' });
            done();
        }
    },
    dynamicpage: {
        path: '/page/:id',
        method: 'get',
        page: 'page',
        label: 'Page 0',
        routeParams: {
          id: 0
        },
        action: function (context, payload, done) {
            context.dispatch('LOAD_PAGE', { id: payload.params.id });
            context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: payload.params.id + ' [Dynamic Page] | flux-examples | routing' });
            done();
        }
    }
};

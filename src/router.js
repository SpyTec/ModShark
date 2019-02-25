import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CenteredText from "./views/CenteredText";

Vue.use(Router);

let router = new Router({
  mode: 'history',
  
  routes: [
    {
      path: '*',
      name: 'any',
      component: CenteredText,
      props: {
        text: "Could not find anything!"
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/r/:subreddit',
      name: 'subreddit',
      children: [
        {
          path: 'modqueue',
          name: 'subreddit_modqueue',
          component: Home
        },
        {
          path: 'unmoderated',
          name: 'subreddit_unmoderated',
          component: Home
        },
        {
          path: 'moderators',
          name: 'subreddit_moderators',
          component: Home
        },
        {
          path: 'submission/:submission_id',
          name: 'subreddit_submission',
          component: Home,
          children: [
            { 
              path: 'comment/:comment_id', 
              name: "subreddit_comment", 
              component: Home
            }
          ]
        },
      ]
    },
    {
      path: '/modmail/:subreddits?',
      children: [
        {
          path: ':subreddits?',
          name: 'modmail',
          component: Home,
        },
        {
          path: 'conversation/:conversation_id',
          name: 'modmail_conversation',
          component: Home,
        }
      ]
    },
    {
      path: '/u/:username',
      children: [
        {
          path: 'overview',
          name: 'user',
          Component: Home,
        },
        {
          path: 'submitted',
          name: 'user_submitted',
          component: Home,
        },
        {
          path: 'comments',
          name: 'user_comments',
          component: Home,
        },
      ]
    }
  ]
});

export default router;
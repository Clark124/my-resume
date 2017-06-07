import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/tab/Tab'
import Project from '@/components/project/Project'
import Skill from '@/components/skill/Skill'
import Experience from '@/components/experience/Experience'
import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import VuePro from '@/components/vuepro/VuePro'
import React from '@/components/react/React'
import Nodejs from '@/components/node/Node'
import Bootstrap from '@/components/bootStrap/BootStrap'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/project',
      name: 'Project',
      redirect: '/project/vue',
      component: Project,
      children:[ 
	            {path:'vue', component:VuePro},
              {path:'react', component:React},
              {path:'bootstrap', component:Bootstrap},
              {path:'node', component:Nodejs},
	        ]
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      redirect: '/project/vue'
    },
    // {
    //   path: '*',
    //   redirect: '/home'
    // }
  ]
})

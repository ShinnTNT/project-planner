import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPost from "@/views/AddPost";
import EditProject from "@/views/EditProject";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AddPost',
    name: 'AddPost',
    component: AddPost
  },
  {
    path: '/EditProject/:id',
    name: 'EditProject',
    component: EditProject,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

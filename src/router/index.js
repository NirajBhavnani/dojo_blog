import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";
import CreateView from "../views/CreateView.vue";
import TagView from "../views/TagView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts/:id",
    name: "details",
    component: DetailsView,
    props: true, //any route parameter we pass into the components can be accepted/accessed using props
  },
  {
    path: "/create",
    name: "create",
    component: CreateView,
  },
  {
    path: "/tags/:tag",
    name: "tags",
    component: TagView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

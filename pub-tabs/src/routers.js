import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes=[
    {
        name: "HomePage",
        component: HomePage,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: "Login",
        component: Login,
        path: "/login"
    },
    {
        name: "Update",
        component: Update,
        path: "/update/:id"
    },
    {
        name: "Add",
        component: Add,
        path: "/add"
    }
];

const router=createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
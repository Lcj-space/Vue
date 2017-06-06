import Home from './components/home.vue'
import about from  './components/aboutMe.vue'
export default[
    {path: '/home', component: Home},
    {path: '/about', component: about},
    {path: '*', redirect: '/home'}
]


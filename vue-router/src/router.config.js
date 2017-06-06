import Home from './components/home.vue'
import Ifooter from  './components/footer.vue'
export default[
    {path: '/home', component: Home},
    {path: '/foot', component: Ifooter},
    {path: '*', redirect: '/home'}
]


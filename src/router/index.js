import Router from 'vue-router';
import UserLog from '@/components/pages/user-log/UserLog.vue';
import HomePage from '@/components/pages/HomePage.vue'
import BookingDetails from '@/components/pages/users-page/BookingDetails.vue';
import BookingStatus from '@/components/pages/users-page/BookingStatus.vue';
import ProviderPage from '@/components/pages/users-page/ProviderPage.vue';
import UserProfile from '@/components/pages/UserProfile.vue';
import UserDetails from '../components/pages/users-page/UserDetails.vue';
import ServiceDetaile from '@/components/pages/ServiceDetaile.vue';
import SingleUser from '@/components/pages/users-page/SingleUser.vue';
import BookService from '@/components/pages/BookService.vue';
import ProviderAssigned from '@/components/pages/ProviderAssigned.vue';
const router = new Router({
    mode:'history',
    routes : [
        {
            name: 'home',
            path:'/',
            component:HomePage
        },
        {
            name: 'homePage',
            path:'/home',
            component:HomePage
        },
        {
            name: 'login',
            path:'/login',
            component: UserLog
        },
        {
            name: 'booking-status',
            path: '/bookingstatus',
            component: BookingStatus
        },
        {
            name: 'provider',
            path: '/addservice',
            component: ProviderPage
        },
        {
            name:'profile',
            path:'/profile',
            component:UserProfile
        },
        {
            name:'userdetails',
            path:'/userdetails',
            component:UserDetails
        },
        {
            name:'single-user',
            path:'/userdetails/:id',
            component:SingleUser
        },
        {
            name:'bookings',
            path:'/bookings',
            component:BookingDetails
        },
        {
            name: 'ServiceDetail',
            path:'/services',
            component: ServiceDetaile
        },
        {
            name:'bookservice',
            path:'/bookservice/:id',
            component:BookService
        },
        {
            name:'providerassigned',
            path:'/serviceassigned',
            component:ProviderAssigned
        }
    ]
});
export default router;
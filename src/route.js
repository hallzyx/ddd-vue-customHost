import {createRouter, createWebHistory} from "vue-router";
import profileComponent from "./auth/pages/profileComponent.vue";
import preferencesComponent from "./preferences/pages/preferencesComponent.vue";
import bookComponent from "./hotel/bookings/pages/guest/bookComponent.vue";
import myBookingsComponent from "./hotel/bookings/pages/guest/myBookingsComponent.vue";
import iotDevicesComponent from "./iot/pages/iotDevicesComponent.vue";
import requestStaffComponent from "./hotel/customer-services/pages/staff/requestStaffComponent.vue";
import customerRequestsComponent from "./hotel/customer-services/pages/staff/customerRequestsComponent.vue";
import adminComponent from "./auth/pages/adminComponent.vue";
import bookingsTrackerComponent from "./hotel/bookings/pages/staff/bookingsTrackerComponent.vue";
import customerServiceComponent from "./hotel/customer-services/pages/guest/customerServiceComponent.vue";
import loginComponent from "./auth/pages/loginComponent.vue";
import registerComponent from "./auth/pages/registerComponent.vue";
import notFoundComponent from "./public/pages/notFoundComponent.vue";


const routes = [
    {
      name: "Auth",
      path: "/auth",
      children: [
        {
            name: "Login",
              path: "/auth/login",
              component: loginComponent,
        },
        {
            name: "Register",
              path: "/auth/register",
              component: registerComponent,
        }
      ]
    },
    {
        name: "Profile",
        path: '/profile',
        component: profileComponent,
    },
    {
      name: "Admin",
      path: '/admin',
      component: adminComponent,
    },
    {
        name: "Preferences",
        path: '/preferences',
        component: preferencesComponent,
    },
    {
        name: "Book",
        path: '/book',
        component: bookComponent,
    },
    {
        name: "MyBookings",
        path: '/my-bookings',
        component: myBookingsComponent,
    },
    {
        name: "CustomerService",
        path: '/customer-service',
        component: customerServiceComponent,
    },
    {
        name: "IotDevices",
        path: '/iot-devices',
        component: iotDevicesComponent,
    },
    {
        name: "BookingsTracker",
        path: '/bookings-tracker',
        component: bookingsTrackerComponent,
    },
    {
        name: "CustomerRequests",
        path: '/customer-requests',
        component: customerRequestsComponent
    },
    {
        name: "RequestStaff",
        path: '/request-staff',
        component: requestStaffComponent,
    },
    {
        path: '/', redirect: '/profile',
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: notFoundComponent,

    }


]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
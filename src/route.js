// import {createRouter, createWebHistory} from "vue-router";
// import profileComponent from "./auth/pages/profileComponent.vue";
// import preferencesComponent from "./profiles/pages/preferencesComponent.vue";
// import bookComponent from "./crm/pages/bookComponent.vue";
// import myBookingsComponent from "./crm/pages/myBookingsComponent.vue";
// import iotDevicesComponent from "./guest-experience/pages/iotDevicesComponent.vue";
// import requestStaffComponent from "./crm/pages/requestStaffComponent.vue";
// import customerRequestsComponent from "./crm/pages/customerRequestsComponent.vue";
// import adminComponent from "./auth/pages/adminComponent.vue";
// import bookingsTrackerComponent from "./crm/pages/bookingsTrackerComponent.vue";
// import customerServiceComponent from "./crm/pages/customerServiceComponent.vue";
// import loginComponent from "./auth/pages/loginComponent.vue";
// import registerComponent from "./auth/pages/registerComponent.vue";
// import notFoundComponent from "./public/pages/notFoundComponent.vue";
//
//
// const routes = [
//     {
//       name: "Auth",
//       path: "/auth",
//       children: [
//         {
//             name: "Login",
//               path: "/auth/login",
//               component: loginComponent,
//         },
//         {
//             name: "Register",
//               path: "/auth/register",
//               component: registerComponent,
//         }
//       ]
//     },
//     {
//         name: "Profile",
//         path: '/profile',
//         component: profileComponent,
//     },
//     {
//       name: "Admin",
//       path: '/admin',
//       component: adminComponent,
//     },
//     {
//         name: "Preferences",
//         path: '/profiles',
//         component: preferencesComponent,
//     },
//     {
//         name: "Book",
//         path: '/book',
//         component: bookComponent,
//     },
//     {
//         name: "MyBookings",
//         path: '/my-bookings',
//         component: myBookingsComponent,
//     },
//     {
//         name: "CustomerService",
//         path: '/customer-service',
//         component: customerServiceComponent,
//     },
//     {
//         name: "IotDevices",
//         path: '/guest-experience-devices',
//         component: iotDevicesComponent,
//     },
//     {
//         name: "BookingsTracker",
//         path: '/bookings-tracker',
//         component: bookingsTrackerComponent,
//     },
//     {
//         name: "CustomerRequests",
//         path: '/customer-requests',
//         component: customerRequestsComponent
//     },
//     {
//         name: "RequestStaff",
//         path: '/request-staff',
//         component: requestStaffComponent,
//     },
//     {
//         path: '/', redirect: '/profile',
//     },
//     {
//         name: "NotFound",
//         path: "/:pathMatch(.*)*",
//         component: notFoundComponent,
//
//     }
//
//
// ]
//
// export const router = createRouter({
//     history: createWebHistory(),
//     routes,
// })
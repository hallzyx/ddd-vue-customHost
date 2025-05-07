<script>
import { Drawer as PvDrawer } from "primevue";

export default {
  name: "side-bar",
  components: { PvDrawer },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible'],
  data() {
    return {
      userType: 'guest' //  'guest', 'staff' o 'admin'
    }
  },
  computed: {
    sidebar_items() {
      return [
        {
          name: this.$t('sidebar_items.profile'),
          path: '/home',
          type: 'both',
          icon: 'pi pi-user'
        },
        {
          name: this.$t('sidebar_items.preferences'),
          path: '/preferences',
          type: 'guest',
          icon: 'pi pi-cog'
        },
        {
          name: this.$t('sidebar_items.book'),
          path: '/book',
          type: 'guest',
          icon: 'pi pi-calendar-plus'
        },
        {
          name: this.$t('sidebar_items.myBookings'),
          path: '/my-bookings',
          type: 'guest',
          icon: 'pi pi-list'
        },
        {
          name: this.$t('sidebar_items.customerService'),
          path: '/customer-service',
          type: 'guest',
          icon: 'pi pi-comments'
        },
        {
          name: this.$t('sidebar_items.admin'),
          path: '/admin',
          type: 'admin',
          icon: 'pi pi-shield'
        },
        {
          name: this.$t('sidebar_items.iotDevices'),
          path: '/guest-experience-devices',
          type: 'staff',
          icon: 'pi pi-mobile'
        },
        {
          name: this.$t('sidebar_items.customerRequests'),
          path: '/customer-requests',
          type: 'staff',
          icon: 'pi pi-inbox'
        },
        {
          name: this.$t('sidebar_items.bookingsTracker'),
          path: '/bookings-tracker',
          type: 'staff',
          icon: 'pi pi-chart-line'
        },
        {
          name: this.$t('sidebar_items.requestStaff'),
          path: '/request-staff',
          type: 'staff',
          icon: 'pi pi-users'
        }
      ];
    },
    filteredItems() {
      return this.sidebar_items.filter(item => {
        return item.type === this.userType ||
            item.type === 'both'

      });
    }
  },
  methods: {
    updateVisibility() {
      this.$emit('update:visible', false);
    },
    isActive(path) {
      return this.$route.path === path;
    }
  },
  created() {
    //En teoria aca deberíamos obtener el rol del usuario, en caso se use algun "store" en vue.
  }
}
</script>

<template>
  <PvDrawer
      :visible="visible"
      :dismissable="true"
      @update:visible="updateVisibility"
      style="background: var(--color-secondary-light); color: var(--color-slate); border: none"

  >
    <div class="sidebar-header">
      <h3 class="text-2xl">{{ $t('title') }}</h3>
    </div>

    <div class="sidebar-content">
      <ul class="sidebar-menu">
        <li v-for="item in filteredItems" :key="item.path"
            :class="{ 'active': isActive(item.path) }">
            <router-link :to="item.path">
              <div class="menu-item">
                <i v-if="item.icon" :class="item.icon"></i>
                <span class="menu-label">{{ item.name }}</span>
              </div>
            </router-link>

        </li>
      </ul>
    </div>
  </PvDrawer>
</template>

<style scoped>

.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.sidebar-content {
  padding: 0.5rem 0;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.sidebar-menu li:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.menu-item {
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
}

.sidebar-menu li.active {
  background-color: #272727;
  border-left: 3px solid #fa8f45;
}

.sidebar-menu li.active .menu-item {
  color: #fa8f45;
}

.menu-label {
  margin-left: 0.75rem;
}

i {
  font-size: 1.25rem;
}
</style>
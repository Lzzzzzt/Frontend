import { createRouter, createWebHashHistory } from 'vue-router'
import OverviewView from '@/views/OverviewView.vue'
import AnswerView from '@/views/AnswerView.vue'
import ManageView from '@/views/ManageView.vue'
import SettingsView from '@/views/SettingsView.vue'
import UserProfileView from '@/views/UserProfileView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: OverviewView,
    },
    {
      path: '/answer',
      name: 'Answer',
      component: AnswerView,
    },
    {
      path: '/manage',
      name: 'Manage',
      component: ManageView,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsView,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: UserProfileView,
    },
  ],
})

export default router

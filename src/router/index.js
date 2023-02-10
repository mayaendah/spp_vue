import { createRouter, createWebHistory } from 'vue-router'
import SiswaCrud from '../views/SiswaCrud.vue'
import SppCrud from '../views/SppCrud.vue'
import PetugasCrud from '../views/PetugasCrud.vue'
import KelasCrud from '../views/KelasCrud.vue'
import DashboardPage from '../views/DashboardPage.vue'
import PembayaranPage from '../views/PembayaranPage.vue'
import HistoryPage from '../views/HistoryPage.vue'
import LaporanPage from '../views/LaporanPage.vue'

const routes = [
  {
    path: '/',
    name: 'dashboardpage',
    component: DashboardPage
  },
  {
    path: '/crud/siswa',
    name: 'siswacrud',
    component: SiswaCrud
  },
  {
    path: '/crud/spp',
    name: 'sppcrud',
    component: SppCrud
  },
  {
    path: '/crud/petugas',
    name: 'petugascrud',
    component: PetugasCrud
  },
  {
    path: '/crud/kelas',
    name: 'kelascrud',
    component: KelasCrud
  },
  {
    path: '/pembayaran/:id',
    name: 'pembayaran',
    component: PembayaranPage
  },
  {
    path: '/histori',
    name: 'histori',
    component: HistoryPage
  },
  {
    path: '/laporan',
    name: 'laporan',
    component: LaporanPage
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

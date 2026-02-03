import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/san-pham/:id',
            name: 'product-detail',
            component: () => import('@/views/ProductDetail.vue')
        },
        {
            path: '/danh-muc/:type',
            name: 'category-list',
            component: () => import('@/views/CategoryList.vue')
        },
        {
            path: '/tin-tuc/:id',
            name: 'news-detail',
            component: () => import('@/views/NewsDetail.vue')
        },
        {
            path: '/admin',
            component: () => import('@/views/admin/AdminLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'admin-dashboard',
                    component: () => import('@/views/admin/Dashboard.vue'),
                    meta: { title: 'Tổng quan' }
                },
                {
                    path: 'products',
                    name: 'admin-products',
                    component: () => import('@/views/admin/ProductList.vue'),
                    meta: { title: 'Quản lý Sản phẩm' }
                },
                {
                    path: 'products/create',
                    name: 'admin-product-create',
                    component: () => import('@/views/admin/ProductEdit.vue'),
                    meta: { title: 'Thêm mới Sản phẩm' }
                },
                {
                    path: 'products/edit/:id',
                    name: 'admin-product-edit',
                    component: () => import('@/views/admin/ProductEdit.vue'),
                    meta: { title: 'Cập nhật Sản phẩm' }
                },
                {
                    path: 'news',
                    name: 'admin-news',
                    component: () => import('@/views/admin/NewsList.vue'),
                    meta: { title: 'Quản lý Tin Tức' }
                },
                {
                    path: 'news/create',
                    name: 'admin-news-create',
                    component: () => import('@/views/admin/NewsEdit.vue'),
                    meta: { title: 'Thêm mới Tin Tức' }
                },
                {
                    path: 'news/edit/:id',
                    name: 'admin-news-edit',
                    component: () => import('@/views/admin/NewsEdit.vue'),
                    meta: { title: 'Cập nhật Tin Tức' }
                }
            ]
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router

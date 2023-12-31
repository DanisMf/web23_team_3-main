import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Plannogram
import Plannogram from '../views/Plannogram/list'
import addPlannogram from '../views/Plannogram/add'
import EditPlannogram from '../views/Plannogram/edit'
import DetailPlannogram from '../views/Plannogram/detail'

// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		// user
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},

		
		// plannogram
		{
			path: '/list-Plannogram',
			name: 'list-Plannogram',
			component: Plannogram
		},
		{
			path: '/add-Plannogram',
			name: 'add-Plannogram',
			component: addPlannogram
		},
		{
			path: '/edit-Plannogram',
			name: 'edit-Plannogram',
			component: EditPlannogram
		},
		{
			path: '/detail-Plannogram',
			name: 'detail-Plannogram',
			component: DetailPlannogram
		}
		
	]
})

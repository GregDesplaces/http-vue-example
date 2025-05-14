
import TodoListView from '@/views/TodoListView.vue'

export const routes = [
	{
		path: '/',
		name: 'todos',
		alias: '/todos',
		component: TodoListView
	},
	{
		path: '/todos/:id',
		name: 'todo',
		component: () => import('@/views/TodoDetailView.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: () => import('@/views/NotFoundView.vue')
	}
]
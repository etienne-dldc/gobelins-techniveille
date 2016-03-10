import App from '../components/App'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Articles from '../components/Articles'

export default [
  { path: '/',
    component: App,
    indexRoute: {
      component: Home
    },
    childRoutes: [
      { path: '/articles', component: Menu },
      { path: '/article/:id', component: Articles }
    ]
  }

]

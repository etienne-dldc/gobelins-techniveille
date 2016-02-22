import App from '../components/App'
import Home from '../components/Home'

export default [
  { path: '/',
    component: App,
    indexRoute: {
      onEnter (location, replace) {
        replace({ pathname: '/home' })
      }
    },
    childRoutes: [
      { path: '/home', component: Home }
    ]
  }

]

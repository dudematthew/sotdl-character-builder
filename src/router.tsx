import { Router, Route, RootRoute } from '@tanstack/react-router'
import AppLayout from './layout/AppLayout'

// Import route components
import Home from './routes/Home'
import CharacterCreation from './routes/CharacterCreation'
import ContentManager from './routes/ContentManager'
import CharacterHistory from './routes/CharacterHistory'
import ImportExport from './routes/ImportExport'

// Root route definition
const rootRoute = new RootRoute({
  component: AppLayout,
})

// Define routes
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const characterCreationRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/character-creation',
  component: CharacterCreation,
})

const contentManagerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/content-manager',
  component: ContentManager,
})

const characterHistoryRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/character-history',
  component: CharacterHistory,
})

const importExportRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/import-export',
  component: ImportExport,
})

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  characterCreationRoute,
  contentManagerRoute,
  characterHistoryRoute,
  importExportRoute,
])

// Create the router instance
const router = new Router({ routeTree })

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router
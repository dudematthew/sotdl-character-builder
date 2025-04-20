import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import { RouterProvider } from '@tanstack/react-router'
import router from './router'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ThemeProvider defaultTheme="dark" storageKey="sotdl-ui-theme">
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App

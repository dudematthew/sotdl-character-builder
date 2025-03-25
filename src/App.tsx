import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import { Button } from './components/ui/button'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <div className="mx-auto p-4 container">
          <header className="py-6">
            <h1 className="font-bold text-3xl text-center">
              Shadow of the Demon Lord Character Builder
            </h1>
          </header>

          <main className="mt-8">
            <div className="flex justify-center">
              <Button>Get Started</Button>
            </div>
          </main>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App

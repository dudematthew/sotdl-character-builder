import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <div className="flex flex-col items-center bg-background p-8 min-h-screen">
          <header className="mb-10">
            <h1 className="font-bold text-primary text-4xl">Learning Next.js</h1>
            <p className="mt-2 text-muted-foreground">A simple starter project with ShadCN components</p>
          </header>

          <main className="w-full max-w-2xl">
            <div className="gap-6 grid">
              {/* Feature card */}
              <Card>
                <CardHeader>
                  <CardTitle>Clean Project Setup</CardTitle>
                  <CardDescription>Your project is now set up with Tailwind v4 and ShadCN components</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This starter template includes a properly configured Tailwind CSS setup with ShadCN UI components.
                    You can now build your application with these modern tools.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Documentation</Button>
                  <Button>Get Started</Button>
                </CardFooter>
              </Card>

              {/* Second card */}
              <Card>
                <CardHeader>
                  <CardTitle>Tailwind CSS v4</CardTitle>
                  <CardDescription>Using the latest Tailwind features</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 pl-5 text-muted-foreground list-disc">
                    <li>Modern color system using HSL variables</li>
                    <li>Simplified import with @import 'tailwindcss'</li>
                    <li>Full ESM module support</li>
                    <li>Improved performance and smaller bundle size</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Explore Tailwind Features</Button>
                </CardFooter>
              </Card>
            </div>
          </main>

          <footer className="mt-auto pt-12 text-muted-foreground text-sm text-center">
            <p>© {new Date().getFullYear()} Learning Project</p>
          </footer>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App

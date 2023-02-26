import React from 'react'
import { Header } from './sections/header/Header'
import { RouteInputSection } from './sections/routeInput/RouteInputSection'

function App() {
    return (
        <div className="app text-slate-200 bg-slate-600 h-full">
            <Header />
            <RouteInputSection />
        </div>
    )
}

export default App

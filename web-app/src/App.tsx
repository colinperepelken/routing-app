import React from 'react'
import { Header } from './sections/header/Header'
import { Map } from './sections/map/Map'
import { RouteInputSection } from './sections/routeInput/RouteInputSection'

function App() {
    return (
        <div className="app text-slate-200 bg-slate-600 h-full">
            <Header />
            <RouteInputSection />
            <Map />
        </div>
    )
}

export default App

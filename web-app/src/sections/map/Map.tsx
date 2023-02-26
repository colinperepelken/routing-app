import { useRef, useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken =
    'pk.eyJ1IjoiY29saW5wZXJlcGVsa2VuIiwiYSI6ImNsZWxyYXFkeDA2NzAzb21sNDJmbml2anQifQ.TB8dgYq0cKrpSMCbzpjfzQ'

export const Map = () => {
    const mapContainer = useRef<HTMLDivElement>(null)
    const map = useRef<mapboxgl.Map | null>(null)
    const [lng, setLng] = useState(-70.9)
    const [lat, setLat] = useState(42.35)
    const [zoom, setZoom] = useState(9)

    useEffect(() => {
        if (map.current) return // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
        })
    })

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

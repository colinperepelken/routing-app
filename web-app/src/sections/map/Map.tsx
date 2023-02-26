import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken =
    // cspell: disable-next-line
    'pk.eyJ1IjoiY29saW5wZXJlcGVsa2VuIiwiYSI6ImNsZWxyYXFkeDA2NzAzb21sNDJmbml2anQifQ.TB8dgYq0cKrpSMCbzpjfzQ'

export const Map = () => {
    const mapContainer = useRef<HTMLDivElement>(null)
    const map = useRef<mapboxgl.Map | null>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            map.current!.setCenter([
                position.coords.longitude,
                position.coords.latitude,
            ])
        })
    })

    useEffect(() => {
        if (map.current) return // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 11,
        })

        // Add geolocate control to the map.
        map.current.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true,
            }),
        )
    })

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

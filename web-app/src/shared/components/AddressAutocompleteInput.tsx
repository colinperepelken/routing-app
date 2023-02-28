import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

export const AddressAutocompleteInput = () => {
    const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY

    return <GooglePlacesAutocomplete apiKey={googleMapsApiKey} />
}

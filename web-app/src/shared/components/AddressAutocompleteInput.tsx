import React, { useState, useCallback } from 'react'
import { AddressAutofill } from '@mapbox/search-js-react'

export const AddressAutocompleteInput = () => {
    const [showFormExpanded, setShowFormExpanded] = useState(false)
    const [feature, setFeature] = useState<any | null>()

    const accessToken =
        'pk.eyJ1IjoiY29saW5wZXJlcGVsa2VuIiwiYSI6ImNsZWxyYXFkeDA2NzAzb21sNDJmbml2anQifQ.TB8dgYq0cKrpSMCbzpjfzQ'

    const handleRetrieve = useCallback(
        (res: any) => {
            const feature = res.features[0]
            setFeature(feature)
            setShowFormExpanded(true)
        },
        [setFeature],
    )

    return (
        <>
            <form>
                <AddressAutofill
                    accessToken={accessToken}
                    onRetrieve={handleRetrieve}
                >
                    <input
                        placeholder="Start typing your address, e.g. 123 Main..."
                        autoComplete="address-line1"
                        id="mapbox-autofill"
                    />
                </AddressAutofill>
            </form>
        </>
    )
}

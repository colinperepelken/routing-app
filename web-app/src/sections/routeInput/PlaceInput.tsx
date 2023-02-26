import { AddressAutocompleteInput } from '../../shared/components/AddressAutocompleteInput'

export const PlaceInput = () => {
    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                >
                    Stop
                </label>
            </div>
            <div className="md:w-2/3">
                <AddressAutocompleteInput />
            </div>
        </div>
    )
}

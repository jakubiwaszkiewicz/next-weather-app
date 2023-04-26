import React from 'react';
import { useState } from 'react';

import { useRouter } from "next/navigation";

import Select from "react-select";
import { Country, City } from "country-state-city"
import { GlobeIcon } from "@heroicons/react/solid"

type option = {
    value: {
        latitude: string,
        longitude: string,
        isoCode: string,
    },
    label: string,
} | null

type cityOption = {
    value: {
        latitude: string,
        longitude: string | null,
        countryCode: string,
        name: string,
        stateCode: string,
    },
    label: string,
} | null

const options = Country.getAllCountries().map(country => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name,
}))



export default function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<option>(null)
    const [selectedCity, setSelectedCity] = useState<cityOption>(null)
    const router = useRouter()

    const handleSelectedCountry = (option: option) => {
        setSelectedCountry(option);
        setSelectedCity(null);
    }
    const handleSelectedCity = (option: cityOption) => {
        setSelectedCity(option);
        router.push(`/location/${option?.value.latitude}/${option?.value.longitude}`)
    }

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <div className="flex items-center space-x-2 text-white/80">
                    <GlobeIcon className="h-5 w-5 text-white"/>
                    <label htmlFor="country">Country</label>
                </div>
                <Select
                    className="text-black"
                    options={options}
                    onChange={handleSelectedCountry}
                    value={selectedCountry}
                />
            </div>
            {selectedCountry && (
            <div className="space-y-2">
                <div className="flex items-center space-x-2 text-white/80">
                    <GlobeIcon className="h-5 w-5 text-white"/>
                    <label htmlFor="city">City</label>
                </div>
                <Select
                    className="text-black"
                    onChange={handleSelectedCity}
                    value={selectedCity}
                    options={
                        City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(city => ({
                            value: {
                                latitude: city.latitude!,
                                longitude: city.longitude ?? " ",
                                countryCode: city.countryCode,
                                name: city.name,
                                stateCode: city.stateCode,
                            },
                            label: city.name,
                        }))
                    }
                />
            </div>)}
        </div>
    );
}


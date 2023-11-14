const CountriesRepository = require('../../database/repositories/CountriesRepository')
const RegionsRepository = require('../../database/repositories/RegionsRepository')
const LocationsRepository = require('../../database/repositories/LocationsRepository')

class CountriesService {
    async getAll(fields = undefined) {
        return await CountriesRepository.getAll(fields)
    }

    async getOne(id) {
        return await CountriesRepository.getOne(id)
    }

    async create(country) {
        return await CountriesRepository.create(country)
    }

    async update(id, country) {
        const existingCountry = await CountriesRepository.getOne(id)
        if (existingCountry) {
            return await existingCountry.update(country);
        }
        return null;
    }

    async delete(id) {
        return await CountriesRepository.delete(id)
    }

    async getRegions(countryId, fields) {
        return await RegionsRepository.getAllOfCountry(countryId, fields);
    }

    async getLocations(countryId, fields) {
        return await LocationsRepository.getAllOfCountry(countryId, fields);
    }
}

module.exports = new CountriesService()
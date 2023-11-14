const LocationsRepository = require('../../database/repositories/LocationsRepository')

class LocationsService {
    async getAll(fields = undefined) {
        return await LocationsRepository.getAll(fields)
    }

    async getOne(id) {
        return await LocationsRepository.getOne(id)
    }

    async create(region) {
        return await LocationsRepository.create(region)
    }

    async update(id, region) {
        const existingLocation = await LocationsRepository.getOne(id)
        if (existingLocation) {
            return await existingLocation.update(region);
        }
        return null;
    }

    async delete(id) {
        return await LocationsRepository.delete(id)
    }
}

module.exports = new LocationsService()
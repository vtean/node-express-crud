const RegionsRepository = require('../../database/repositories/RegionsRepository')
const LocationsRepository = require('../../database/repositories/LocationsRepository')

class RegionsService {
    async getAll(fields = undefined) {
        return await RegionsRepository.getAll(fields)
    }

    async getOne(id) {
        return await RegionsRepository.getOne(id)
    }

    async create(region) {
        return await RegionsRepository.create(region)
    }

    async update(id, region) {
        const existingRegion = await RegionsRepository.getOne(id)
        if (existingRegion) {
            return await existingRegion.update(region);
        }
        return null;
    }

    async delete(id) {
        return await RegionsRepository.delete(id)
    }

    async getLocations(regionId) {
        return await LocationsRepository.getAllOfRegion(regionId)
    }
}

module.exports = new RegionsService()
const { Op } = require("sequelize");
const RegionsRepository = require('./RegionsRepository')
const Location = require('../models').Location

class LocationsRepository {
    async getAll(fields = undefined) {
        return await Location.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Location.findByPk(id)
    }

    async create(region) {
        return await Location.create(region)
    }

    async update(id, location) {
        const existingLocation = await Location.findByPk(id)
        if (existingLocation) {
            return await existingLocation.update(location);
        }
        return null;
    }

    async delete(id) {
        return await Location.destroy({
            where: { id: id }
        })
    }

    async getAllOfRegion(regionId, fields = undefined) {
        return await Location.findAll({
            where: { regionId: regionId },
            attributes: fields
        })
    }

    async getAllOfCountry(countryId, fields = undefined) {
        const regions = await RegionsRepository.getAllOfCountry(countryId, ['id'])
        
        return await Location.findAll({
            where: {
                regionId: { [Op.in]: regions.map(region => region.id) }
            },
            attributes: fields
        })
    }
}

module.exports = new LocationsRepository()
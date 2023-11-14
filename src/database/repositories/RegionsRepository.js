const Region = require('../models').Region

class RegionsRepository {
    async getAll(fields = undefined) {
        return await Region.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Region.findByPk(id)
    }

    async create(region) {
        return await Region.create(region)
    }

    async update(id, region) {
        const existingRegion = await Region.findByPk(id)
        if (existingRegion) {
            return await existingRegion.update(region);
        }
        return null;
    }

    async delete(id) {
        const deletedRegion = await Region.destroy({
            where: { id: id }
        })
        if (deletedRegion) {
            return {};
        }
        return null;
    }

    async getAllOfCountry(countryId, fields = undefined) {
        return await Region.findAll({
            where: { countryId: countryId },
            attributes: fields
        })
    }
}

module.exports = new RegionsRepository()
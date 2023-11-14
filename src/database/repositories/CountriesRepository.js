const Country = require('../models').Country

class CountriesRepository {
    async getAll(fields = undefined) {
        return await Country.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Country.findByPk(id)
    }

    async create(country) {
        return await Country.create(country)
    }

    async update(id, country) {
        const existingCountry = await Country.findByPk(id)
        if (existingCountry) {
            return await existingCountry.update(country);
        }
        return null;
    }

    async delete(id) {
        return await Country.destroy({
            where: { id: id }
        })
    }
}

module.exports = new CountriesRepository()
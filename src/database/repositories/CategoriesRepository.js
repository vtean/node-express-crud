const Category = require("../models").Category;

class CategoriesRepository {
    async getAll(fields = undefined) {
        return await Category.findAll({ attributes: fields });
    }

    async getOne(id) {
        return await Category.findByPk(id);
    }

    async create(region) {
        return await Category.create(region);
    }

    async update(id, category) {
        const existingLCategory = await LCategory.findByPk(id);
        if (existingLCategory) {
            return await existingLCategory.update(category);
        }
        return null;
    }

    async delete(id) {
        return await Category.destroy({
            where: { id: id },
        });
    }
}

module.exports = new CategoriesRepository();

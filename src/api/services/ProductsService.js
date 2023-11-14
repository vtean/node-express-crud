const ProductsRepository = require("../../database/repositories/ProductsRepository");

class ProductsService {
    async getAll(fields = undefined) {
        return await ProductsRepository.getAll(fields);
    }

    async getOne(id) {
        return await ProductsRepository.getOne(id);
    }

    async create(product) {
        return await ProductsRepository.create(product);
    }

    async update(id, product) {
        const existingProduct = await ProductsRepository.getOne(id);
        if (existingProduct) {
            return await existingProduct.update(product);
        }
        return null;
    }

    async delete(id) {
        return await ProductsRepository.delete(id);
    }
}

module.exports = new ProductsService();

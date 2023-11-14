const ProductsService = require("../services/ProductsService");

class ProductsController {
    async getAll(request, response) {
        try {
            return await response
                .status(200)
                .json(await ProductsService.getAll(["id", "name", "price"]));
        } catch (error) {
            return await response.status(500).json(JSON.stringify(error));
        }
    }

    async getOne(request, response) {
        try {
            const product = await ProductsService.getOne(request.params.id);
            if (product) {
                return response.status(200).json(product);
            }
            return response.status(404).json();
        } catch (error) {
            return response.status(500).json(JSON.stringify(error));
        }
    }

    async create(request, response) {
        try {
            return response.status(200).json(await ProductsService.create(request.body));
        } catch (error) {
            return response.status(400).json(JSON.stringify(error));
        }
    }

    async update(request, response) {
        try {
            const existingProduct = await ProductsService.getOne(request.params.id);
            if (existingProduct) {
                return response.status(200).json(await existingProduct.update(request.body));
            }
            return response.status(404).json();
        } catch (error) {
            return response.status(400).json(JSON.stringify(error));
        }
    }

    async delete(request, response) {
        try {
            return response.status(200).json(await ProductsService.delete(request.params.id));
        } catch (error) {
            return response.status(400).json(JSON.stringify(error));
        }
    }

    async getAllOfCategory(request, response) {
        try {
            return response
                .status(200)
                .json(await ProductsService.getAllOfCategory(request.params.categoryId));
        } catch (error) {
            console.log(error);
            return response.status(500).json(JSON.stringify(error));
        }
    }
}

module.exports = new ProductsController();

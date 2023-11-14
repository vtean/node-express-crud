const CategoriesService = require("../services/CategoriesService");

class CategoriesController {
    async getAll(request, response) {
        try {
            return await response.status(200).json(await CategoriesService.getAll(["id", "name"]));
        } catch (error) {
            return await response.status(500).json(JSON.stringify(error));
        }
    }

    async getOne(request, response) {
        try {
            const category = await CategoriesService.getOne(request.params.id);
            if (category) {
                return response.status(200).json(category);
            }
            return response.status(404).json();
        } catch (error) {
            return response.status(500).json(JSON.stringify(error));
        }
    }

    async create(request, response) {
        try {
            return response.status(200).json(await CategoriesService.create(request.body));
        } catch (error) {
            return response.status(400).json(JSON.stringify(error));
        }
    }

    async update(request, response) {
        try {
            const existingCategory = await CategoriesService.getOne(request.params.id);
            if (existingCategory) {
                return response.status(200).json(await existingCategory.update(request.body));
            }
            return response.status(404).json();
        } catch (error) {
            return response.status(400).json(JSON.stringify(error));
        }
    }

    async delete(request, response) {
        try {
            return response.status(200).json(await CategoriesService.delete(request.params.id));
        } catch (error) {
            return response.status(400).json(JSON.stringify(error));
        }
    }
}

module.exports = new CategoriesController();

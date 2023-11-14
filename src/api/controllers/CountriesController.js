const CountriesService = require('../services/CountriesService')

class CountriesController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await CountriesService.getAll([
                'id',
                'name',
                'code'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const country = await CountriesService.getOne(request.params.id)
            if(country){
                return response.status(200).json(country)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await CountriesService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingCountry = await CountriesService.getOne(request.params.id)
            if(existingCountry){
                return response.status(200).json(await existingCountry.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await CountriesService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async getRegions(request, response){
        try{
            return response.status(200).json(await CountriesService.getRegions(
                request.params.id, 
                ['id', 'name', 'code']
            ))
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async getLocations(request, response){
        try{
            return response.status(200).json(await CountriesService.getLocations(
                request.params.id, 
                ['id', 'name', 'regionId']
            ))
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }
}

module.exports = new CountriesController()
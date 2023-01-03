const example = require("./data/example.json")
const getPackagesByFunctionalUnit = require("./data/getPackagesByFunctionalUnit.json")
const carriers = require("./data/carriers.json");
const packages = require("./data/packages.json")
const guests = require("./data/guests.json")
const delivery = require("./data/delivery.json")
const feeds = require("./data/feeds.json")
const articleById = require("./data/articleById.json")
const valetParking = require("./data/valetParking.json")
const vehicles = require("./data/vehicles.json")
const vechicles_requests = require("./data/vehicles-requests.json")
const pets = require("./data/pets.json")
const pets_requests = require("./data/pets-requests.json")
const relatives_requests = require("./data/relatives-requests.json")

module.exports = {
    getPackagesByFunctionalUnit,
    carriers,
    packages,
    guests,
    delivery,
    feeds,
    articleById,
    valetParking,
    vehicles,
    vechicles_requests,
    pets,
    pets_requests,
    relatives_requests
}
const example = require("./data/example.json")
const getPackagesByFunctionalUnit = require("./data/getPackagesByFunctionalUnit.json")
const carriers = require("./data/carriers.json");
const packages = require("./data/packages.json")
const guests = require("./data/guests.json")
const delivery = require("./data/delivery.json")
const feeds = require("./data/feeds.json")
const articleById = require("./data/articleById.json")
const valetParking = require("./data/valetParking.json")

module.exports = {
    getPackagesByFunctionalUnit,
    carriers,
    packages,
    guests,
    delivery,
    feeds,
    articleById,
    valetParking
}
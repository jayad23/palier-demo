const data = require("./data/allData.json");
const valetParking = {
    "9":{
        "application_number": 9,
        "retreat_date": "05/09/2022",
        "retreat_hour": "11:30",
        "selected_time": "10'",
        "brand": "Audi",
        "model": "R8",
        "color": "Naranja",
        "patent": "SS101",
        "name": "Sam",
        "surname": "Smith",
        "functional_unit": 1701
    },
    "10":{
        "application_number": 10,
        "retreat_date": "05/09/2022",
        "retreat_hour": "11:30",
        "selected_time": "10'",
        "brand": "BMW",
        "model": "Serie 7",
        "color": "Naranja",
        "patent": "ST101",
        "name": "Ana",
        "surname": "de Armas",
        "functional_unit": 309
    },
    "11":{
        "application_number": 11,
        "retreat_date": "06/09/2022",
        "retreat_hour": "11:30",
        "selected_time": "20'",
        "brand": "Mercedes Benz",
        "model": "EQS",
        "color": "Naranja",
        "patent": "DD101",
        "name": "Donald",
        "surname": "Trump",
        "functional_unit": 902
    },
    "12":{
        "application_number": 12,
        "retreat_date": "06/09/2022",
        "retreat_hour": "11:30",
        "selected_time": "20'",
        "brand": "Audi",
        "model": "A8",
        "color": "Naranja",
        "patent": "DT101",
        "name": "Zac",
        "surname": "Efron",
        "functional_unit": 2501
    },
    "13":{
        "application_number": 13,
        "retreat_date": "10/09/2022",
        "retreat_hour": "10:30",
        "selected_time": "10'",
        "brand": "Rolls-Royce",
        "model": "Wraith",
        "color": "Naranja",
        "patent": "DO101",
        "name": "Lionel",
        "surname": "Messi",
        "phone": "333 6891 142",
        "functional_unit": 1010
    }
}
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults({ noCors: true });
const port = process.env.PORT || 3020;
const cors = require('cors');
server.use(jsonServer.bodyParser);
server.post('people/:id/properties', (req, res) => {
    console.log("Endpoint kike")
    if(req.method === "POST"){
        res.status(200).json(
            {
                "data": "User updated successfully"
            }
        )
    }
})

server.get('/api/v1/valetParking/application_number=:id', (req, res) => {
    const where = req.path.indexOf("=")
const id = req.path.slice(where+1)
    if(req.method === "GET"){
        res.status(200).json(valetParking[id])
    }
})
server.use(middlewares);
var whitelist = ['*'];

var corsOptions = {
    credentials: true,
    origin: true,//Allow all origins
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: 'accept, content-type'
};
server.use(cors(corsOptions));

server.get('/echo', (req, res) => {
    res.jsonp({ prueba: 'Correcta' })

})

server.use(jsonServer.bodyParser)
server.use('/api/v1/', router);
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

router.render = (req, res) => {
    //console.log("🚀 ~ file: index.js ~ line 57 ~ req", req._parsedUrl.pathname)
    //console.log("res",res.locals)
    res.jsonp({
        "total_count": res.locals.data.length,
        [req._parsedUrl.pathname.replace("/","")] : res.locals.data
    })
}

server.listen(port);

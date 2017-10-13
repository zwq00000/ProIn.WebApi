var path = require('path');
var mockApi = require('swagger-mock-api');

var mock = mockApi({
        swaggerFile: '../swagger.yaml',
        watch: true
    })
console.log(mock)


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();

chai.use(chaiHttp);

describe('/', function () {
    it(' get emp', function () {
        chai.request(server).get('/api/employees').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    })
})

describe('/', function () {
    it(' post emp', function () {
        chai.request(server).get('/api/employees').end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            done();
        })
    })
})

const chai = require('chai');
//const chaihttp = require('chai-http');
let expect = require('chai').expect;
const request=require('supertest');
const server = require('../../index.js');
let should = chai.should();

chai.use(require('chai-http'));

describe('Movies', () => {
    //this.timeout(5000);
    describe('/GET employees',() => { 
        before(function () {
            this.timeout(5000);
        })
        //this.timeout(5000);
        xit('should get all the users',async () => {
            let res = {};
            res=await request(server).get('/api/employees');
            //console.log(res);
                expect(res).to.have.status(200);
                expect(res.body[0].name).to.be.equal('Ashish');
                expect(res.body[0].email).to.be.equal('ashish@gmail.com');
                expect(res.body[0].status).to.be.equal('active');
          
        })
    })

    describe('/POST user',()=>{
        xit('should add employees',async ()=>{
            let newEmployee={
                name:'Raj',
                email:'raj@yahoo.com',
                status:'pending'
            }
            let res=await request(server).post('/api/employees').send(newEmployee);
            //console.log(res);
            expect(res).to.have.status(200);
            expect(res.body.ok).to.be.equal(1);
            expect(res.body.n).to.be.equal(1);
        })
    })


    describe('/POST users', () => {
        xit('should add users', async () => {
            chai.request(server).post('/api/employees').send({name:'Mis',email:'mis@gmail.com',status:'active'}).end((err, res) => {
                //console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.be.json;
                done();
            });
        })
    })

    describe('/DELETE',()=>{
        xit('should delete user',async ()=>{
            let Empname="Sahil";
            let res=await request(server).delete('/api/employees/'+Empname);
            expect(res).to.have.status(200);
            expect(res.body.ok).to.be.equal(1);
            expect(res.body.n).to.be.equal(1);
        })
    })


})

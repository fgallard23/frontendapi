let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:8010';

describe('test api local', () => {
    //
    it('GET /files/list', (done) => {
        chai.request(url)
            .get('/files/list')
            .end(function (err, res) {
                console.log(err, res);
                expect(res).to.have.status(200);
                done();
            });
    });

    //
    it('GET /files/data OK', (done) => {
        chai.request(url)
            .get('/files/data?fileName=test3.csv')
            .end(function (err, res) {
                console.log(err, res);
                expect(res).to.have.status(200);
                done();
            });
    });
});

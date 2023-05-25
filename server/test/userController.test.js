const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('User Controller', () => {
    it('GET / -> SHOULD RETURN 200', (done) => {
        chai.request(app)
        .get('/')
        .expect(200)
        done();
    });
});
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
import parseJSONFromFile from './utils/helper.js'
import { beforeEach } from 'mocha';
const { expect } = chai;

chai.use(chaiHttp);
describe('User Controller', () => {
//   beforeEach((done) => {

//     chai.request(app)
//       .delete('/users')
//       .end((err, res) => {
//         if (err) {
//           console.error(err);
//           done(err);
//         } else {
//           done();
//         }
//       });
//   });

  it('POST /users -> SHOULD RETURN 201', (done) => {
    chai.request(app)
    .post('/users')
    .send(parseJSONFromFile('newUser.json'))
    .end((err, res) => {
      expect(res).to.have.status(201);
      expect(res.body).to.be.not.null;
      done();
    })
  })

  it('GET /users -> SHOULD RETURN 200', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array').that.is.not.empty;
        done();
      });
  });
});

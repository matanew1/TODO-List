import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";
import parseJSONFromFile from "./utils/helper.js";
const { expect } = chai;

var newUser;

chai.use(chaiHttp);
describe("TEST 1 -> CREATE USER AND SEE ALL CURRENT USERSS", () => {
    it("POST /users -> SHOULD RETURN 201", (done) => {
        chai
          .request(app)
          .post("/users")
          .send(parseJSONFromFile("newUser.json"))
          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.not.null;
            newUser = res.body
            done();
          });
      });
    it("POST /todo -> SHOULD RETURN 201", (done) => {
        chai
          .request(app)
          .post("/todo")
          .send(parseJSONFromFile("newTodo.json"))
          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.not.null;
            done();
          });
      });
})

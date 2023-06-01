import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";
import parseJSONFromFile from "./utils/helper.js";
import db from '../models/database.js';

const { expect } = chai;
chai.use(chaiHttp);

// describe("TEST 1 -> CREATE USER AND SEE ALL CURRENT USERSS", () => {
//   before(async () => {
//     try {
//       await db.mongoose.connection.dropDatabase();
//       console.log("Database dropped successfully.");
//     } catch (error) {
//       console.error("Error dropping database:", error);
//       throw error;
//     }
//   });
//   it("POST /users -> SHOULD RETURN 201", (done) => {
//     chai
//       .request(app)
//       .post("/users")
//       .send(parseJSONFromFile("newUser.json"))
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.not.null;
//         done();
//       });
//   });
//   it("GET /users -> SHOULD RETURN 200", (done) => {
//     chai
//       .request(app)
//       .get("/users")
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.an("array").that.is.not.empty;
//         done();
//       });
//   });
//   it("PUT /users -> SHOULD RETURN 200", (done) => {
//     chai
//       .request(app)
//       .put("/users")
//       .send(parseJSONFromFile("updateUser.json"))
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         done();
//       });
//   });
//   after(async () => {
//     try {
//       await db.mongoose.connection.dropDatabase();
//       console.log("Database dropped successfully.");
//     } catch (error) {
//       console.error("Error dropping database:", error);
//       throw error;
//     }
//   });
// });

// describe("TEST 2 -> CREATE THE SAME USER TWICE", () => {
//   before(async () => {
//     try {
//       await db.mongoose.connection.dropDatabase();
//       console.log("Database dropped successfully.");
//     } catch (error) {
//       console.error("Error dropping database:", error);
//       throw error;
//     }
//   });
//   it("POST /users -> SHOULD RETURN 201", async () => {
//     try {
//       const res = await chai
//         .request(app)
//         .post("/users")
//         .send(parseJSONFromFile("newUser.json"));

//       expect(res).to.have.status(201);
//       expect(res.body).to.not.be.null;
//     } catch (err) {
//       console.error(err);
//       throw err;
//     }
//   });
//   it("POST /users -> SHOULD RETURN 409", async () => {
//     try {
//       const res = await chai
//         .request(app)
//         .post("/users")
//         .send(parseJSONFromFile("newUser.json"));

//       expect(res).to.have.status(409);
//       expect(res.body).to.be.empty;
//     } catch (err) {
//       console.error(err);
//       throw err;
//     }
//   });
//   after(async () => {
//     try {
//       await db.mongoose.connection.dropDatabase();
//       console.log("Database dropped successfully.");
//     } catch (error) {
//       console.error("Error dropping database:", error);
//       throw error;
//     }
//   });
// });

describe("TEST 3 -> CREATE USER AND LOGIN", () => {
  before(async () => {
    try {
      await db.mongoose.connection.dropDatabase();
      console.log("Database dropped successfully.");
    } catch (error) {
      console.error("Error dropping database:", error);
      throw error;
    }
  });
  it("POST /users -> SHOULD RETURN 201", (done) => {
    chai
      .request(app)
      .post("/users")
      .send(parseJSONFromFile("newUser.json"))
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.not.null;
        done();
      });
  });
  it("POST /login -> SHOULD RETURN 200", (done) => {
    chai
      .request(app)
      .post("/login")
      .send(parseJSONFromFile("newUser.json"))
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.not.empty;
        console.log(res.body)
        done();
      });
  });
  after(async () => {
    try {
      await db.mongoose.connection.dropDatabase();
      console.log("Database dropped successfully.");
    } catch (error) {
      console.error("Error dropping database:", error);
      throw error;
    }
  });
});
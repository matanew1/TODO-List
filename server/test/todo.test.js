import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";
import parseJSONFromFile from "./utils/helper.js";
import db from '../models/database.js';

const { expect } = chai;
chai.use(chaiHttp);

// describe("TEST 1 -> CREATE USER AND CREATE TODO_LIST", () => {
//   let newUser;
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
//       newUser = res.body;
//     } catch (err) {
//       console.error(err);
//       throw err;
//     }
//   });
//   it("POST /todo -> SHOULD RETURN 201", async () => {
//     try {
//       const todo = parseJSONFromFile("newTodo.json");
//       todo.owner = newUser._id; // Set the owner property to the user's _id

//       const res = await chai
//         .request(app)
//         .post("/todo")
//         .send(todo);

//       expect(res).to.have.status(201);
//       expect(res.body).to.not.be.null;
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


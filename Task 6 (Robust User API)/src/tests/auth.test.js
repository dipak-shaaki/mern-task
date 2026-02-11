import request from "supertest";
import app from "../app.js";

describe("Auth API", () => {
  it("should reject invalid email", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({ email: "bad", password: "123456" });

    expect(res.statusCode).toBe(400);
  });
});

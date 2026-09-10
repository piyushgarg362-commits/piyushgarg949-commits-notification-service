const request = require("supertest");

const app = require("../src/app");

describe("Notification Service", () => {

  test("Health endpoint", async () => {
    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);
  });

});

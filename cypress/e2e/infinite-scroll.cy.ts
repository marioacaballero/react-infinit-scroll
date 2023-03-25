const url = "http://localhost:3000/";

describe("template spec", () => {
  before(() => {
    cy.visit(url);
  });

  it("Has infinite scroll name", () => {
    cy.get("h1").should("contain", "Infinite Scroll");
  });
});

describe("Should be able to login", () => {
  it("Login", () => {
    cy.visit("http://www.github.com/login");
    cy.get('[name="login"]').type("mysampleemail@gmail.com");
  });
});

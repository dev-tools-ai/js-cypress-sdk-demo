describe("Login to GitHub with standard cypress", () => {
  it("Login", () => {
    cy.visit("http://www.github.com/login");
    cy.get('[name="login"]').type("mysampleemail@gmail.com");
  });
});

describe("Login to GitHub with AI", () => {
  it("Login", () => {
    cy.visit("http://www.github.com/login");
    cy.findByAI('usernameField').type("mysampleemail@gmail.com");
  });
});


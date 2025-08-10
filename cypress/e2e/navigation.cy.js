describe("Navigation Menu Links", () => {
  beforeEach(() => {
    cy.fixture("testData").as("data");
  });

  it("should navigate to correct pages from menu", function () {
    cy.visit("/");
    this.data.navLinks.forEach(link => {
      cy.contains(link.name).click();
      cy.url().should("include", link.path);
      cy.go("back");
    });
  });
});

describe("when visiting the Static Site Generated page", () => {
	beforeEach(() => {
		cy.visit("/ssg");
	});

	it("should diaply the correct locale", () => {
		cy.get("h1").should("contain", "en-gb");
	});

	it("should diaply the correct page type", () => {
		cy.get("h2").should("contain", "SSG");
	});
});

describe("when visiting the Server Side Rendered page", () => {
	beforeEach(() => {
		cy.visit("/ssr");
	});

	it("should diaply the correct locale", () => {
		cy.get("h1").should("contain", "en-gb");
	});

	it("should diaply the correct page type", () => {
		cy.get("h2").should("contain", "SSR");
	});
});

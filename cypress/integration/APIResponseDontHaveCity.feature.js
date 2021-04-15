describe('Response dont have city', () => {
  beforeEach(() => {
    cy.intercept("https://api.opencagedata.com/geocode/v1/json**", {
      fixture: "location_response_postal_city.json",
    });
    cy.intercept("https://api.openweathermap.org/data/2.5/**", {
      fixture: "weather_response.json",
    });
  })  
  
  it("is expected to be displayed on initial render", () => {
    cy.visit("/", {
      onBeforeLoad(window) {
        const stubLocation = {
          coords: {
            lattitude: 57.7047576,
            longitude: 11.9630942,
          },
        };
        cy.stub(window.navigator.geolocation, "getCurrentPosition").callsFake(
          (callback) => {
            return callback(stubLocation);
          }
        );
      },
    });

    cy.get("[data-cy=weather-display]").within(() => {
      cy.get("[data-cy=temp]").should("contain", "10.38");
      cy.get("[data-cy=location]").should("contain", "Gothenburg");
      cy.get("[data-cy=description]").should("contain", "clear sky");
    });
  });
});


describe('Lire les données depuis JSON', () => {
  it('Test en utilisant les données depuis le fichier JSON', () => {
    cy.fixture('userData.json').then((data) => {
      cy.log(data.username); 
      cy.log(data.password);
    });
  });
});

import '../support/commands';

describe('Test de la Commande Personnalisée', () => {
  it('Test de création d\'utilisateur en utilisant la commande personnalisée', () => {
    const user = {
      "name": "Mohammed Ali",
      "job": "QA"
    };
    cy.createUser(user); 
  });
});

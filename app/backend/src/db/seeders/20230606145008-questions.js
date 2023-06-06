'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('questions', [
      {
        question: 'Qual o nome do pai de Harry Potter?',
        correctAnswer: 'Tiago Potter',
        wrongAnswer1: 'Rony Weasley',
        wrongAnswer2: 'Lúcio Malfoy',
        wrongAnswer3: 'Remo Lupin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Qual o nome do melhor amigo de Harry Potter?',
        correctAnswer: 'Rony Weasley',
        wrongAnswer1: 'Hermione Granger',
        wrongAnswer2: 'Draco Malfoy',
        wrongAnswer3: 'Cedrico Diggory',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('questions', null, {});
  },
};


'use strict';

const queriesArr = [
	{
		name: 'Neo',
		color: 'red&amber',
		tail_length: 22,
		weight: 32,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: 'Jessy',
		color: 'black&white',
		tail_length: 7,
		weight: 14,
		createdAt: new Date(),
		updatedAt: new Date()
	},
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Dogs', queriesArr, {});
	},
	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Dogs', null, {});
	}
};

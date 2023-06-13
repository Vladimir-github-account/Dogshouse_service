import config                   from '../config/config.js';
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(config.development);

const Dog = sequelize.define('Dog', {
	name: {
		type: DataTypes.STRING(64),
		allowNull: false,
		unique: true
	},
	color: {
		type: DataTypes.STRING(64),
		allowNull: false
	},
	tail_length: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			min: 1,
		}
	},
	weight: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			min: 1,
		}
	},
}, {
	timestamps: true
});

export default Dog;
import { DataTypes } from 'sequelize';
import DBService from '../services/db.service';

const sequelize = DBService.db;

const MovieFavoritesModel = sequelize.define(
	'favorites_movies',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		userId: { type: DataTypes.INTEGER, allowNull: false },
		movieId: { type: DataTypes.INTEGER, allowNull: false  },
	},
	{ timestamps: false }
);

export default MovieFavoritesModel;
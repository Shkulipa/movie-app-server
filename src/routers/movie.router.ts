import { Router } from 'express';

import checkAuth from '../middlewares/checkAuth.middleware';
import indentificateUser from '../middlewares/indentificateUser.middleware';
import validation from '../middlewares/validation.middleware';
import movieAdd from '../schemas/movieAdd.schema';
import movieUpdate from '../schemas/movieUpdate.schema';
import search from '../schemas/search.schema';
import MovieController from './../controllers/movie.controller';

const movieRouter = Router();

movieRouter.post('/', validation(search), MovieController.getMovies);
movieRouter.get('/:imdbID', indentificateUser(), MovieController.getMovieById);

movieRouter.post(
	'/create',
	[checkAuth(), validation(movieAdd)],
	MovieController.createMovie
);

movieRouter.patch(
	'/:imdbID',
	[checkAuth(), validation(movieUpdate)],
	MovieController.updateMovie
);

movieRouter.delete('/:imdbID', [checkAuth()], MovieController.deleteMovie);

movieRouter.get(
	'/favorite/collection',
	checkAuth(),
	MovieController.getFovoriteMovie
);
movieRouter.post(
	'/favorite/:imdbID',
	checkAuth(),
	MovieController.fovoriteMovie
);

export default movieRouter;

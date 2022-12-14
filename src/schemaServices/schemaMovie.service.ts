import { number, string } from 'zod';

import { ISchemaInput } from './../interfaces/schema.interface';

class SchemaMovieService {
	private movieTitleMax = 100;
	private movieYearmin = 1900;
	private movieRuntimeMax = 10;
	private movieGenreMax = 50;
	private movieDirectorMax = 50;

	private searchMax = 50;
	private searchMin = 3;

	search() {
		return string({
			required_error: 'Search field is required',
			invalid_type_error: 'Search must be a string'
		})
			.min(
				this.searchMin,
				`Search field too small - minimun can be ${this.searchMin} chars`
			)
			.max(
				this.searchMax,
				`Search field too long - maximum can be ${this.searchMax} chars`
			);
	}

	movieTitle(options?: ISchemaInput) {
		const validate = string({
			required_error: 'Title is required',
			invalid_type_error: 'Title must be a string'
		})
			.max(
				this.movieTitleMax,
				`Title too long - maximum can be ${this.movieTitleMax} chars`
			)
			.refine(
				value => {
					const regex = new RegExp(/^[^a-zA-Z]*$/, 'gi');
					return !regex.test(value);
				},
				{
					message: `Title should have only letters`
				}
			);

		if (options && options.optional) return validate.optional();
		return validate;
	}

	movieYear(options?: ISchemaInput) {
		const validate = number({
			required_error: 'Year is required',
			invalid_type_error: 'Year must be a number'
		});

		if (options && options.optional) return validate.optional();
		return validate;
	}

	movieRuntime(options?: ISchemaInput) {
		const validate = string({
			required_error: 'Runtime is required',
			invalid_type_error: 'Runtime must be a string'
		}).max(
			this.movieRuntimeMax,
			`Runtime too long - minimum can be ${this.movieRuntimeMax} chars`
		);

		if (options && options.optional) return validate.optional();
		return validate;
	}

	movieGenre(options?: ISchemaInput) {
		const validate = string({
			required_error: 'Genre is required',
			invalid_type_error: 'Genre must be a string'
		}).max(
			this.movieGenreMax,
			`Genre too long - maximum can be ${this.movieGenreMax} chars`
		);

		if (options && options.optional) return validate.optional();
		return validate;
	}

	movieDirector(options?: ISchemaInput) {
		const validate = string({
			required_error: 'Director is required',
			invalid_type_error: 'Director must be a string'
		}).max(
			this.movieDirectorMax,
			`Director too long - maximum can be ${this.movieDirectorMax} chars`
		);

		if (options && options.optional) return validate.optional();
		return validate;
	}
}

export default new SchemaMovieService();

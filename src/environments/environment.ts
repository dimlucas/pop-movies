// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  tmdbApiKey: '9198fa6d9a9713bc6b03ee9582525917',
  moviesEndpoints: {
    popular: 'https://api.themoviedb.org/3/movie/popular',
    posterBase: 'https://image.tmdb.org/t/p/'
  }  
};

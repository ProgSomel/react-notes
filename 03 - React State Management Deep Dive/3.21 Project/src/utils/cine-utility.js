function getImgURL(name) {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
  //? first parameter: actual path
  //? second parameter: means how vite will get this image in its build context or development context
}

export { getImgURL };

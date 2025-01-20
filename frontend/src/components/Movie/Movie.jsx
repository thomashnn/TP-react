function Movie({ movieData }) {
  console.log(movieData);
  //console.log(movieData['movie']['title']);
  const title = movieData['title'];
  const release_date = movieData['release_date'];
  const img_url = movieData['backdrop_path'];

  return (
    <div>
      {title}, sorti le {release_date} <br />
      <img
        src={'https://image.tmdb.org/t/p/w500' + img_url}
        alt="Poster du film"
      ></img>
    </div>
  );
}

export default Movie;

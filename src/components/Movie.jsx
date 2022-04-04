export function Movie(props) {
  const {
      Title: title,
      Year: year,
      imdbID: id,
      Type: type,
      Poster: poster
      } = props;

      return <div id={id} className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
      {
        // if api not have img 
      poster === 'N/A' ? <img 
                            className="activator" 
                            src={`https://via.placeholder.com/300x400.png?text=${title}`}/>
        // if api not have img 
                            : <img className="activator" src={poster}/>
       }
    </div>
    <div className="card-content">
      <h2 className="card-title activator grey-text text-darken-4">     {title}
      </h2>
      <div className="movie__year">{year} <span>{type}</span></div>
      
    </div>
  </div>
}
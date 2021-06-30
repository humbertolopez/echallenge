function Results({queryResponse,responseNumber}){

  return (
    <div className="resultsListContainer">
      {
        responseNumber !== 0 ?
          <div>
            <h2>Here's some results:</h2>
            <ul className="resultsList">
              {queryResponse.map((item)=>
                <li className="resultsListItem" key={item.id}><a href={item.url}>{item.title}</a></li>
              )}
            </ul>
          </div>
        :
          <div>
            <h2>There are no results for that query :(</h2>
          </div>
      }
    </div>
  )
}

export default Results;
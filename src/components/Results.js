function resultsList({queryResponse}){
    return (
        <div className="resultsListContainer">
          <div>
            <h2>Let's show some results:</h2>
          </div>
          <ul className="resultsList">
            {queryResponse.map((item)=>
              <li className="resultsListItem" key={item.id}><a href={item.url}>{item.title}</a></li>
            )}
          </ul>
        </div>
    )
}

export default resultsList;
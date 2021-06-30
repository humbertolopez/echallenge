function resultsList({queryResponse}){
    return (
        <div className="resultsListContainer">
          <ul class="resultsList">
            {queryResponse.map((item)=>
              <li className="resultsListItem" key={item.id}><a href={item.url}>{item.title}</a></li>
            )}
          </ul>
        </div>
    )
}

export default resultsList;
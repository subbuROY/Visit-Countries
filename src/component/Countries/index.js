import './index.css'

const Countries = props => {
  const {countryItems, addVisitedCountry} = props
  const {name, isVisited, id} = countryItems
  const countryText = isVisited ? 'Visited' : 'Visit'

  const onClickedBtn = () => {
    addVisitedCountry(id)
  }

  return (
    <li className="list-countries">
      <p className="name">{name}</p>
      {isVisited === true ? (
        <p className="para">{countryText}</p>
      ) : (
        <button type="button" className="btn" onClick={onClickedBtn}>
          {countryText}
        </button>
      )}
    </li>
  )
}

export default Countries

import './index.css'

const VisitedCountries = props => {
  const {visitDetails, onRemoveCountry} = props
  const {imageUrl, name, id} = visitDetails

  const onClickedRemoveBtn = () => {
    onRemoveCountry(id)
  }

  return (
    <li className="visit-countries-container">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="details-content">
        <p className="name">{name}</p>
        <button
          type="button"
          className="button"
          onClick={onClickedRemoveBtn}
          data-testid="delete"
        >
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries

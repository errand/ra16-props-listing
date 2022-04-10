import ShopCard from "../components/ShopCard";
import PropTypes from "prop-types";

export default function CardsView({cards}) {
  const render = cards.map(card => <ShopCard item={card.value} key={card.id} />)
  return (
    <div className="view-cards">{render}</div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired
}

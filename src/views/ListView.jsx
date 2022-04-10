import ShopItem from "../components/ShopItem";
import PropTypes from "prop-types";

export default function ListView({items}) {
  const render = items.map(item => <ShopItem item={item.value} key={item.id} />)
  return (
    <div className="view-list">{render}</div>
  )
}

ListView.propTypes = {
  items: PropTypes.array.isRequired
}

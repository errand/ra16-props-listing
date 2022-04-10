export default function Listing({listing_id, url, image, title, currency, price, quantity}) {

  if (!url || !image || !title || !currency || !price || !quantity) {
    return null
  }

  const img = image && image.url_570xN !== undefined ?  <img src={image.url_570xN } /> : null
  const formattedTitle = title && title.trim().split('').length > 50 ? title.substring(0, 50) + '...' : title
  const renderTitle = title ? <p className="item-title">{formattedTitle}</p> : null
  const renderPrice = currency === "USD" ? <p className="item-price">${price}</p> : currency === 'GBP' ? <p className="item-price">{price}GBP</p> : <p className="item-price">€{price}</p>
  const levelClass = () => {
    if(quantity < 11) {
      return 'item-quantity level-low'
    } else if (quantity > 10 && quantity < 21) {
      return 'item-quantity level-medium'
    } else {
      return 'item-quantity level-high'
    }
  }

  return (
    <div className="item-list" data-id={listing_id}>
      <div className="item">
        <div className="item-image">
          <a href={url}>
            {img}
          </a>
        </div>
        <div className="item-details">
          {renderTitle}
          {renderPrice}
          <p className={levelClass}>{quantity} left</p>
        </div>
      </div>
    </div>
  )
}



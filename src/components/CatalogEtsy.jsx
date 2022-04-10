import data from '../data/etsy.json'
import Listing from "./Listing";

export default function CatalogEtsy() {
  return (
    <div className="wrapper">
      {data.map(item => <Listing
        key={item.listing_id}
        listing_id={item.listing_id}
        url={item.url}
        image={item.MainImage}
        title={item.title}
        currency={item.currency_code}
        price={item.price}
        quantity={item.quantity}/>)}
    </div>
  )
}

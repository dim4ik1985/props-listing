import { IProduct } from "../../models.ts";
import { FC } from "react";

interface ProductProps {
  item: IProduct;
}

export const Product: FC<ProductProps> = ({ item }) => {
  let quantityTag = "";
  let itemCurrency = item.price;

  if (item.currency_code !== "USD" && item.currency_code !== "EUR") {
    itemCurrency = `${item.price} ${item.currency_code}`;
  } else if (item.currency_code === "EUR") {
    itemCurrency = `€${item.price}`;
  } else if (item.currency_code === "USD") {
    itemCurrency = `$${item.price}`;
  }

  if (item.quantity) {
    if (item.quantity <= 10) {
      quantityTag = "low";
    } else if (item.quantity <= 20) {
      quantityTag = "medium";
    } else if (item.quantity > 20) {
      quantityTag = "high";
    }
  }

  return (
    <>
      {item.title?.length ? (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage?.url_570xN} alt={"description"} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{`${item.title?.slice(0, 50)}...`}</p>
            <p className="item-price">{itemCurrency}</p>
            <p className={`item-quantity level-${quantityTag}`}>{`${item.quantity} left`}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

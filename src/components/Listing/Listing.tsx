import "./listing.css";
import { IProduct } from "../../models.ts";
import { Product } from "../Product";
import { FC } from "react";

interface ListingProps {
  items: IProduct[];
}

export const Listing: FC<ListingProps> = ({ items }) => {
  return (
    <>
      {items.map((item: IProduct) => (
        <Product item={item} key={item.listing_id} />
      ))}
    </>
  );
};

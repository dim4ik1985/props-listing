import "./App.css";
import { Listing } from "../Listing";
import data from "../../data/data.json";
import { useEffect, useState } from "react";
import { IProduct } from "../../models.ts";

export const App = () => {
  const [items, setItems] = useState<IProduct[]>([]);
  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="item-list">
      <Listing items={items} />
    </div>
  );
};

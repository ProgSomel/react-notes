import React, { useContext, useEffect, useEffectEvent } from "react";
import logVisit from "../utils/logVisit";
import ShoppingCartContext from "../contexts/shoppingCartContext";

export default function Page({ url }) {
  const items = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

  const onvisit = useEffectEvent((url) => {
    logVisit(url, numberOfItems);
  });

  useEffect(() => {
    onvisit(url);
  }, [url]);
  return (
    <div>
      <div>This is Page</div>
    </div>
  );
}

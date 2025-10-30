import React, { useState } from "react";
import { initialTravelPlan } from "../data/places-normalized";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIDs = root.childIds;

  const handleComplete = (parentID, childID) => {
    const parent = plan[parentID];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childID),
    };
    setPlan({
      ...plan,
      [parentID]: nextParent,
    });
  };

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIDs.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentID={0}
            placesByID={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

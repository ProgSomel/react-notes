import React from "react";

export default function PlaceTree({
  id,
  parentID,
  placesByID,
  onComplete,
}) {
  const place = placesByID[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}{" "}
      <button onClick={() => onComplete(parentID, id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentID={id}
              placesByID={placesByID}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

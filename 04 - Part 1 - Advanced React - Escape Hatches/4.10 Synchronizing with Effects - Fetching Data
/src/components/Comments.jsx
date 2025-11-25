import React, { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchComments";

export default function Comments({ postID }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    let ignore = false;
    //? fetch comments here
    async function startFetching() {
      const json = await fetchComments(postID);
      if (!ignore) {
        setComments(json);
      }
    }
    startFetching();

    return () => {
      ignore = true;
    };
  }, [postID]);
  return (
    <ul>
      {comments?.map((comment) => (
        <li key={comment?.id}>{comment?.name}</li>
      ))}
    </ul>
  );
}

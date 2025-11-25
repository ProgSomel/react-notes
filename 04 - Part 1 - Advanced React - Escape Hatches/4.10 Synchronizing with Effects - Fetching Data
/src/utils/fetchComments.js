export const fetchComments = async (postID) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postID}/comments`
  );
  return result.json();
};

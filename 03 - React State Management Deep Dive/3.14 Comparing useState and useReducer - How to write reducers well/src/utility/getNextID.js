export const getNextID = (data) => {
  const maxID = data.reduce((prev, curr) =>
    prev && prev.id > curr.id ? prev.id : curr.id
  );
  return maxID + 1;
};

export const getNextID = (data) => {
  const maxID = data.reduce((maxId, curr) => {
    maxId > curr.id ? curr.id : maxId;
  }, 0);
  return maxID + 1;
};

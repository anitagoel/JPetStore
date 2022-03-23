export const todaysDate = () => {
  const d = new Date();
  const date =
    d.getUTCFullYear() + "/" + d.getUTCMonth() + "/" + d.getUTCDate();

  return date;
};

export const todaysTime = () => {
  const d = new Date();
  const time =
    d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds();

  return time;
};

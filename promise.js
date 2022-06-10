const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  const data = [
    ...await promiseTheaterIXX(),
    ...await promiseTheaterVGC(),
  ];

  return data.reduce(
    (total, film) => film.hasil === emotion ? ++total: total,
    0
  );
};

module.exports = {
  promiseOutput,
};

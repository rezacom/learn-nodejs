const { parse } = require("csv-parse");
const fs = require("fs");

const result = [];

const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};
fs.createReadStream("kepler-data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (res) => {
    if (isHabitablePlanet(res)) result.push(res);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    // console.log(result);

    console.log(`${result.length} HobitTable Found!`);
  });

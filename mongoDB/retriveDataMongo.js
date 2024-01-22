const getConnection = require("./mongoDBConnect");

const retriveData = async () => {
  let data = await getConnection();
  data = await data.find().toArray();
  console.log(data);
};

retriveData();

// getConnection().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((res) => {
//       console.log(res);
//     });
// });
// getConnection();

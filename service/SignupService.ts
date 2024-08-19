import { AxiosMain } from "./AxiosConfig";

// export const getEmailList = AxiosMain.post("/dev/select-accounts")
//   .then((res) => {
//     console.log("res :>> ", res.data);
//     return;
//   })
//   .catch((err) => {
//     console.log("err :>> ", err);
//     return;
//   });

export const getEmailList = async () => {
  await AxiosMain.post("/dev/select-accounts")
    .then((res) => {
      console.log("res :>> ", res.data);
      return;
    })
    .catch((err) => {
      console.log("err :>> ", err);
      return;
    });
};

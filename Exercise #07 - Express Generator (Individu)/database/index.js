const mongoose = require("mongoose");
const { mongoUrl } = require("../config");

mongoose
  .connect(mongoUrl)
  .then((res) => console.log("Koneksi Database Berhasil"))
  .catch((error) => console.log("koneksi Database gagal : ", error.message));

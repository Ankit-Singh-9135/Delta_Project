const figlet = require("figlet");

figlet("ANKIT sINGH rAJPUT!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
// const router = require("express").Router();

// const posts = [
//   {
//     post_name: "{{title}}",
//     post_description: "{{text}}",
//   },
//   {
//     post_name: "{{title}}",
//     post_description: "{{text}}",
//   },
//   {
//     post_name: "{{title}}",
//     post_description: "{{text}}",
//   },
// ];

// //get all posts
// router.get("/", async (req, res) => {
//   try {
//     res.render("all");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });





// //get one post
// router.get("/posts/:num", async (req, res) => {
//    try {
//       return res.render("all", posts[req.params.num - 1]);
//    } catch (err) {
//      res.status(500).json(err);
//    }
// });

// module.exports = router;

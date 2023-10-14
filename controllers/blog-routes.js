const router = require("express").Router();
// Here is where we provide hardcoded data to render dynamically
const posts = [
  {
    id: 1,
    post_name: "{{title}}",
    post_description: "{{text}}",
  },
  {
    id: 2,
    post_name: "{{title}}",
    post_description: "{{text}}",
  },
  {
    id: 3,
    post_name: "{{title}}",
    post_description: "{{text}}",
  },
];

//get all posts
router.get("/", async (req, res) => {
  try {
    res.render("all");
  } catch (err) {
    res.status(500).json(err);
  }
});





//get one post
router.get("/posts/:num", async (req, res) => {
   try {
      return res.render("all", posts[req.params.num - 1]);
   } catch (err) {
     res.status(500).json(err);
   }
});

module.exports = router;

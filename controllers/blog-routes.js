const router = require("express").Router();
// Here is where we provide hardcoded data to render dynamically
const posts = [
  {
    post_name: "",
    post_description: "",
  },
  {
    post_name: "",
    post_description:
      "",
  },
  {
    post_name: "",
    post_description:
      "",
  },
];

//get all posts
router.get("/", async (req, res) => {
  res.render("all");
});

//get one post
router.get("/posts/:num", async (req, res) => {
  // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
  return res.render("all", posts[req.params.num - 1]);
});

module.exports = router;

const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);

 req.session.save(() => {
   req.session.userId = newUser.id;
   req.session.username = newUser.username;
   req.session.loggedIn = true;

     res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.findOne({
      where: { username: req.body.username },
      // where: { email: req.body.email },
      // where: { name: req.body.name },
    });

    if (!newUser) {
      res
        .status(400)
        .json({ message: "Incorrect email please try again" });
      return;
    }

    const validPassword = await newUser.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.loggedIn = true;
      //  res.redirect("/profile");

      res.json({ user: newUser, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.findOne({
      where: { username: req.body.username },
      where: { email: req.body.email },
      where: { name: req.body.name },
    });

    if (!newUser) {
      res
        .status(400)
        .json({ message: "Incorrect email, please try again" });
      return;
    }

    const validPassword = await newUser.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.loggedIn = true;
      // res.redirect("/login");
      // res.json({ user: newUser, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
  
});


router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

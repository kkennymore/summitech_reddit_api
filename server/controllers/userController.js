import db from "./../models";

const userController = {};

userController.signup = (req, res) => {
  //console.log(req.body);

  const { username, password, email, phone } = req.body;
  const user = new db.User({
    username,
    password,
    email,
    phone,
  });

  console.log(
    db.User.find({}).populate({
      path: "email",
      select: "username",
    })
  );

  user
    .save()
    .then((newUser) => {
      res.status(200).json({
        success: true,
        data: newUser,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

userController.login = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  // Validation

  const user = new db.User({
    username,
    password,
    email,
    phone,
  });

  user
    .save()
    .then((newUser) => {
      res.status(200).json({
        success: true,
        data: newUser,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};
userController.login = (req, res) => {
  /**update users */
};

 userController.updateUser = async (req, res) => {
  /**update users */
  try {
    const id = req.params.id; //this is the url id passed to be updated
    const updates = req.body; //this is the data to be updated
    const options = { new: true }; //this will make the updated data to be returned
    //call the user model to be updated
    const result = await db.User.findByIdAndUpdate(id, updates, options);
    res.json({
      status: true,
      data: result,
    }); //this is to send back the updated data
  } catch (error) {
    res.json({
      status: true,
      message: error,
    });
  }

 };

userController.getUsers = (req, res) => {
  db.User.find({})
    .populate({
      path: "email",
      select: "username",
    })
    .then((getPosts) => {
      return res.status(200).json({
        status: true,
        message: "success",
        data: getPosts,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: false,
        message: err,
      });
    });
};

userController.logout = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  // Validation

  const user = new db.User({
    username,
    password,
  });

  user
    .save()
    .then((newUser) => {
      res.status(200).json({
        success: true,
        data: newUser,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};
export default userController;

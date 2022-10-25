const postController = {};

postController.createSub = (req, res) => {
  res.json({
    message: "Create a sub data",
  });
};

postController.editSub = (req, res) => {
  res.json({
    message: "Edit posts",
  });
};

postController.getPost = (req, res) => {
  res.json({
    message: "Get Post data",
  });
};

postController.addPost = (req, res) => {
    res.json({
      message: "Add posts",
    });
  };

export default postController;

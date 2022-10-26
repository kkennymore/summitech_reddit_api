import db from "./../models";

const postController = {};
/*create a sub */
postController.createSub = (req, res) => {
  res.json({
    message: "Create a sub data",
  });
};
/*edit comments */
postController.editSub = (req, res) => {
  res.json({
    message: "Edit posts",
  });
};
/*get posts data */
postController.getPost = (req, res) => {
  res.json({
    message: "Get Post data",
  });
};
/** add posts data controller */
postController.addPost = (req, res) => {
  /** use destructuring introduced in ES2015*/
  const { title, text, link, userId } = req.body;
  const addPost = new db.AddPost({
    title,
    text,
    link,
    isRelated: true,
    _creator: userId,
  });
  /** carry out some validation to make sure 
   * no empty data is sent or maliciuous 
   * data is sent 
   * */
  /**save the data */
  addPost
    .save()
    .then((newAddPost) => {
      return res.status(200).json({
        status: true,
        data: newAddPost,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: false,
        message: err,
      });
    });
};

export default postController;

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
  /** use destructuring introduced in ES2015*/
  const { postId, title, text, link, isDeleted } = req.body;

  const Post = new db.Post({
    title,
    text,
    link,
    isDeleted,
    _id: postId,
  });
  console.log(res.body.title);

  /** carry out some validation to make sure
   * no empty data is sent or maliciuous
   * data is sent
   * */
  /**save the data */
  // Post.save()
  //   .then((newPost) => {
  //     return res.status(200).json({
  //       status: true,
  //       data: newPost,
  //     });
  //   })
  //   .catch((err) => {
  //     res.status(500).json({
  //       status: false,
  //       message: err,
  //     });
  //   });
};

/**get single post */
postController.getSinglePost = (req, res) => {
  db.Post.find({ _id: req.params.postId })
    .then((newPosts) => {
      return res.status(200).json({
        status: true,
        message: "success",
        data: newPosts,
      });
    })
    .catch(() => {
      res.status(500).json({
        status: false,
        message: err,
      });
    });
};
/** add posts data controller */
postController.Post = (req, res) => {
  /** use destructuring introduced in ES2015*/
  const { title, text, link, userId } = req.body;
  const Post = new db.Post({
    title,
    text,
    link,
    _userId: userId,
  });
  /** carry out some validation to make sure
   * no empty data is sent or maliciuous
   * data is sent
   * */
  /**save the data */
  Post.save()
    .then((newPost) => {
      return res.status(200).json({
        status: true,
        data: newPost,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: false,
        message: err,
      });
    });
};

/*get posts data */
postController.getPost = (req, res) => {
  db.Post.find({})
    .populate({
      path: "_userId",
      select: "username -_id email phone isActivated createdAt updatedAt",
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

export default postController;

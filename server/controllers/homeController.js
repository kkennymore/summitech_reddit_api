const homeController = {};

homeController.home = (req, res) => {
  res.json({
    message: 'Welcome to Summitech API!'
  });
};

export default homeController;

import express from 'express';

// Controller Imports
import homeController from './controllers/homeController';
import userController from './controllers/userController';
import postController from './controllers/postController';

const routes = express();

// Home route Routes
routes.get('/', homeController.home);


// User Routes
routes.post('/signup', userController.signup);
routes.post('/login', userController.login);
routes.post('/logout', userController.logout);
/**this is the post endpoints */
routes.post('/create_sub', postController.createSub);
routes.post('/edit_sub', postController.editSub);
routes.get('/get_post', postController.getPost);
routes.post('/add_post', postController.addPost);

export default routes;

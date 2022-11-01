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
routes.get('/users',userController.getUsers);
routes.patch('/user/update/:id',userController.updateUser);
/**this is the post endpoints */
routes.post('/create_sub', postController.createSub);
routes.post('/edit_sub', postController.editSub);
routes.get('/get_post', postController.getPost);
routes.get('/get_post/:postId', postController.getSinglePost);
routes.post('/add_post', postController.Post);
routes.patch('/post/update/:id', postController.updatePost);

export default routes;

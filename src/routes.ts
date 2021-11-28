import express from 'express';
import AuthenticateUserController from './controllers/AuthenticateUserController';
import CreateAddressController from './controllers/CreateAddressController';
import DeleteAddressController from './controllers/DeleteAddressController';
import DeleteUserController from './controllers/DeleteUserController';
import ListAddressesController from './controllers/ListAddressesController';
import ListUserDataController from './controllers/ListUserDataController';
import RegisterUserController from './controllers/RegisterUserController';
import UpdateAddressController from './controllers/UpdateAddressController';
import UpdateUserController from './controllers/UpdateUserController';
import ensureAuthenticated from './middlewares/ensureAuthenticated';

const routes = express.Router();

routes.post('/register', RegisterUserController.handle);
routes.post('/login', AuthenticateUserController.handle);
routes.put('/update', ensureAuthenticated, UpdateUserController.handle);
routes.delete('/user', ensureAuthenticated, DeleteUserController.handle);
routes.get('/user', ensureAuthenticated, ListUserDataController.handle);

routes.post('/user/address', ensureAuthenticated, CreateAddressController.handle);
routes.delete('/user/address/:addressId', ensureAuthenticated, DeleteAddressController.handle);
routes.put('/user/address/:addressId', ensureAuthenticated, UpdateAddressController.handle);
routes.get('/user/address/:addressId', ensureAuthenticated, ListAddressesController.handle);
routes.get('/user/address', ensureAuthenticated, ListAddressesController.handle);

export default routes;
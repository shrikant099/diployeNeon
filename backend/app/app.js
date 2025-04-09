import express, { urlencoded } from 'express';
import cors from 'cors';
import path from 'path';
import { upload } from '../utils/multer.js';
import cookieParser from 'cookie-parser';
// import { authMiddleware, verifyToken} from '../middleware/auth.middleware.js';
import {adminAddProduct, adminDeleteUser, adminLogin, adminProductEdit, adminViewController, authSignUpController, deleteProduct, getAllProduct, getProductWithId, loginController, resetPassword, updateProductClick, userForgetPassword, verifyOtp } from '../controllers/user.controller.js';
import { tokenMiddleware } from '../middleware/auth.middleware.js';
const app = express();


//Middleware
app.use(cors({ origin: '*' }));
app.use(cookieParser())
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(urlencoded({ extended: false }))


// Routes
app.post('/api/auth/signup', authSignUpController);
app.post('/api/auth/signin', loginController);


// find email forget password 
app.post('/api/auth/forgetpassword', userForgetPassword);
app.post('/api/auth/verifyotp', verifyOtp);
app.post('/api/auth/resetpassword/:id', resetPassword);


//check admin is login 
app.post("/api/admin/login", adminLogin);
app.get('/api/admin/view/users' ,adminViewController);
app.delete('/api/admin/delete/user/:id' ,adminDeleteUser )
app.post('/api/admin/add/product', upload.single('image'), adminAddProduct);


app.get(`/api/get/product` , getAllProduct);
app.delete(`/api/product/delete/:id` , deleteProduct)
app.put(`/api/product/edit/:id` , upload.single('image'), adminProductEdit);
app.get('/api/get/product/:id' , getProductWithId);

app.post('/api/update/product-click/:id', updateProductClick);


app.get('/checktoken', tokenMiddleware, (req, res) => {
   return res.status(200).json({ message: 'Token is valid', user: req.user });
});




export { app }

import express from "express";
import {getUsers, createUser, getUser, deleteUser, modifyUser} from '../controller/user.js';


const router = express.Router();


router.get('/',getUsers)
router.post('/',createUser)
router.get('/:id',getUser);
router.delete('/:id',deleteUser);
router.patch('/:id',modifyUser);

export default router;
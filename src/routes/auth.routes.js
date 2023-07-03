//registro
//login

const {Router} = require('express');
const {register, getUsers, login} = require('../controllers/auth.controllers')

const router = Router();


/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: create a new user into application
 *     tags:
 *       [Auth]
 *     requestBody:
 *       description: Required fiels to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/register'
 *     responses:
 *        201:
 *          description: created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: User created
 *        400:
 *          description: validation error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: validation error
 * /api/v1/auth/login:
  *   post:
 *     summary: make a login if email and password are correct
 *     tags:
 *       [Auth]
 *     requestBody:
 *       description: Required email and password to validate data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/login'
 *     responses:
 *        200:
 *          description: logged
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schema/loginResponse'
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: User logged in
 *        400:
 *          description: validation error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: validation error
 */
router.get("/",getUsers);
router.post("/register",register);
router.post("/login",login);


module.exports = router
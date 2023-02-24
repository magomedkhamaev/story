import {body} from 'express-validator';

export const loginValidation = [
    body('email', 'неверный формат почты').isEmail(),
    body('password', 'пароль мин 5 символов').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'неверный формат почты').isEmail(),
    body('password', 'пароль мин 5 символов').isLength({ min: 5 }),
    body('fullName', 'Укажите имя').isLength({ min : 3 }),
    body('avatarUrl', 'неверная ссылка').optional().isURL(),
];


export const postCreateValidation = [
    body('title', 'неверный формат title').isLength({ min: 3 }).isString(),
    body('text', 'text мин 5 символов').isLength({ min: 10 }).isString(),
    body('tags', 'Укажите tags').optional().isString(),
    body('imageUrl', 'неверная ссылка image').optional().isString(),
];

export const commentCreateValidation = [
    body('coment', 'validation wanna say...').isLength({ min: 3 }).isString(),
];
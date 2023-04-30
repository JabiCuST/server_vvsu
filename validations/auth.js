import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Неверный формат почты')
        .isEmail(),
    body('password', 'Пароль должен состоять минимум из 8 символов')
        .isLength({ min: 8 }),
    body('fullName', 'Укажите имя')
        .isLength({ min: 3 }),
];
import Joi from 'joi'

export const passwordSchema = Joi?.string()
  .min(8)
  .max(40)
  // .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)
  .messages({
    'string.min': 'Поле "Пароль" должно быть не короче 8 символов',
    'string.max': 'Поле "Пароль" должно быть не длиннее 40 символов',
    'string.empty': 'Поле "Пароль" обязательно для заполнения.',
    'string.pattern.base': 'Поле "Пароль" не валидно',
  })
  .required()

export const loginSchema = Joi?.string()
  .min(3)
  .max(20)
  .pattern(/^[a-z0-9_-]/)
  .messages({
    'string.min': 'Поле "Логин" должно быть не короче 3 символов',
    'string.max': 'Поле "Логин" должно быть не длиннее 20 символов',
    'string.empty': 'Поле "Логин" обязательно для заполнения.',
    'string.pattern.base': 'Поле "Логин" не валидно',
  })
  .required()

export const nameSchema = Joi?.string()
  .pattern(/^[A-ZА-Я]/)
  .pattern(/([A-ZА-Я][a-zа-я]+$)/)
  .messages({
    'string.empty': 'Поле обязательно для заполнения.',
    'string.pattern.base': 'Первая буква должна быть заглавной',
  })
  .required()

export const emailSchema = Joi?.string()
  .pattern(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/)
  .messages({
    'string.empty': 'Поле "Email" обязательно для заполнения.',
    'string.pattern.base': 'Поле Email должен содержать @ и точку после.',
  })
  .required()

export const phoneSchema = Joi?.string()
  .min(10)
  .max(15)
  .pattern(/^[+]?(?:[0-9]{10}|[0-9]{15})$/)
  .messages({
    'string.min': 'Поле "Телефон" должно быть не короче 10 символов',
    'string.max': 'Поле "Телефон" должно быть не длиннее 15 символов',
    'string.empty': 'Поле "Телефон" обязательно для заполнения.',
    'string.pattern.base': 'Телефон "Логин" не валидно',
  })
  .required()

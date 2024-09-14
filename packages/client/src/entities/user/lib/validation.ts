import JustValidate from 'just-validate'
import Joi from 'joi'

import {
  passwordRules,
  nameRules,
  emailRules,
  phoneRules,
  confirmPasswordRule,
} from '../../../shared/constants/validation-rules'
import { options } from '../constants'
import { handleRegister } from './handle-request'

export const formValidationSignup = () => {
  const validator = new JustValidate('#auth-form', {
    focusInvalidField: false,
    errorsContainer: '.custom-error-container',
  })
  validator
    .addField('#first_name', nameRules, {
      ...options,
      errorsContainer: `.first_name-error-container`,
    })
    .addField('#second_name', nameRules, {
      ...options,
      errorsContainer: `.second_name-error-container`,
    })
    .addField('#email', emailRules, {
      ...options,
      errorsContainer: `.email-error-container`,
    })
    .addField('#phone', phoneRules, {
      ...options,
      errorsContainer: `.phone-error-container`,
    })
    // .addField('#login', loginRules, {
    //   ...options,
    //   errorsContainer: `.login-error-container`,
    // })
    .addField('#password', passwordRules, {
      ...options,
      errorsContainer: `.password-error-container`,
    })
    .addField('#confirm_password', confirmPasswordRule, {
      ...options,
      errorsContainer: `.confirm_password-error-container`,
    })
    .onSuccess(event => {
      const formEvent = event as FormDataEvent
      const form = formEvent.target as HTMLFormElement
      handleRegister(form)
      console.log('Валидация прошла успешно.', formEvent.target)
    })
    .onFail(() => {
      console.log('Валидация завершена с ошибками.')
    })
}

export const passwordSchema = Joi.string()
  .min(8)
  .max(40)
  .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)
  .messages({
    'string.min': 'Поле "Пароль" должно быть не короче 8 символов',
    'string.max': 'Поле "Пароль" должно быть не длиннее 40 символов',
    'string.empty': 'Поле "Пароль" обязательно для заполнения.',
    'string.pattern.base': 'Поле "Пароль" не валидно',
  })
  .required()

export const loginSchema = Joi.string()
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

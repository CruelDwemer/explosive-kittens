import JustValidate from 'just-validate'
import Joi from 'joi'

import {
  loginRules,
  passwordRules,
  nameRules,
  emailRules,
  phoneRules,
  confirmPasswordRule,
} from '../../../shared/constants/validation-rules'
import { options } from '../constants'
import { handleLogin, handleRegister } from './handle-request'

export const formValidationSignin = () => {
  const validator = new JustValidate('#auth-form', {
    focusInvalidField: false,
    errorsContainer: '.custom-error-container',
  })
  validator
    .addField('#login', loginRules, {
      ...options,
      errorsContainer: '.login-error-container',
    })
    .addField('#password', passwordRules, {
      ...options,
      errorsContainer: '.password-error-container',
    })
    .onSuccess(event => {
      const formEvent = event as FormDataEvent
      const form = formEvent.target as HTMLFormElement
      handleLogin(form)
      console.log('Валидация прошла успешно.')
    })
    .onFail(() => {
      console.log('Валидация завершена с ошибками.')
    })
}

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
    .addField('#login', loginRules, {
      ...options,
      errorsContainer: `.login-error-container`,
    })
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
    'string.min': 'Поле должно быть не короче 8 символов',
    'string.max': 'Поле должно быть не длиннее 40 символов',
    'string.empty': 'Поле обязательно для заполнения.',
    'string.pattern.base': 'Поле не валидно',
  })
  .required()

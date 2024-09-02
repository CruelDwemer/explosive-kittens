import JustValidate from 'just-validate'
import {
  loginRules,
  passwordRules,
  confirmPasswordRule,
  nameRules,
  emailRules,
  phoneRules,
} from '../../../shared/constants/validation-rules'

import { loginUser, registerUser } from './'
import { ERROR_OPTIONS } from '../constants'

const loginFormValidation = () => {
  const validator = new JustValidate('#auth-form', {
    focusInvalidField: false,
    errorsContainer: '.custom-error-container',
  })
  validator
    .addField('#login', loginRules, {
      ...ERROR_OPTIONS,
      errorsContainer: '.login-error-container',
    })
    .addField('#password', passwordRules, {
      ...ERROR_OPTIONS,
      errorsContainer: '.password-error-container',
    })
    .onSuccess(event => {
      const formEvent = event as FormDataEvent
      const form = formEvent.target as HTMLFormElement
      loginUser(form)
      console.log('Валидация прошла успешно.')
    })
    .onFail(() => {
      console.log('Валидация завершена с ошибками.')
    })
}

const registerFormValidation = () => {
  const validator = new JustValidate('#auth-form', {
    focusInvalidField: false,
    errorsContainer: '.custom-error-container',
  })
  validator
    .addField('#first_name', nameRules, {
      ...ERROR_OPTIONS,
      errorsContainer: `.first_name-error-container`,
    })
    .addField('#second_name', nameRules, {
      ...ERROR_OPTIONS,
      errorsContainer: `.second_name-error-container`,
    })
    .addField('#email', emailRules, {
      ...ERROR_OPTIONS,
      errorsContainer: `.email-error-container`,
    })
    .addField('#phone', phoneRules, {
      ...ERROR_OPTIONS,
      errorsContainer: `.phone-error-container`,
    })
    .addField('#login', loginRules, {
      ...ERROR_OPTIONS,
      errorsContainer: `.login-error-container`,
    })
    .addField('#password', passwordRules, {
      ...ERROR_OPTIONS,
      errorsContainer: `.password-error-container`,
    })
    .addField('#confirm_password', confirmPasswordRule, {
      ...ERROR_OPTIONS,
      errorsContainer: `.confirm_password-error-container`,
    })
    .onSuccess(event => {
      const formEvent = event as FormDataEvent
      const form = formEvent.target as HTMLFormElement
      registerUser(form)
      console.log('Валидация прошла успешно.', formEvent.target)
    })
    .onFail(() => {
      console.log('Валидация завершена с ошибками.')
    })
}

export { loginFormValidation, registerFormValidation }

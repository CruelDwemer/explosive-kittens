import JustValidate from 'just-validate'
import {
  loginRules,
  passwordRules,
  confirmPasswordRule,
  nameRules,
  emailRules,
  phoneRules,
} from '../../../shared/constants/validation-rules'
import { handleRegiser } from './handleRequest'
// TODO: Переместить в папку entities/user/constants
const options = {
  errorLabelStyle: {
    fontSize: '0.8rem',
    lineHeight: '1rem',
    color: 'rgb(184, 50, 50)',
  },
  errorLabelCssClass: 'auth-error-label',
}

// TODO: Переместить в папку entities/user/lib
const formValidation = () => {
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
      handleRegiser(form)
      console.log('Валидация прошла успешно.', formEvent.target)
    })
    .onFail(() => {
      console.log('Валидация завершена с ошибками.')
    })
}

export { formValidation }

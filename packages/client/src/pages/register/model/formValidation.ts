import JustValidate from 'just-validate'
import {
  loginRules,
  passwordRules,
  confirmPasswordRule,
  nameRules,
  emailRules,
  phoneRules,
} from '../../../shared/model/validation-rules'
import { handleRegiser } from './handleRequest'

const errorStyle = {
  errorLabelStyle: {
    fontSize: '0.8rem',
    lineHeight: '1rem',
    color: 'rgb(184, 50, 50)',
  },
  errorLabelCssClass: 'login-error-label',
}

const formValidation = () => {
  const validator = new JustValidate('#register-form')
  validator
    .addField('#first_name', nameRules, errorStyle)
    .addField('#second_name', nameRules, errorStyle)
    .addField('#email', emailRules, errorStyle)
    .addField('#phone', phoneRules, errorStyle)
    .addField('#login', loginRules, errorStyle)
    .addField('#password', passwordRules, errorStyle)
    .addField('#confirm_password', confirmPasswordRule, errorStyle)
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

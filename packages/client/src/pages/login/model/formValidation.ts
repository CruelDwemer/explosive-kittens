import JustValidate from 'just-validate'
import {
  loginRules,
  passwordRules,
} from '../../../shared/model/validation-rules'
import { handleLogin } from './handleRequest'

const errorStyle = {
  errorLabelStyle: {
    fontSize: '0.8rem',
    lineHeight: '1rem',
    color: 'rgb(184, 50, 50)',
  },
  errorLabelCssClass: 'auth-error-label',
  focusInvalidField: false,
}

// errorLabelCssClass: 'auth-error-label',

const formValidation = () => {
  const validator = new JustValidate('#auth-form')
  validator
    .addField('#login', loginRules, errorStyle)
    .addField('#password', passwordRules, errorStyle)
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

export { formValidation }

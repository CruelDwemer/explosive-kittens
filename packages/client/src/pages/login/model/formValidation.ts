import JustValidate from 'just-validate'
import {
  loginRules,
  passwordRules,
} from '../../../shared/model/validation-rules'
import { handleLogin } from './handleRequest'

const formValidation = () => {
  const validator = new JustValidate('#login-form')
  validator
    .addField('#login', loginRules)
    .addField('#password', passwordRules)
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

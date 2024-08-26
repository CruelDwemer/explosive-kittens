import JustValidate from 'just-validate'
import {
  loginRules,
  passwordRules,
} from '../../../shared/model/validation-rules'

enum Rules {
  Required = 'required',
  MinLength = 'minLength',
  MaxLength = 'maxLength',
}

const formValidation = () => {
  const validator = new JustValidate('#login-form')
  validator
    .addField('#login', loginRules)
    .addField('#password', passwordRules)
    .onSuccess(() => {
      console.log('Валидация прошла успешно.')
    })
    .onFail(() => {
      console.log('Валидация завершена с ошибками.')
    })
  console.log(validator)
}

export { formValidation }

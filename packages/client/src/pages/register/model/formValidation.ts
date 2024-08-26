import JustValidate from 'just-validate'
import {
  loginRules,
  passwordRules,
  confirmPasswordRule,
  nameRules,
  emailRules,
  phoneRules,
} from '../../../shared/model/validation-rules'

const formValidation = () => {
  const validator = new JustValidate('#register-form')
  validator
    .addField('#first_name', nameRules)
    .addField('#second_name', nameRules)
    .addField('#email', emailRules)
    .addField('#phone', phoneRules)
    .addField('#login', loginRules)
    .addField('#password', passwordRules)
    .addField('#confirm_password', confirmPasswordRule)
    .onSuccess(() => {
      console.log('Валидация прошла успешно.')
    })
    .onFail(() => {
      console.log('Валидация завершена с ошибками.')
    })
}

export { formValidation }

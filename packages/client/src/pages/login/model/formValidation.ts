import JustValidate from 'just-validate'
import {
  loginRules,
  passwordRules,
} from '../../../shared/constants/validation-rules'
import { handleLogin } from './handleRequest'
// TODO: Переместить в папку entities/user/constants
const options = {
  errorsContainer: '#second-error-field',
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

export { formValidation }

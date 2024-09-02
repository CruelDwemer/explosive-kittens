import JustValidate from 'just-validate'
import {
  loginRules,
  passwordRules,
  confirmPasswordRule,
  nameRules,
  emailRules,
  phoneRules,
} from './validation-rules'

const options = {
  errorLabelStyle: {
    fontSize: '0.8rem',
    lineHeight: '1rem',
    color: 'rgb(184, 50, 50)',
  },
  errorLabelCssClass: 'auth-error-label',
  validateBeforeSubmitting: true,
  focusInvalidField: false,
}

const validateElement = (id: string) => {
  const validator = new JustValidate('#auth-form', {
    focusInvalidField: false,
    errorsContainer: '.custom-error-container',
  })

  const rules =
    id === 'first_name' || id === 'second_name'
      ? nameRules
      : id === 'login'
      ? loginRules
      : id === 'password'
      ? passwordRules
      : id === 'email'
      ? emailRules
      : id === 'phone'
      ? phoneRules
      : confirmPasswordRule
  validator
    .addField(`#${id}`, rules, {
      ...options,
      errorsContainer: `.${id}-error-container`,
    })
    .onFail(() => console.log('failed', `.${id}-error-container`))
    .revalidate()
  // validator.destroy();
}

export { validateElement }

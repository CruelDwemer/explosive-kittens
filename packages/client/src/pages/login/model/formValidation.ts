import JustValidate from 'just-validate'

enum Rules {
  Required = 'required',
  MinLength = 'minLength',
}

const formValidation = () => {
  const validator = new JustValidate('#login-form')
  validator
    .addField('#login', [
      {
        rule: Rules.MinLength,
        value: 3,
        errorMessage: 'Wrong length',
      },
    ])
    .onValidate(() => {
      console.log('val')
    })
    .onFail(() => {
      console.log('fail')
    })
  console.log(validator)
}

export { formValidation }

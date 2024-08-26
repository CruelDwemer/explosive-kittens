enum Rules {
  Required = 'required',
  MinLength = 'minLength',
  MaxLength = 'maxLength',
}

const loginRules = [
  {
    rule: Rules.Required,
    errorMessage: 'Укажите логин',
  },
  {
    rule: Rules.MinLength,
    value: 3,
    errorMessage: 'Длина должна быть больше 3 символов',
  },
  {
    rule: Rules.MaxLength,
    value: 20,
    errorMessage: 'Длина должна быть не больше 20 символов',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value as string
      return input.match(/^[\w-]+$/) ? true : false
    },
    errorMessage: 'Для логина опускаются только латиница и цифры.',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value as string
      return input.match(/[a-zA-Z]/) ? true : false
    },
    errorMessage: 'Логин не должен состоять только из цифр.',
  },
]

const passwordRules = [
  {
    rule: Rules.Required,
    errorMessage: 'Укажите пароль',
  },
  {
    rule: Rules.MinLength,
    value: 8,
    errorMessage: 'Длина должна быть больше 8 символов',
  },
  {
    rule: Rules.MaxLength,
    value: 40,
    errorMessage: 'Длина должна быть не больше 40 символов',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value as string
      return input.match(/[0-9]/) ? true : false
    },
    errorMessage: 'Пароль должен содержать хотя бы одну цифру.',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value as string
      const upperCaseLetters = input
        .split('')
        .filter(
          character =>
            character == character.toUpperCase() &&
            Number.isNaN(Number(character))
        )
      return upperCaseLetters.length !== 0 ? true : false
    },
    errorMessage: 'Хотя бы одна буква в пароле должна быть заглавной.',
  },
]

export { loginRules, passwordRules }

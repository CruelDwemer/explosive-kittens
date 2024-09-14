enum Rules {
  Required = 'required',
  MinLength = 'minLength',
  MaxLength = 'maxLength',
}

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

const confirmPasswordRule = [
  {
    validator: <V, C>(value: V, context: C) => {
      //@ts-expect-error fix later
      const password = context[`#password`].elem.value as string
      return password === value ? true : false
    },
    errorMessage: 'Пароли не совпадают.',
  },
]

const nameRules = [
  {
    rule: Rules.Required,
    errorMessage: 'Укажите имя/фамилию.',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value as string
      return input.match(/[a-zA-Zа-яА-ЯёЁ]/) ? true : false
    },
    errorMessage: 'В имени/фамилии допускаются только кирилица м латиница',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value ? value : null
      if (input === null) {
        return false
      }
      const result = input as string
      return result[0] == result[0].toUpperCase() ? true : false
    },
    errorMessage: 'Первая буква имени/фамилии должна быть заглавной',
  },
]

const emailRules = [
  {
    rule: Rules.Required,
    errorMessage: 'Укажите почтовый адрес.',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value as string
      return input.match(/^[-_@.a-zA-Z0-9]+$/) ? true : false
    },
    errorMessage: 'В почтовом адреме используются некорректные симолы',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value as string
      return input.match(/[@]+[-_a-zA-Z0-9]+[.]+/) ? true : false
    },
    errorMessage: 'В почтовом адреме отсутствуют необходимые символы.',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      if (!value) {
        return false
      }
      const input = value as string
      const substring = input.split('@')[1].split('.')[0]
      return substring.match(/[a-zA-Z]/) ? true : false
    },
    errorMessage: 'Неправильно указана почта',
  },
]

const phoneRules = [
  {
    rule: Rules.Required,
    errorMessage: 'Укажите телефонный номер',
  },
  {
    rule: Rules.MinLength,
    value: 10,
    errorMessage: 'Неверная длина телефонного номера',
  },
  {
    rule: Rules.MaxLength,
    value: 15,
    errorMessage: 'Неверная длина телефонного номера',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value as string
      return input.match(/^[0-9]+$/) ? true : false
    },
    errorMessage: 'Телефонный номер должен состоять из цифр',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value as string
      return input[0] === '+' || typeof Number(input[0]) === 'number'
        ? true
        : false
    },
    errorMessage: 'Телефонный номер должен начинаться с цифры или символа +',
  },
]

const messageRules = [
  {
    rule: Rules.Required,
    errorMessage: 'Сообщение не должно быть пустым',
  },
]

const nicknameRules = [
  {
    rule: Rules.Required,
    errorMessage: 'Укажите никнейм',
  },
  {
    rule: Rules.MinLength,
    value: 3,
    errorMessage: 'Не меньше 3 симолов',
  },
  {
    rule: Rules.MaxLength,
    value: 20,
    errorMessage: 'Не больше 20 символов',
  },
  {
    validator: <V, C>(value: V, context: C) => {
      const input = value as string
      return input.match(/^[\w-]+$/) ? true : false
    },
    errorMessage: 'Для никнейма допускаются только латиница и цифры.',
  },
]

export {
  passwordRules,
  nameRules,
  emailRules,
  phoneRules,
  messageRules,
  nicknameRules,
  confirmPasswordRule,
}

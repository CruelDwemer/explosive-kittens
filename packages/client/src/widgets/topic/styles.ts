import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    accordion_container: {
      width: '100%',
      backgroundColor: currentTheme.palette.forms.main,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
      padding: 1,
    },
    flex_center: {
      display: 'flex',
      justifyContent: 'center',
    },
    input_container: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 1,
    },
    input: {
      flexGrow: 1,
      '& input': {
        color: currentTheme.palette.text.primary,
        border: `2px solid ${currentTheme.palette.border.main}`,
        borderRadius: '4px',
      },
    },
    main_avatar: {
      width: 60,
      height: 60,
      backgroundColor: currentTheme.palette.background.secondary,
      color: currentTheme.palette.background.default,
    },
    avatar: {
      backgroundColor: currentTheme.palette.background.secondary,
      color: currentTheme.palette.background.default,
    },
    text_container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
    accordion: {
      backgroundColor: currentTheme.palette.forms.main,
      color: currentTheme.palette.text.primary,
      padding: 2,
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
      borderRadius: '4px',
    },
    icon: {
      color: currentTheme.palette.text.primary,
    },
    button: {
      color: currentTheme.palette.text.primary,
    },
    reactions: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',

      '& button': {
        '& svg': {
          color: currentTheme.palette.text.primary,
        },
      },
    },
  }
}

export default useStyle

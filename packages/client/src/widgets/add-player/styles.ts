import { light, dark } from '../../../theme'

const useStyle = (theme: string) => {
  const currentTheme = theme === 'light' ? light : dark
  return {
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      minHeight: '450px',
      backgroundColor: currentTheme.palette.forms.main,
      borderRadius: '4px',
      boxShadow: `${currentTheme.palette.shadow.main} 0px 0px 0px 1px`,
      p: 4,
    },
    text: {
      color: currentTheme.palette.text.primary,
    },
    button: {
      backgroundColor: currentTheme.palette.button.main,
    },
    input: {
      '& input': {
        color: currentTheme.palette.text.primary,
        border: `2px solid ${currentTheme.palette.border.main}`,
        borderRadius: '4px',
      },
    },
    icon: {
      color: currentTheme.palette.text.primary,
    },
    selector_container: {
      '& .MuiAutocomplete-option': {
        backgroundColor: currentTheme.palette.background.default,
        color: currentTheme.palette.text.primary,
      },

      '& .MuiAutocomplete-option:hover': {
        backgroundColor: currentTheme.palette.button.main,
        color: currentTheme.palette.text.primary,
      },

      '& .MuiAutocomplete-listbox': {
        padding: '0px',
      },
      '& .MuiAutocomplete-paper': {
        backgroundColor: currentTheme.palette.button.main,
      },
    },
    selector: {
      '> div': {
        '> label': {
          color: currentTheme.palette.text.primary,
        },
        '> input': {
          color: currentTheme.palette.text.primary,
          border: `2px solid ${currentTheme.palette.border.main}`,
        },
        '> div': {
          color: currentTheme.palette.text.primary,
          border: 'none',
        },
        '> div:focus': {
          color: currentTheme.palette.text.primary,
        },

        '& .MuiAutocomplete-endAdornment': {
          svg: {
            color: currentTheme.palette.text.primary,
          },
        },
      },
    },
  }
}

export default useStyle

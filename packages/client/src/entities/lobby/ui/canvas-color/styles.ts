const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  input: {
    width: '30%',
    input: {
      padding: '0',
      outline: '0',
      cursor: 'pointer',
      border: '1px solid black',
      borderRadius: '50%',
    },
    'input[type="color"]::-webkit-color-swatch-wrapper': {
      padding: 0,
    },
    'input[type="color"]::-webkit-color-swatch': {
      border: 'none',
      borderRadius: '50%',
    },
    ':before, &:hover :before, :after': {
      content: '""',
      border: 'none',
      borderBottom: 'none !important',
    },
  },
}

export default styles

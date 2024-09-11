const styles = {
  wrapper: {
    // TODO[1]: Используется на странице login, поэтому стоит вынести как отдельную переменную\theme mui
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    height: '100%',
  },
  paper: {
    padding: '8px',
    flexGrow: 0,
    height: '100%',
    position: 'relative',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  wordBlock: {
    flexBasis: '5%',
    textAlign: 'center',
  },
  toolsBlock: {
    flexBasis: '10%',
    paddingLeft: '32px',
    display: 'flex',
    gap: '24px',
    justifyContent: 'space-between',
  },

  tools: {
    display: 'flex',
    alignItems: 'end',
    gap: '32px',
    width: '100%',
  },
}

export default styles

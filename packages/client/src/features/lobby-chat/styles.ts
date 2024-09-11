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
    display: 'flex',
    flexDirection: 'column',
    // gap: '12px',
    height: '100%',
    flexGrow: 0,
    position: 'relative',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    overflow: 'hidden',
  },
}

export default styles

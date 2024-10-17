const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    // TODO[1]: Используется на странице lobby, поэтому стоит вынести как отдельную переменную\theme mui
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    padding: '32px',
    height: '470px',
    borderRadius: '16px',
    paddingBottom: '20px',
  },
}

export default styles

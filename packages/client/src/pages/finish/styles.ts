const styles = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    minHeight: '450px',
    bgcolor: 'background.paper',
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
  },
  box: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: '#00000038',
    textAlign: 'center',
    height: '100%',
    color: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
} as const

export default styles

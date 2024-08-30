import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  },
  container: {
    position: 'relative',
    boxSizing: 'border-box',
    boxShadow:
      'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    padding: theme.spacing(4, 4),
    height: 470,
    borderRadius: 16,
  },
}))

export default useStyles

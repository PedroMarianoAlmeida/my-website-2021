import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  titleResponsive: {
    fontSize: '2rem',
    marginTop: theme.spacing(2),
  },
}))

const PageTitle = ({ title, desktopLayout }) => {
  const classes = useStyles()

  return (
    <Typography
      variant="h1"
      align="center"
      className={desktopLayout ? '' : classes.titleResponsive}
    >
      {title}
    </Typography>
  )
}

export default PageTitle

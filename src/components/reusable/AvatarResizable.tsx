import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const AvatarResizable = ({ alt, src, spacing }) => {
  const useStyles = makeStyles((theme) => ({
    size: {
      width: theme.spacing(spacing),
      height: theme.spacing(spacing),
    },
  }))

  const classes = useStyles()

  return <Avatar alt={alt} src={src} className={classes.size} />
}

export default AvatarResizable

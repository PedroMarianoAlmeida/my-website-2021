import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme) => ({
  mediaDesktop: {
    width: '100%',
    aspectRatio: `${560 / 315}`,
    gridArea: 'media',
    margin: theme.spacing(1),
  },

  mediaMobile: {
    width: '80vw',
    aspectRatio: `${560 / 315}`,
    alignSelf: 'center',
  },
}))

const ProjectMedia = ({ desktopLayout, youtubeLink }) => {
  const classes = useStyles()

  return (
    <CardMedia
      component="iframe"
      image={youtubeLink}
      className={`${
        desktopLayout ? classes.mediaDesktop : classes.mediaMobile
      }`}
      title="Contemplative Reptile"
    />
  )
}

export default ProjectMedia

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  rootMobile: {
    display: 'flex',
    flexDirection: 'column',
  },

  rootDesktop: {},

  thumbnail: {
    width: '560px',
    height: '315px',
  },
}))

const Project = ({ desktopLayout }) => {
  const classes = useStyles()

  return (
    <Card elevation={1}>
      <CardActionArea>
        <Typography
          variant="h4"
          align="center"
          component="h2"
          className={desktopLayout ? classes.rootDesktop : classes.rootMobile}
        >
          Dummy Coordinate
        </Typography>
        <CardMedia
          component="iframe"
          image="https://www.youtube.com/embed/Ke90Tje7VS0"
          className={classes.thumbnail}
          title="Contemplative Reptile"
        />

        <Box>
          <Typography display="inline">Description: </Typography>
          <Typography display="inline">Lorem </Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default Project

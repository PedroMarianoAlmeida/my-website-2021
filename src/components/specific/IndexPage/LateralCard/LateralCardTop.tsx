import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const LateralCardTop = ({ backgroundColor }) => {
  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    root: {
      backgroundColor,
    },
  }))

  const classes = useStyles()

  return (
    <Box
      className={classes.root}
      display="flex"
      py={1}
      flexDirection="column"
      justifyContent="center"
      boxShadow={5}
    >
      <Box alignSelf="center">
        <Avatar
          alt="Pedro Almeida Picture"
          src="/images/profile.jpeg"
          className={classes.large}
        />
      </Box>
      <Box my={1}>
        <Typography align="center">Pedro Almeida</Typography>
      </Box>
      <Typography align="center">Frontend Developer</Typography>
    </Box>
  )
}

export default LateralCardTop

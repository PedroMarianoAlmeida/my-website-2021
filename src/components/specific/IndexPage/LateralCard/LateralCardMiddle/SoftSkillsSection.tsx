import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'

const skills = [
  'Organized',
  'Detail Oriented',
  'Clean Code',
  'Technical Writer',
]

const Item = ({ skill }) => {
  const useStyles = makeStyles((theme) => ({
    icon: {
      color: 'green',
      marginRight: `${theme.spacing(2)}px`,
    },
  }))

  const classes = useStyles()

  return (
    <ListItem>
      <DoneOutlineIcon className={classes.icon} />
      <ListItemText primary={skill} />
    </ListItem>
  )
}

const SoftSkillsSection = ({ desktopLayout }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography align="center" variant="h6">
        Skills
      </Typography>
      <Box component="ul">
        {skills.map((skill) => (
          <Item skill={skill} key={skill} />
        ))}
      </Box>
    </Box>
  )
}

export default SoftSkillsSection

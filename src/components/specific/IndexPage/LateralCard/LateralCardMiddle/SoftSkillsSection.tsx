import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Box from '@material-ui/core/Box'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'green',
  },
}))

const skills = [
  'Organized',
  'Detail Oriented',
  'Clean Code',
  'Technical Writer',
]

const SoftSkillsSection = () => {
  const classes = useStyles()

  const Item = ({ skill }) => (
    <ListItem>
      <DoneOutlineIcon className={classes.icon} />
      <Box ml={2}>
        <ListItemText primary={skill} />
      </Box>
    </ListItem>
  )

  return (
    <Box>
      <Typography align="center" variant="h6">
        Skills
      </Typography>
      <List>
        {skills.map((skill) => (
          <Item skill={skill} key={skill} />
        ))}
      </List>
    </Box>
  )
}

export default SoftSkillsSection

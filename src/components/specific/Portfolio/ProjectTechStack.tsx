import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import SkillLogoFlexbox from '../Others/SkillLogoFlexbox'

const useStyles = makeStyles({
  techStack: {
    display: 'flex',
    alignItems: 'center',
  },
})

const ProjectTechStack = ({ techStack }) => {
  const classes = useStyles()

  return (
    <Box display="flex">
      <Typography variant="h6" display="inline" className={classes.techStack}>
        Tech Stack:{' '}
      </Typography>
      <SkillLogoFlexbox skillNames={techStack} justifyContent="start" />
    </Box>
  )
}

export default ProjectTechStack

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: `${theme.spacing(1)}px 0`,
  },
}))

import skills from './../../../../../data/skillsAndLogo'
import SkillLogoFlexbox from '../../../SkillLogoFlexbox'

const SkillSection = () => {
  const classes = useStyles()
  const allSkillNames = skills.map((skill) => skill.name)

  return (
    <Box className={classes.root}>
      <Typography align="center" variant="h6">
        Tech Stack
      </Typography>

      <SkillLogoFlexbox skillNames={allSkillNames} />
    </Box>
  )
}

export default SkillSection

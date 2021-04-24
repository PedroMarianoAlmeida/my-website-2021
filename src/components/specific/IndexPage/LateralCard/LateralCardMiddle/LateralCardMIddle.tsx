import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'

import { makeStyles } from '@material-ui/core/styles'
import LanguageSection from './LanguageSection'
import SkillSection from './SkillSection'
import SoftSkillsSection from './SoftSkillsSection'

const LateralCardMiddle = ({ backgroundColor }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor,
    },
  }))

  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <LanguageSection />
      <Box px={2}>
        <Divider />
      </Box>

      <SkillSection />

      <Box px={2}>
        <Divider />
      </Box>

      <SoftSkillsSection />
    </Box>
  )
}

export default LateralCardMiddle

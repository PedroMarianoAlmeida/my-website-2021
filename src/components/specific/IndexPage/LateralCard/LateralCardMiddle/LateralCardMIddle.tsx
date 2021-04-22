import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'

import { makeStyles } from '@material-ui/core/styles'
import LanguageSection from './LanguageSection'
import SkillSection from './SkillSection'

const LateralCardMiddle = ({ backgroundColor }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor,
    },
  }))

  const classes = useStyles()

  return (
    <Box px={2} className={classes.root} boxShadow={3}>
      <LanguageSection />
      <Divider />
      <SkillSection />
    </Box>
  )
}

export default LateralCardMiddle

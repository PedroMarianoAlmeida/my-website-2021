import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'

import { makeStyles } from '@material-ui/core/styles'
import LanguageSection from './LanguageSection'
import SkillSection from './SkillSection'
import SoftSkillsSection from './SoftSkillsSection'

const LateralCardMiddle = ({ backgroundColor, desktopLayout }) => {
  const useStyles = makeStyles((theme) => ({
    rootDesktop: {
      backgroundColor,
      overflow: 'auto',
      flex: '0 1 40vh',
    },

    rootMobile: {
      backgroundColor,
    },

    divider: {
      padding: `0 ${theme.spacing(1)}px `,
    },
  }))

  const classes = useStyles()

  return (
    <Box
      className={desktopLayout ? classes.rootDesktop : classes.rootMobile}
      height="100%"
    >
      <LanguageSection />
      <Divider className={classes.divider} />
      <SkillSection />
      <Divider className={classes.divider} />
      <SoftSkillsSection desktopLayout={desktopLayout} />
    </Box>
  )
}

export default LateralCardMiddle

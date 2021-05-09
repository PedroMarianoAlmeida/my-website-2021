import Box from '@material-ui/core/Box'
import LateralCard from '../src/components/specific/IndexPage/LateralCard/LateralCard'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import BodyStructure from '../src/components/specific/IndexPage/Body/BodyStructure'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((appBarHeight) => ({
  rootDesktop: {
    display: 'grid',
    gridTemplateColumns: 'calc(100vw - 300px) 300px',
    height: `calc(100vh - 64px)`,
    alignItems: 'center',
    justifyItems: 'center',
  },

  rootMobile: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default function Home({ appBarHeight }) {
  const classes = useStyles(appBarHeight)
  const desktopLayout = useMediaQuery('(min-width:960px)') //md break point
  console.log(appBarHeight)

  return (
    <Box className={desktopLayout ? classes.rootDesktop : classes.rootMobile}>
      <BodyStructure desktopLayout={desktopLayout} />
      <LateralCard desktopLayout={desktopLayout} />
    </Box>
  )
}

import Box from '@material-ui/core/Box'
import LateralCard from '../src/components/specific/IndexPage/LateralCard/LateralCard'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import BodyStructure from '../src/components/specific/IndexPage/Body/BodyStructure'

import { makeStyles } from '@material-ui/core/styles'

export default function Home({ appBarHeight }) {
  const useStyles = makeStyles({
    rootDesktop: {
      display: 'grid',
      gridTemplateColumns: 'calc(100vw - 300px) 300px',
      height: `calc(100vh - ${appBarHeight})`, //Because of this all the useStyles in inside the component
      alignItems: 'center',
      justifyItems: 'center',
    },

    rootMobile: {
      display: 'flex',
      flexDirection: 'column',
    },
  })

  const classes = useStyles()
  const desktopLayout = useMediaQuery('(min-width:960px)') //md break point

  return (
    <Box className={desktopLayout ? classes.rootDesktop : classes.rootMobile}>
      <BodyStructure desktopLayout={desktopLayout} />
      <LateralCard desktopLayout={desktopLayout} />
    </Box>
  )
}

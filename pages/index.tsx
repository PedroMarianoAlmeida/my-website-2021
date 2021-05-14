import Box from '@material-ui/core/Box'
import LateralCard from '../src/components/specific/IndexPage/LateralCard/LateralCard'
import BodyStructure from '../src/components/specific/IndexPage/Body/BodyStructure'
import { makeStyles } from '@material-ui/core/styles'

import TitleAndDescriptionSEO from '../src/components/reusable/TitleAndDescriptionSEO'

export default function Home({ appBarHeight, desktopLayout }) {
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

  return (
    <>
      <TitleAndDescriptionSEO
        title="Pedro Programmer | Home Page"
        description="Pedro Programmer official webpage"
      />
      <Box className={desktopLayout ? classes.rootDesktop : classes.rootMobile}>
        <BodyStructure desktopLayout={desktopLayout} />
        <LateralCard desktopLayout={desktopLayout} />
      </Box>
    </>
  )
}

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import PageTitle from '../src/components/specific/Others/PageTitle'
import AvatarResizable from './../src/components/reusable/AvatarResizable'
import AnimatedExternalLink from '../src/components/specific/Contact/AnimatedExternalLink'
import AnimatedEmailSnackbar from './../src/components/specific/Contact/AnimatedEmailSnackbar'
import TitleAndDescriptionSEO from '../src/components/reusable/TitleAndDescriptionSEO'

const Contact = ({ desktopLayout, appBarHeight }) => {
  const useStyles = makeStyles({
    centerScreen: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
      height: `calc(100vh - ${appBarHeight})`,
    },

    wrapper: {
      display: 'grid',
      gridTemplate: '1fr 2fr 1fr / 1fr 2fr 1fr',
      justifyContent: 'center',
      alignItems: 'center',
      height: '250px',
      width: '250px',
    },

    center: {
      gridArea: '2/2/2/2',
    },

    top: {
      gridArea: '1/2/1/2',
    },

    bottom: {
      gridArea: '3/2/3/2',
    },

    left: {
      gridArea: '2/1/2/1',
    },

    right: {
      gridArea: '2/3/2/3',
    },

    centralized: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  const classes = useStyles()

  return (
    <>
      <TitleAndDescriptionSEO
        title="Pedro Programmer | Contact"
        description="Talk directly with Pedro Programmer"
      />

      <Container className={classes.centerScreen}>
        <PageTitle title="Contact" desktopLayout={desktopLayout} />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexGrow={desktopLayout ? 0 : 1}
        >
          <Box className={classes.wrapper}>
            <Box className={`${classes.center} ${classes.centralized}`}>
              <AvatarResizable
                alt="Pedro Almeida Picture"
                src="/images/profile.jpeg"
                spacing={15}
              />
            </Box>

            <Box className={`${classes.top} ${classes.centralized} `}>
              <AnimatedExternalLink
                address={
                  'https://api.whatsapp.com/send?phone=+5521981853414&text=Hi%20Pedro'
                }
                alt="Whatsapp"
                src={'whatsapp.svg'}
              />
            </Box>

            <Box className={`${classes.left} ${classes.centralized} `}>
              <AnimatedExternalLink
                address={'https://www.linkedin.com/in/pedroprogrammer/'}
                alt="LinkedIn"
                src={'linkedin.svg'}
              />
            </Box>

            <Box className={`${classes.right} ${classes.centralized}`}>
              <AnimatedExternalLink
                address={'https://www.t.me/pedrobrasiloficial'}
                alt="Telegram"
                src={'telegram.svg'}
              />
            </Box>

            <Box className={`${classes.bottom} ${classes.centralized}`}>
              <AnimatedEmailSnackbar />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Contact

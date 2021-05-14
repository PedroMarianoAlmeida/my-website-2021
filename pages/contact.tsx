import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import PageTitle from '../src/components/specific/Others/PageTitle'

import AvatarResizable from './../src/components/reusable/AvatarResizable'
import EmailCopiedSnackbar from '../src/components/specific/IndexPage/LateralCard/EmailCopiedSnackbar'
import ContactAction from '../src/components/specific/Contact/ContactAction'
import AnimatedImage from '../src/components/specific/Contact/AnimatedImage'

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
  })

  const classes = useStyles()

  return (
    <Container className={classes.centerScreen}>
      <PageTitle title="Contact" desktopLayout={desktopLayout} />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box className={classes.wrapper}>
          <Box className={`${classes.center}`}>
            <AvatarResizable
              alt="Pedro Almeida Picture"
              src="/images/profile.jpeg"
              spacing={15}
            />
          </Box>

          <Box className={`${classes.top} `}>
            <AnimatedImage
              address={
                'https://api.whatsapp.com/send?phone=+5521981853414&text=Hi%20Pedro'
              }
              alt="Whatsapp"
              src={'whatsapp.svg'}
            />
          </Box>

          <Box className={`${classes.left} `}>
            <AnimatedImage
              address={'https://www.linkedin.com/in/pedroprogrammer/'}
              alt="LinkedIn"
              src={'linkedin.svg'}
            />
          </Box>

          <Box className={`${classes.right} `}>
            <AnimatedImage
              address={
                'https://api.whatsapp.com/send?phone=+5521981853414&text=Hi%20Pedro'
              }
              alt="Telegram"
              src={'telegram.svg'}
            />
          </Box>

          <Box className={`${classes.bottom}`}>
            <EmailCopiedSnackbar size={'40px'} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Contact

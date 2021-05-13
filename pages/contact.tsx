import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import PageTitle from '../src/components/specific/PageTitle'
import ContactAction from '../src/components/specific/contact/contactAction'
import AvatarResizable from './../src/components/reusable/AvatarResizable'

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
    },

    center: {
      gridArea: '2/2/2/2',
    },

    top: {
      gridArea: '1/2/1/2',
    },

    centralized: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  const classes = useStyles()

  return (
    <Container className={classes.centerScreen}>
      <PageTitle title="Contact" desktopLayout={desktopLayout} />

      <Box className={classes.wrapper}>
        <Box className={`${classes.center} ${classes.centralized}`}>
          <AvatarResizable
            alt="Pedro Almeida Picture"
            src="/images/profile.jpeg"
            spacing={20}
          />
        </Box>

        <Box className={`${classes.top} ${classes.centralized}`}>
          <ContactAction
            alt="Whatsapp"
            src="whatsapp.svg"
            address="https://api.whatsapp.com/send?phone=+5521981853414&text=Hi%20Pedro"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Contact

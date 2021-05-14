import { useState } from 'react'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import PageTitle from '../src/components/specific/Others/PageTitle'
import ContactAction from '../src/components/specific/Contact/ContactAction'
import AvatarResizable from './../src/components/reusable/AvatarResizable'
import EmailCopiedSnackbar from '../src/components/specific/IndexPage/LateralCard/EmailCopiedSnackbar'

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
      display: 'flex',
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

    buttonActionWrapper: {
      height: '50px',
      width: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  const classes = useStyles()

  const [mouseTop, setMouseTop] = useState(false)
  const [mouseRight, setMouseRight] = useState(false)
  const [mouseBottom, setMouseBottom] = useState(false)
  const [mouseLeft, setMouseLeft] = useState(false)

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

          <Box
            className={`${classes.top} ${classes.buttonActionWrapper} `}
            onMouseEnter={() => setMouseTop(true)}
            onMouseLeave={() => setMouseTop(false)}
          >
            <ContactAction
              alt="Whatsapp"
              src="whatsapp.svg"
              address="https://api.whatsapp.com/send?phone=+5521981853414&text=Hi%20Pedro"
              size={mouseTop ? '50px' : '40px'}
            />
          </Box>

          <Box
            className={`${classes.left} `}
            onMouseEnter={() => setMouseLeft(true)}
            onMouseLeave={() => setMouseLeft(false)}
          >
            <ContactAction
              alt="LinkedIn"
              src="linkedin.svg"
              address="https://www.linkedin.com/in/pedroprogrammer/"
              size={mouseLeft ? '50px' : '40px'}
            />
          </Box>

          <Box
            className={`${classes.right} `}
            onMouseEnter={() => setMouseRight(true)}
            onMouseLeave={() => setMouseRight(false)}
          >
            <ContactAction
              alt="Telegram"
              src="telegram.svg"
              address="https://api.whatsapp.com/send?phone=+5521981853414&text=Hi%20Pedro"
              size={mouseRight ? '50px' : '40px'}
            />
          </Box>

          <Box
            className={`${classes.bottom}`}
            onMouseEnter={() => setMouseBottom(true)}
            onMouseLeave={() => setMouseBottom(false)}
          >
            <EmailCopiedSnackbar size={mouseBottom ? '50px' : '40px'} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Contact

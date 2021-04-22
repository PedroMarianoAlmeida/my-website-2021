import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'

import ExternalIconButton from '../../../reusable/ExternalIconButton'
import EmailCopiedSnackbar from './EmailCopiedSnackbar'

const LateralCardBottom = ({ backgroundColor }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor,
    },
  }))

  const classes = useStyles()

  return (
    <Box py={2} className={classes.root} boxShadow={3}>
      <Typography variant="h6" align="center">
        Contact
      </Typography>

      <Box display="flex" flexDirection="row" justifyContent="space-around">
        <ExternalIconButton
          address="https://www.linkedin.com/in/pedroprogrammer/"
          icon={<FontAwesomeIcon icon={faLinkedin} />}
          alt="linkedIn"
        />

        <ExternalIconButton
          address="https://github.com/PedroMarianoAlmeida"
          icon={<FontAwesomeIcon icon={faGithub} />}
          alt="Github"
        />

        <ExternalIconButton
          address="https://api.whatsapp.com/send?phone=+5521981853414&text=Hi%20Pedro"
          icon={<FontAwesomeIcon icon={faWhatsapp} />}
          alt="Whatsapp"
        />

        <ExternalIconButton
          address="https://www.t.me/pedrobrasiloficial"
          icon={<FontAwesomeIcon icon={faTelegram} />}
          alt="Telegram"
        />

        <EmailCopiedSnackbar />
      </Box>
    </Box>
  )
}

export default LateralCardBottom

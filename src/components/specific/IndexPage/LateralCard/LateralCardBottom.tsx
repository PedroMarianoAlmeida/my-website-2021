import Image from 'next/image'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import ExternalIconButton from '../../../reusable/ExternalIconButton'
import EmailCopiedSnackbar from '../../Others/EmailCopiedSnackbar'

const socialMedia = [
  {
    name: 'Linkedin',
    path: 'linkedin.svg',
    address: 'https://www.linkedin.com/in/pedroprogrammer/',
  },
  {
    name: 'Github',
    path: 'github.svg',
    address: 'https://github.com/PedroMarianoAlmeida',
  },
  {
    name: 'Whatsapp',
    path: 'whatsapp.svg',
    address:
      'https://api.whatsapp.com/send?phone=+5521981853414&text=Hi%20Pedro',
  },
  {
    name: 'Telegram',
    path: 'telegram.svg',
    address: 'https://www.t.me/pedrobrasiloficial',
  },
]

const LateralCardBottom = ({ backgroundColor }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor,
    },
  }))

  const classes = useStyles()

  return (
    <Box py={2} className={classes.root} boxShadow={5}>
      <Typography variant="h6" align="center">
        Contact
      </Typography>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        {socialMedia.map((media) => (
          <ExternalIconButton
            address={media.address}
            icon={
              <Image
                alt={media.name}
                src={`/images/logos/${media.path}`}
                height={'30px'}
                width={'30px'}
              />
            }
            alt={media.name}
            key={media.name}
          />
        ))}

        <EmailCopiedSnackbar size="30px" />
      </Box>
    </Box>
  )
}

export default LateralCardBottom

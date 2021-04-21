import { useState } from 'react'

import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const EmailCopiedSnackbar = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    navigator.clipboard
      .writeText('pedroalmeidaprogrammer@gmail')
      .then(() => setOpen(true))
  }

  return (
    <>
      <IconButton aria-label="email" color="primary" onClick={handleClick}>
        <FontAwesomeIcon icon={faEnvelope} />
      </IconButton>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        message="pedroalmeidaprogrammer@gmail.com was copied"
        autoHideDuration={1500}
      />
    </>
  )
}

export default EmailCopiedSnackbar

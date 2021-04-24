import Image from 'next/image'
import { useState } from 'react'

import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import DeleteIcon from '@material-ui/icons/Delete'

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
        <Image
          alt="pedroalmeidaprogrammer@gmail"
          src={`/images/logos/envelope.svg`}
          height={'30px'}
          width={'30px'}
        />
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

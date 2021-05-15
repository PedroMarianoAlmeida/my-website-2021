import Image from 'next/image'
import { useState } from 'react'

import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

const EmailCopiedSnackbar = ({ size }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    navigator.clipboard
      .writeText('pedroalmeidaprogrammer@gmail.com')
      .then(() => setOpen(true))
  }

  return (
    <>
      <IconButton aria-label="email" color="primary" onClick={handleClick}>
        <Image
          alt="pedroalmeidaprogrammer@gmail.com"
          src={`/images/logos/envelope.svg`}
          height={size}
          width={size}
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

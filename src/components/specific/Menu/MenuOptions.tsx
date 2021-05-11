import { useState } from 'react'
import Link from 'next/link'

import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

const MenuOptions = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <Typography>Home</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/portfolio">
            <Typography>Portfolio</Typography>
          </Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <MenuItem onClick={handleClose}>Volunteer</MenuItem> */}
      </Menu>
    </>
  )
}

export default MenuOptions

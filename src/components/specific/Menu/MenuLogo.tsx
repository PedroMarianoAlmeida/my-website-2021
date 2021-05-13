import Link from 'next/link'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontFamily: 'Special Elite',
    cursor: 'pointer',
    display: 'inline',
  },

  titleResponsive: {
    fontSize: '1.4rem',
  },
})

const MenuLogo = ({ desktopLayout }) => {
  const classes = useStyles()

  return (
    <Box flexGrow={1} display="flex" justifyContent="center">
      <Link href="/">
        <Typography
          variant="h4"
          className={`${classes.title} ${
            desktopLayout ? '' : classes.titleResponsive
          }`}
        >
          {'< '}Pedro Programmer{' />'}
        </Typography>
      </Link>
    </Box>
  )
}

export default MenuLogo

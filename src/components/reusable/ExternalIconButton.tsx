import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'

const ExternalIconButton = ({ address, icon, alt }) => {
  return (
    <IconButton aria-label={alt}>
      <Link href={address} target="_blank" rel="noopener noreferrer">
        {icon}
      </Link>
    </IconButton>
  )
}

export default ExternalIconButton

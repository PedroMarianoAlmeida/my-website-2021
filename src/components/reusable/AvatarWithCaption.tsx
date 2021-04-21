import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'

const AvatarWithCaption = ({ avatarAddress, caption, alt }) => {
  return (
    <Box>
      <Avatar alt={alt} src={avatarAddress} />
      {caption}
    </Box>
  )
}

export default AvatarWithCaption

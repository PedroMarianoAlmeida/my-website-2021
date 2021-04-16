import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

const AvatarWithCaption = ({ avatarAddress, caption }) => {
  return (
    <Box>
      <Avatar alt="Remy Sharp" src={avatarAddress} />
      {caption}
    </Box>
  );
};

export default AvatarWithCaption;

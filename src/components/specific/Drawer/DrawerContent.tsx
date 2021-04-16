import HomeIcon from "@material-ui/icons/Home";
import NotesIcon from "@material-ui/icons/Notes";
import ContactsIcon from "@material-ui/icons/Contacts";
import WorkIcon from "@material-ui/icons/Work";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import Divider from "@material-ui/core/Divider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";

import DrawerMenuItem from "../../reusable/DrawerMenu/DrawerMenuItem";

const DrawerContent = () => {
  return (
    <>
      <DrawerMenuItem icon={<HomeIcon />} text="Home" />
      <DrawerMenuItem icon={<WorkIcon />} text="Projects" />
      <DrawerMenuItem icon={<MoneyOffIcon />} text="Volunteering" />
      <DrawerMenuItem
        icon={<FontAwesomeIcon icon={faCanadianMapleLeaf} size="2x" />}
        text="Canadian Experience"
      />
      <DrawerMenuItem icon={<NotesIcon />} text="Articles" />
      <Divider />
      <DrawerMenuItem icon={<ContactsIcon />} text="Contact" />
    </>
  );
};

export default DrawerContent;

import Divider from "@material-ui/core/Divider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons"; //This component is from a different library than others
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import DrawerMenuItem from "../../reusable/DrawerMenu/DrawerMenuItem";

const DrawerContent = () => {
  return (
    <>
      <DrawerMenuItem
        icon={<FontAwesomeIcon icon={faHome} size="lg" />}
        text="Home"
      />
      <DrawerMenuItem
        icon={<FontAwesomeIcon icon={faAddressCard} size="lg" />}
        text="Contact"
      />

      <DrawerMenuItem
        icon={<FontAwesomeIcon icon={faDownload} size="lg" />}
        text="Curriculum"
      />

      <Divider />

      <DrawerMenuItem
        icon={<FontAwesomeIcon icon={faTasks} size="lg" />}
        text="Projects"
      />

      <DrawerMenuItem
        icon={<FontAwesomeIcon icon={faCanadianMapleLeaf} size="lg" />}
        text="Canadian Exp"
      />

      <Divider />

      <DrawerMenuItem
        icon={<FontAwesomeIcon icon={faSearch} size="lg" />}
        text="Q & A"
      />
      <DrawerMenuItem
        icon={<FontAwesomeIcon icon={faCode} size="lg" />}
        text="Code Snipets"
      />
    </>
  );
};

export default DrawerContent;

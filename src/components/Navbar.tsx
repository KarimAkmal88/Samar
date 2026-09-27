import {
  Navbar as HeroUiNavbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { Link } from "react-router-dom";
import samarLogo from '../assets/logos/samar-app-icon.png';
import samarWord from '../assets/logos/samar-wordmark-light.png'
import defaultProfile from '../assets/logos/default-profile-image.jpg'

export default function Navbar() {
  return (
    <HeroUiNavbar className="py-1 border-b border-b-text-secondary rounded-2xl" maxWidth="full" classNames={{wrapper: 'grow'}}>
      <NavbarBrand>
        <Link to={"/"} className="px-2 py-3 flex flex-row gap-2">
          <img src={samarLogo} alt="samar" className="w-13 h-12"></img>
          <img src={samarWord} alt="samar-wordmark" className="h-10"></img>
        </Link>
      </NavbarBrand>

      <NavbarContent as="div" justify="end" className="py-3 flex flex-row gap-1 px-5 ml-20 md:ml-0">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform w-12 h-12 rounded-full border ring-1 ring-primary cursor-pointer object-cover overflow-hidden "
              color="secondary"
              name={"user name"}
              src={defaultProfile}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" className="bg-elevated flex flex-col gap-3 rounded-xl ">
            <DropdownItem key="profile">
              <Link className="h-14 text-text-primary" to="/profile">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">test@test.test</p>
              </Link>
            </DropdownItem>
            <DropdownItem key="signin" className="text-text-primary">
              <Link to={"/signin"} className="text-text-primary px-1">Sign-In</Link>
            </DropdownItem>
            <DropdownItem key="signup" className="text-text-primary">
              <Link to={"/signup"} className="text-text-primary px-1">Sign-Up</Link>
            </DropdownItem>  
            <DropdownItem key="logout" className="text-danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </HeroUiNavbar>
  );
}
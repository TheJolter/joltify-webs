import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import EvmWalletButton from "./EvmWalletButton/EvmWalletButton";
import CosmosWalletButton from "./CosmosWalletButton/CosmosWalletButton";
import Logo from "./Logo/Logo";
import Menu from "./Menu";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <Menu />
      </NavbarContent>

      <NavbarContent
        justify="end"
      >
        <NavbarItem>
          <EvmWalletButton />
        </NavbarItem>
        <NavbarItem>
          <CosmosWalletButton />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

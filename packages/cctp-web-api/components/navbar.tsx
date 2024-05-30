import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@nextui-org/react";
import EvmWalletButton from "./EvmWalletButton/EvmWalletButton";
import CosmosWalletButton from "./CosmosWalletButton/CosmosWalletButton";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img src="/images/jolt-token.svg" style={{height: '32px'}} alt="" />
            <p className="font-bold text-inherit">Joltify</p>
          </NextLink>
        </NavbarBrand>
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

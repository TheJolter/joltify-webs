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
import Link from "next/link";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img src="/images/logo-pathr.png" style={{height: '32px'}} alt="" />
            <p className="font-bold text-inherit pl-2">USDC Bridge</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href='https://app.pathr.io' target="_blank" className="underline font-bold">Pathr</Link>
        </NavbarItem>
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

"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { observer } from "mobx-react-lite";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useStore } from "@/stores/hooks";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export default observer(function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const modalStore = useStore('modalStore')

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {children}
        <Modal isOpen={!!modalStore.modalInfo} onOpenChange={()=>modalStore.closeModal()} isDismissable={false}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              {modalStore.modalInfo?.title}
            </ModalHeader>
            <ModalBody className="pb-4">
              {modalStore.modalInfo?.body}
            </ModalBody>
          </ModalContent>
        </Modal>
      </NextThemesProvider>
    </NextUIProvider>
  );
})
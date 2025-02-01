import { useTheme } from "@/config/ThemeContext";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import { Tooltip } from "@heroui/tooltip";
import CalculateIcon from '@mui/icons-material/Calculate';
import HistoryIcon from '@mui/icons-material/History';

export default function ModalInfo() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { theme } = useTheme()

    return (
        <>
            <Tooltip content='Ajuda' className="text-foreground-900">
                <Button id="help" excludeFromTabOrder isIconOnly radius="full" onPress={onOpen} className="text-xl">?</Button>
            </Tooltip>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="text-foreground-900">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Atalhos</ModalHeader>
                            <ModalBody>
                                <p>
                                    Clique <Kbd keys={["tab"]} className="font-bold">TAB</Kbd> para alternar entre a calculadora <CalculateIcon /> e o histórico <HistoryIcon />.
                                </p>
                                <p>
                                    Você também pode realizar os cálculos diretamente pelo teclado, basta clicar na tecla correspondente ao botão.
                                </p>
                                <span>
                                    <p>
                                        AC = <span className="font-bold">{`}`}</span>
                                    </p>
                                    <p>
                                        C = <span className="font-bold">C</span>
                                    </p>
                                    <p>
                                        DEL = <span className="font-bold">Del</span>
                                    </p>
                                </span>
                            </ModalBody>
                            <ModalFooter>
                                <Button color={theme === 'light' ? 'primary' : 'secondary'} onPress={onClose}>
                                    Fechar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
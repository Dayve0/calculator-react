'use client'

import { useEffect, useState } from "react";

// Components
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { Tooltip } from "@heroui/tooltip";
import CalculateIcon from '@mui/icons-material/Calculate';
import HistoryIcon from '@mui/icons-material/History';
import ModalInfo from "./modalInfo";
import ThemeToggle from "./themeToggle";

export default function Calculator() {

    type IHistory = {
        expression: string;
        result: string;
    };

    type IButton = {
        value: string;
        key: string;
        type: string
    }

    const buttons: IButton[] = [
        { value: "AC", key: '}', type: "clear" },
        { value: "C", key: 'c', type: "clear" },
        { value: "DEL", key: 'Delete', type: "clear" },
        { value: "/", key: '/', type: "operator" },
        { value: "7", key: '7', type: "number" },
        { value: "8", key: '8', type: "number" },
        { value: "9", key: '9', type: "number" },
        { value: "*", key: '*', type: "operator" },
        { value: "4", key: '4', type: "number" },
        { value: "5", key: '5', type: "number" },
        { value: "6", key: '6', type: "number" },
        { value: "-", key: '-', type: "operator" },
        { value: "1", key: '1', type: "number" },
        { value: "2", key: '2', type: "number" },
        { value: "3", key: '3', type: "number" },
        { value: "+", key: '+', type: "operator" },
        { value: "", key: '{', type: "operator" },
        { value: "0", key: '0', type: "number" },
        { value: ".", key: '.', type: "number" },
        { value: "=", key: '=', type: "calculate" },
    ];

    const [expression, setExpression] = useState<string>("");
    const [calculation, setCalculation] = useState<string>("0");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [history, setHistory] = useState<IHistory[]>([]);

    function handleButtonPress(button: IButton) {

        const lastIsOperator = Number.isNaN(Number(expression.slice(-1)));
        const isOperator = Number.isNaN(Number(button.value));

        switch (button.type) {
            case "operator":

                if (lastIsOperator && isOperator) { return }

                setExpression((prev) => prev + button.value);
                break;
            case "calculate":

                if (expression == "" || lastIsOperator) { return }

                try {
                    const result = eval(expression); // Use eval para calcular a expressão
                    setCalculation(result.toString());
                    setExpression(result.toString());
                    setHistory((prev) => [...prev, { expression, result: result.toString() }],);
                } catch (error) {
                    console.error('Erro ao calcular', error);
                }
                break;
            case "clear":
                if (button.value === "AC") {
                    setExpression("");
                    setCalculation("0");
                }
                if (button.value === "C") {
                    setExpression("");
                }
                if (button.value === "DEL") {
                    setExpression(expression.slice(0, -1));
                }
                break;
            default:
                setExpression((prev) => prev + button.value)
                break;
        }
    };

    useEffect(() => {

        const handleKeybordPress = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase(); // Convertendo para lowercase para maior consistência

            if (key === 'tab') {
                setIsOpen(!isOpen)
                e.preventDefault()
                return
            }
            if (key === '?') {
                const help = document.getElementById('help')

                if (help) {
                    help.click()
                }
            }

            const button = buttons.find((b) => b.key.toLowerCase() === key);

            if (button) {
                handleButtonPress(button);
            }
        };


        addEventListener("keydown", handleKeybordPress);

        return () => {
            removeEventListener("keydown", handleKeybordPress)
        }

    }, [expression, isOpen]);

    return (
        <div className="flex flex-col gap-2 text-foreground-900">

            {/* Switch Calculator/History && Switch theme */}
            <div className="flex justify-between items-center w-full">
                <Tooltip content={isOpen ? 'Calculadora' : 'Histórico'} className="text-foreground-900">
                    <Button
                        onPress={() => setIsOpen(!isOpen)}
                        className="!w-[2rem] transition-all ease-in-out"
                        radius="full"
                        isIconOnly
                        tabIndex={-1}
                    >
                        {isOpen ? (
                            <CalculateIcon />
                        ) : (
                            <HistoryIcon />
                        )}
                    </Button>
                </Tooltip>

                <ThemeToggle />
            </div>

            <div className="flex">

                {/* Calculator */}
                <section className={`
                    w-[20rem] h-[30rem] flex flex-col gap-4 justify-center items-center border-[3px]
                    shadow-lg rounded-md p-3 z-10
                    bg-white shadow-blue-500/70 border-blue-500 
                    dark:bg-black dark:shadow-purple-500/70 dark:border-purple-500 
                    `}>
                    <div className="flex flex-col gap-0 w-full">
                        <Textarea
                            classNames={{
                                input: 'text-lg font-semibols',
                                inputWrapper: "rounded-b-none",
                            }}
                            value={expression}
                            disabled
                        />
                        <div className="rounded-b-sm flex justify-end items-center py-1 px-2 font-bold bg-[#f2f2f3] dark:bg-[#2a2a2d]">
                            {calculation}
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {buttons.map((button) => (
                            <Button
                                id={button.key}
                                onPress={() => { handleButtonPress(button) }}
                                tabIndex={-1}
                                key={button.value}
                                type="button"
                                className={`
                                rounded-md min-w-11 h-11 
                                font-medium text-lg col-span-1 
                                bg-[#d9d9d9]
                                dark:bg-[#212121]
                                ${button.type === "clear" && "text-red-500 dark:text-red-500"} 
                                ${button.type === "operator" && "text-blue-600 dark:text-blue-600"} 
                                `}
                            >
                                {button.value}
                            </Button>
                        ))}
                    </div>
                </section>

                {/* History */}
                <section className={`absolute flex justify-center items-start transition-all ease-in-out scroll-smooth rounded-t-md ${isOpen ? "z-20" : "z-0"}`}>
                    <div className={`
                        w-[20rem] h-[30rem] p-3 flex flex-col gap-2 overflow-y-auto rounded-t-md
                        rounded-md border-[3px]
                        ${history.length == 0 ? 'justify-center items-center' : ' justify-start items-start'}
                         bg-white  border-blue-500 
                        dark:bg-black dark:border-purple-500
                        `}>

                        {history.length === 0 && (
                            <p>Nenhum cálculo realizado</p>
                        )}

                        {history.map((item, index) => (
                            <div key={index} className="w-full flex flex-col justify-center items-center rounded-lg bg-[#f2f2f3] dark:bg-[#2a2a2d] ">
                                <Textarea
                                    disabled
                                    value={item.expression}
                                    radius="none"
                                    classNames={{
                                        input: 'text-sm font-medium tracking-wider',
                                        inputWrapper: 'rounded-t-md'
                                    }}
                                />
                                <p className="border-t w-full text-right px-3">{item.result}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            <ModalInfo />

        </div>
    );
};
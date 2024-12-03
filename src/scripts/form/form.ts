import ErrorHandler from "../components/ErrorHandler";
import criarMaquinaTuring from "../machine/criarMaquinaTuring";
import { IEntradaMT, Movimento, Transicao, isMovimento, isSimbolo } from "../machine/logic/MaquinaTuring";

import tapeProcessingVideo from "../../assets/videos/tape-processing.webm"
import tapeAcceptingVideo from "../../assets/videos/tape-accepting.webm"
import tapeRejectingVideo from "../../assets/videos/tape-rejecting.webm"
import tapeLoopVideo from "../../assets/videos/tape-loop.webm"

const formAddTransicao: HTMLFormElement | null =
    document.querySelector('#form-transicao') as HTMLFormElement;
if (!formAddTransicao) throw new Error("Formulário de transições não identificado.")

const formEstadosEspeciais: HTMLFormElement | null =
    document.querySelector("#form-estados-especiais")
if (!formEstadosEspeciais) throw new Error("Formulário de estados especiais não identificado.")

const botaoRemoverTransicao: HTMLButtonElement | null =
    document.querySelector("#remover-transicao")
if (!botaoRemoverTransicao) throw new Error("Botão de remover transição não identificado.")

const botaoLimparTransicoes: HTMLButtonElement | null =
    document.querySelector("#limpar-transicoes")
if (!botaoLimparTransicoes) throw new Error("Botão de limpar transições não identificado.")

const botaoInserirArquivo: HTMLButtonElement | null =
    document.querySelector("#inserir-arquivo")
if (!botaoInserirArquivo) throw new Error("Botão de inserir arquivo não identificado.")

const ulTransicoes: HTMLUListElement | null =
    document.querySelector("#transicoes");
if (!ulTransicoes) throw new Error("Lista de transicoes não identificada.")

const botaoCriarMT: HTMLButtonElement | null =
    document.querySelector("#criar-mt")
if (!botaoCriarMT) throw new Error("Botão de criar MT não identificado.")

const spanTituloTransicoes: HTMLSpanElement | null =
    document.querySelector("#transicoes-title")
if (!spanTituloTransicoes) throw new Error("Span do título de transições não identificado.")

const tapeProcessingVideoElement: HTMLVideoElement | null =
    document.querySelector("#tape-processing-video")
if (!tapeProcessingVideoElement) throw new Error("Tag do vídeo de processamento da fita não identificado.")
tapeProcessingVideoElement.src = tapeProcessingVideo

const tapeAcceptingVideoElement: HTMLVideoElement | null =
    document.querySelector("#tape-accepting-video")
if (!tapeAcceptingVideoElement) throw new Error("Tag do vídeo de aceitação da fita não identificado.")
tapeAcceptingVideoElement.src = tapeAcceptingVideo

const tapeRejectingVideoElement: HTMLVideoElement | null =
    document.querySelector("#tape-rejecting-video")
if (!tapeRejectingVideoElement) throw new Error("Tag do vídeo de rejeição da fita não identificado.")
tapeRejectingVideoElement.src = tapeRejectingVideo

const tapeLoopVideoElement: HTMLVideoElement | null =
    document.querySelector("#tape-loop-video")
if (!tapeLoopVideoElement) throw new Error("Tag do vídeo de loop da fita não identificado.")
tapeLoopVideoElement.src = tapeLoopVideo

const inputQOrigem: HTMLInputElement | null =
    document.querySelector("#input-est-origem")
if (!inputQOrigem) throw new Error("Input do estado de oriem não identificado.");

const inputQ0: HTMLInputElement | null =
    document.querySelector("#input-q0")
if (!inputQ0) throw new Error("Input do estado inicial não identificado.")

const inputQA: HTMLInputElement | null =
    document.querySelector("#input-qA")
if (!inputQA) throw new Error("Input do estado de aceitação não identificado.")

const inputQR: HTMLInputElement | null =
    document.querySelector("#input-qR")
if (!inputQR) throw new Error("Input do estado de rejeição não identificado.")

const arrayTransicoes: Transicao[] = [];

let defaultPathname: string | null = localStorage.getItem("default-pathname")
if (!defaultPathname) {
    defaultPathname = window.location.pathname
    localStorage.setItem("default-pathname", defaultPathname)
}

function adicionarTransicao(t: Transicao) {
    const [
        estadoOrigem,
        simboloLeitura,
        estadoDestino,
        simboloEscrita,
        movimento
    ] = t

    // Cria um novo item de lista com as informações do formulário
    const listItem = document.createElement("li");
    listItem.textContent = `
        δ(${estadoOrigem}, '${simboloLeitura}') = 
        (${estadoDestino}, '${simboloEscrita}', ${movimento})`
    
    // Nova transição adicionada tanto na lista do HTML quanto na estrutura de dados
    ulTransicoes!.appendChild(listItem)
    arrayTransicoes.push(t)
}

const existingData: string | null = localStorage.getItem("entradaMT")
if (existingData) {
    const data: IEntradaMT = JSON.parse(existingData)
    inputQ0.value = data.q0
    inputQA.value = data.qA
    inputQR.value = data.qR
    data.δ.forEach(t => adicionarTransicao(t))
}

const errorsData: string | null = localStorage.getItem("errors")
if (errorsData) {
    const errors: string[] = JSON.parse(errorsData)
    errors.forEach(error => ErrorHandler.instance.showError(error))    
    localStorage.removeItem("errors")
}

formAddTransicao.addEventListener('submit', (event: SubmitEvent) => {
    try { 
    // Evita o comportamento padrão do envio do formulário
    event.preventDefault();
  
    // Cria um objeto FormData com os dados do formulário
    const formData = new FormData(formAddTransicao);
  
    // Obtém os valores dos campos
    const estadoOrigem = formData.get('estado')?.toString();
    let simboloLeitura = formData.get('leitura')?.toString();
    const estadoDestino = formData.get('estadoDestino')?.toString();
    let simboloEscrita = formData.get('escrita')?.toString();
    const movimento = formData.get('movimento')?.toString();

    // Transformação de caracter vazio em caracter espaço
    if (!simboloLeitura) simboloLeitura = ' '
    if (!simboloEscrita) simboloEscrita = ' '

    // Validação dos dados de inserção da nova transição criada
    if (!isSimbolo(simboloLeitura) || !isSimbolo(simboloEscrita))
        throw new Error("O símbolo precisa ter um e somente um caracter!")
    if (!estadoOrigem || !estadoDestino)
        throw new Error("Insira estados de origem e destino!")
    if (!isMovimento(movimento))
        throw new Error("Movimento inválido!")
    
    if (spanTituloTransicoes.textContent === "As transições da sua máquina aparecerão aqui!")
        spanTituloTransicoes.textContent = "Transições:"

    // Criação da nova transição
    const novaTransicao: Transicao =
        [estadoOrigem, simboloLeitura, estadoDestino, simboloEscrita, movimento]
        
    adicionarTransicao(novaTransicao)

    inputQOrigem.focus()
    } catch (error) {
        ErrorHandler.instance.showError(error as string)
    }
});

botaoInserirArquivo.addEventListener("click", () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".txt"
    
    input.addEventListener("change", () => {
        const selectedFile = input.files?.[0];

        if (selectedFile && selectedFile.name.endsWith(".txt")) {
            const file: File = selectedFile;
            
            const regex = /^\s*\(\s*([a-zA-Z0-9_\+]+)\s*\,\s*([a-zA-Z0-9_\+]+)\s*\)\s*\=\s*\(\s*([a-zA-Z0-9_\+]+)\s*\,\s*([a-zA-Z0-9_\+]+)\s*\,\s*([L|R|l|r])\s*\)/

            const linesPromise = file.text().then((text) => text.split("\n"))

            linesPromise.then((lines) => {
                const transicoes: Transicao[] = lines.flatMap((line, index) => {
                    const match = line.match(regex)
                    if (!match) {
                        window.alert(`Erro na linha ${index + 1}: ${line}`)
                        throw new Error(`Erro na linha ${index + 1}: ${line}`)
                    }
                    const [_, estadoOrigem, simboloLeitura, estadoDestino, simboloEscrita, movimento] = match

                    if (simboloLeitura.length === 1) {
                        const q1 = estadoOrigem
                        const s1 = simboloLeitura === "_" ? ' ' : simboloLeitura
                        const q2 = estadoDestino
                        const s2 = simboloEscrita === "_" ? ' ' : simboloEscrita
                        const mov: Movimento = movimento.toUpperCase() === "L" ? "Esquerda" : "Direita"
    
                        return [[q1, s1, q2, s2, mov]]
                    } else if (simboloLeitura.length > 1) {
                        const transicoes: Transicao[] = simboloLeitura.split("").map((s) => {
                            const q1 = estadoOrigem
                            const s1 = s === "_" ? ' ' : s
                            const q2 = estadoDestino
                            const s2 = s1
                            const mov: Movimento = movimento.toUpperCase() === "L" ? "Esquerda" : "Direita"
                            return [q1, s1, q2, s2, mov]
                        })
                        return transicoes
                    } else {
                        throw new Error("")
                    }

                })

                transicoes.forEach(t => adicionarTransicao(t))
            })
        } else {
            alert("Por favor, selecione um arquivo .txt.");
        }
    })

    input.click()
})

botaoRemoverTransicao.addEventListener("click", () => {
    if (arrayTransicoes.length > 0) {
        ulTransicoes.lastElementChild?.remove()
        arrayTransicoes.pop()
    }
})

botaoLimparTransicoes.addEventListener("click", () => {
    while (arrayTransicoes.length > 0) {
        ulTransicoes.lastElementChild?.remove()
        arrayTransicoes.pop()
    }
})

botaoCriarMT.addEventListener("click", () => {
    try {
        
        const estadosEspeciaisFormData = new FormData(formEstadosEspeciais)
        
        const q0 = estadosEspeciaisFormData.get("q0")?.toString()
        const qA = estadosEspeciaisFormData.get("qA")?.toString()
        const qR = estadosEspeciaisFormData.get("qR")?.toString()
        
        if (!(q0 && qA && qR)) throw new Error("Os estados especiais precisam ser definidos!")
        
        const entradaMT: IEntradaMT = {
            δ: arrayTransicoes,
            q0, qA, qR
        }
        
        localStorage.setItem("entradaMT", JSON.stringify(entradaMT))
        window.location.href = defaultPathname + "machine.html"
        
    } catch (error) {
        ErrorHandler.instance.showError(error as string)
    }
})
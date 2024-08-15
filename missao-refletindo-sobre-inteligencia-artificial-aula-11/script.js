const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você conhece quem criou o futebol?",
        alternativas: [
            {
                texto: "sim, ja ouvi falar",
                afirmacao: "Pois  futebol é o esporte coletivo mais popular do planeta. "
            },
            {
                texto: "nunca ouvi falar",
                afirmacao: "cerca de 270 milhões de pessoas atuam em atividades diretamente relacionadas ao esporte."
            }
        ]
    },
    {
        enunciado: "Você sabe qual é o esporte mais popular do planeta?",
        alternativas: [
            {
                texto: "Futebol.",
                afirmacao: "Parabens, você acertou."
            },
            {
                texto: "Volei.",
                afirmacao: "Infelizmente não é esse esporte ."
            }
        ]
    },
    {
        enunciado: "Quando o futebol chegou ao Brasil?",
        alternativas: [
            {
                texto: "1894.",
                afirmacao: "acertou."
            },
            {
                texto: "1885.",
                afirmacao: "Essa não é a data ."
            }
        ]
    },
    {
        enunciado: "qual é o jogador com mais copas do mundo?",
        alternativas: [
            {
                texto: "Lionel Mesi.",
                afirmacao: "Lionel conquistou sua 1 copa em 2022."
            },
            {
                texto: "Pelé.",
                afirmacao: "Não é por acaso que é chamado de REI"
            }
        ]
    },
    {
        enunciado: "No futebol quantas pessoas praticam esse esporte? ",
        alternativas: [
            {
                texto: "Cerca de 270 000 000.",
                afirmacao: "isso ai."
            },
            {
                texto: "Cerca de 100 000.",
                afirmacao: "Você entende de futebol. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado: "Para o sociologo Max Weber, os conflitos socias seriam resultados das posiçoes assimetricos que os individuos ocupam na sociedades.Ela chamou de close,estamento e partido ás diferentes esferas.Quais essas opçoes vocẽs conhecem?",
        alternativas: [
            {
                texto: "Econômica !",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Socias",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            },
            {
                texto: "Política ",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "O programa auxílio Brasil criado em 2023, é um progroma de transferência de renda que reuniu outros auxílios existentes. Atualmente, o valor médio recebido por família e de R$ 600,00. É correto afirmar que o programa tem qual objetivo?",
        alternativas: [
            {
                texto:"Reduzir ás taxas de mortalidade intantil",
                afirmacao: " Ao reduzir a taxa, estiver se o risco de um nascido. Vivo morrer antes de chegar a um ano de vida"
            },
            {
                texto: "Garantir o acesso a serviços essenciais",
                afirmacao: "Garantir o serviço essenciais garantir atividade de produção, distribuição e comercialização"
            }
        ]
    },
    {
        enunciado: "Quais as causas de desigualdade social?",
        alternativas: [
            {
                texto: "Pobresa",
                afirmacao: "Pobresa seria muitas pessoas passando necessidade"
            },
            {
                texto: "Concentração de renda",
                afirmacao: "Concentração de renda seria dinheiro para áreas desnecessárias"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
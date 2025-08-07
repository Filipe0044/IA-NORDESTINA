const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao acordar, você percebe que a internet está inacessível globalmente. Qual a sua primeira reação diante deste cenário de 'apagão digital'?",
        alternativas: [
            {
                texto: "Isso é um caos! Como vamos nos comunicar e trabalhar sem internet?",
                afirmacao: "No início, sentiu-se desconectado e preocupado com as implicações da ausência de comunicação digital."
            },
            {
                texto: "Hora de desbravar novas formas de interação e inovação offline!",
                afirmacao: "Viu a situação como uma oportunidade para explorar soluções criativas e analógicas para problemas diários."
            }
        ]
    },
    {
        enunciado: "Após o impacto inicial, uma equipe de especialistas surge com uma tecnologia de comunicação quântica capaz de restaurar a conectividade. Como você contribui para a implementação dessa nova era digital?",
        alternativas: [
            {
                texto: "Busca entender os princípios da comunicação quântica e auxilia na disseminação de informações e treinamentos para a população.",
                afirmacao: "Rapidamente se adaptou à nova tecnologia e se tornou um evangelista da comunicação quântica."
            },
            {
                texto: "Foca em desenvolver aplicativos e serviços que utilizem essa nova tecnologia para resolver problemas sociais urgentes.",
                afirmacao: "Empenhou-se em criar soluções práticas, transformando a nova tecnologia em ferramentas para o bem-estar social."
            }
        ]
    },
    {
        enunciado: "Com a nova internet quântica, surge um debate sobre o acesso universal à tecnologia. Qual a sua posição sobre como garantir que todos se beneficiem dessa inovação?",
        alternativas: [
            {
                texto: "Defende a criação de políticas públicas e parcerias com o setor privado para subsidiar o acesso e promover a inclusão digital.",
                afirmacao: "Tornou-se um defensor incansável da equidade digital, buscando garantir que a tecnologia beneficie a todos, sem exceção."
            },
            {
                texto: "Argumenta que a iniciativa privada deve liderar a expansão, confiando que a concorrência natural levará à democratização do acesso.",
                afirmacao: "Acreditava que a liberdade de mercado impulsionaria a inovação e a acessibilidade, focando em modelos de negócios sustentáveis."
            }
        ]
    },
    {
        enunciado: "No auge da era da comunicação quântica, é necessário criar um novo sistema de segurança cibernética para proteger dados sensíveis. Qual sua abordagem para este desafio?",
        alternativas: [
            {
                texto: "Propõe o uso de criptografia quântica, buscando a máxima segurança possível, mesmo que seja complexo de implementar.",
                afirmacao: "Tornou-se um pioneiro em segurança quântica, desenvolvendo protocolos impenetráveis e liderando a proteção de informações críticas."
            },
            {
                texto: "Prefere uma abordagem mais flexível, combinando diferentes técnicas de segurança para balancear proteção e usabilidade.",
                afirmacao: "Defendeu uma segurança adaptativa, priorizando a experiência do usuário e a flexibilidade para diferentes níveis de proteção."
            }
        ]
    },
    {
        enunciado: "Um novo projeto de inovação precisa ser lançado em tempo recorde, e a equipe está dividida sobre o uso de inteligência artificial generativa para acelerar o desenvolvimento. Qual sua decisão?",
        alternativas: [
            {
                texto: "Apoia o uso extensivo da IA generativa para prototipagem e otimização, mesmo que isso signifique menos intervenção humana inicial.",
                afirmacao: "Acreditou no potencial da IA generativa para revolucionar o desenvolvimento, aceitando os riscos em troca de velocidade e eficiência."
            },
            {
                texto: "Prioriza a supervisão humana e a criatividade original, utilizando a IA como ferramenta de apoio, mas não como substituta.",
                afirmacao: "Defendeu a IA como um copiloto para a inovação, garantindo que a criatividade humana permaneça no centro do processo de desenvolvimento."
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
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio(lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

mostraPergunta();
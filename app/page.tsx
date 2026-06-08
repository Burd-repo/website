"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Flower,
  Instagram,
  Linkedin,
  Sparkles,
  SquaresUnite,
  TrendingUp,
} from "lucide-react";

const navItems = ["Desenvolvimento", "Ecossistema", "Docs", "Preços"];

const featureItems = [
  {
    title: "Otimização Instantânea",
    text: "A rede cruza sua demanda com providers em tempo real. Avaliamos preço, benchmark e uptime para alocar a GPU com o melhor custo-benefício, sem você mover um dedo.",
    icon: Sparkles,
  },
  {
    title: "Integrações perfeitas",
    text: "Feito para o ecossistema atual. Rode modelos open source, conecte suas ferramentas via API e execute tarefas pesadas sem o lock-in das clouds tradicionais.",
    icon: SquaresUnite,
  },
  {
    title: "Interfaces dinâmicas",
    text: "Acompanhe o consumo da sua infraestrutura em tempo real. Monitore o status do workload, gerencie bids e tenha previsibilidade total dos seus custos em reais (R$).",
    icon: Flower,
  },
  {
    title: "Aprendizado contínuo",
    text: "Ideal para tarefas longas. Escale processos de inferência ou fine-tuning sem medo de quedas. A rede descentralizada redireciona o esforço e mantém sua IA rodando.",
    icon: TrendingUp,
  },
];

const faqItems = [
  {
    question: "Consigo integrar com MCPs?",
    answer:
      "Sim, com o Node instalado no seu computador e um npm install burd, você já consegue conectar diretamente o endpoint do nó à sua máquina e utilizar facilmente a IA do provedor em qualquer aplicação que quiser.",
  },
  {
    question: "O que acontece se a máquina do provedor cair?",
    answer:
      "A malha da Burd é construída para ser resiliente. Caso um nó fique offline por queda de energia ou internet, o sistema detecta a falha e redireciona o seu workload automaticamente para outra GPU disponível com as mesmas especificações, minimizando interrupções.",
  },
  {
    question: "Como os provedores sacam o valor acumulado na plataforma?",
    answer:
      "Todo o valor gerado pela sua GPU é contabilizado em reais na sua carteira da Burd. Diferente de redes gringas que pagam em tokens ou criptomoedas complexas, você pode solicitar o saque do seu saldo diretamente para a sua conta bancária via PIX.",
  },
  {
    question:
      "Meus dados e o meu código estão seguros rodando em provedores desconhecidos?",
    answer:
      "Sim. Nossa arquitetura garante que seu workload seja executado em ambientes isolados. Além disso, a Burd mantém um sistema de Trust Score público: você consegue ver o histórico, o nível de confiabilidade e o uptime de cada provedor antes de escolhê-lo na lista.",
  },
  {
    question:
      "Posso usar a rede para mineração de criptomoedas ou renderização 3D?",
    answer:
      "No caso de renderização 3D e de vídeo, criamos um fluxo focado em facilidade e transparência. Sabemos que lidar com storage, memória e unir tudo é complexo. Por isso, a Burd faz o trabalho pesado: você sobe o projeto, visualiza a previsão exata de custo e nós cuidamos do render distribuído. Escolha a máquina, aprove o orçamento em reais e receba o vídeo pronto.",
  },
];

function SectionEyebrow({
  label,
  wide = false,
}: {
  label: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`inline-flex h-8 w-fit max-w-max shrink-0 items-center self-start bg-[#1A1A1A] text-[16px] uppercase tracking-normal text-[#F5F5F5] ${
        wide ? "pr-5" : "pr-5"
      }`}
    >
      <span className="mr-4 h-8 w-1.5 shrink-0 bg-[#2F2F2F]" />
      <span className="whitespace-nowrap font-mono">{label}</span>
    </div>
  );
}

function PrimaryButton({ label }: { label: string }) {
  return (
    <button className="inline-flex h-9 items-center border border-[#262626] bg-[#1A1A1A] px-3 text-[16px] text-[#F5F5F5] transition hover:border-[#333] hover:bg-[#202020]">
      <span>{label}</span>
      <span className="ml-3 inline-flex h-[29px] w-[29px] items-center justify-center">
        <Image src="/arrow.svg" alt="" width={29} height={29} />
      </span>
    </button>
  );
}

function MockWindow() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[8px] border border-[#2A2A2A] bg-[#090909] p-4">
      <div className="flex h-full flex-col border border-[#2A2A2A] bg-[#090909]">
        <div className="grid h-[120px] grid-cols-[225px_1fr]">
          <div className="relative h-full border-r border-[#2A2A2A]">
            <Image
              src="/Llama Image.svg"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="grid h-full grid-rows-[24px_50px_1fr]">
            <div className="flex items-center gap-2 border-b border-[#2A2A2A] px-3">
              <span className="h-3 w-3 rounded-full bg-[#3F8047]" />
              <span className="font-mono text-[10px] text-[#3F8047]">
                Em funcionamento
              </span>
            </div>

            <div className="flex items-center border-b border-[#2A2A2A] px-3">
              <div className="text-[31px] leading-none tracking-[0.05em] text-[#9CA3AF]">
                Chat LLM
              </div>
            </div>

            <div className="flex items-center border-b border-[#2A2A2A]">
              <div className="flex min-w-0 flex-1 items-center gap-2 px-3 font-mono text-[10px] text-[#9CA3AF]">
                <span className="shrink-0">◎</span>
                <span className="truncate whitespace-nowrap">
                  https://rian.burd.app
                </span>
              </div>
              <div className="flex h-full w-[88px] shrink-0 items-center justify-center bg-[#D9D9D9] text-[26px] leading-none text-[#111111]">
                <span>→</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid h-[110px] grid-cols-4 gap-x-4 px-4 pt-3 pb-3 text-[11px]">
          <div className="font-mono">
            <div className="text-[#9CA3AF]">Serviços</div>
            <div className="mt-1.5 text-white">2</div>
            <div className="mt-4 text-[#9CA3AF]">GPU</div>
            <div className="mt-1.5 text-white">RTX 5090</div>
          </div>
          <div className="font-mono">
            <div className="text-[#9CA3AF]">Custo</div>
            <div className="mt-1.5 text-white">R$6.5/h</div>
            <div className="mt-4 text-[#9CA3AF]">VCPU</div>
            <div className="mt-1.5 text-white">12</div>
          </div>
          <div className="font-mono">
            <div className="text-[#9CA3AF]">Crédito</div>
            <div className="mt-1.5 text-white">R$934</div>
            <div className="mt-4 text-[#9CA3AF]">Memória</div>
            <div className="mt-1.5 text-white">32 GB</div>
          </div>
          <div className="font-mono">
            <div className="whitespace-nowrap text-[#9CA3AF]">
              Auto-reconectar ◎
            </div>
            <div className="mt-1.5 text-white">Ativo</div>
            <div className="mt-4 text-[#9CA3AF]">Armazenamento</div>
            <div className="mt-1.5 text-white">48 GB</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EarningsCard() {
  return (
    <div className="h-[193px] w-full max-w-[295px] rounded-[8px] border border-[#262626] bg-[#0A0A0A] px-5 py-4">
      <div className="font-mono text-[16px] text-[#9CA3AF]">Ganhos</div>
      <div className="mt-2 font-mono text-[16px] text-[#F5F5F5]">R$1284,77</div>
      <div className="mt-1 font-mono text-[10px] text-[#3F8047]">
        +2,74% último mês
      </div>
      <div className="mt-8 flex items-end gap-2">
        {[11, 26, 17, 34, 26].map((height, index) => (
          <div
            key={index}
            className="w-[41px] bg-[#9CA3AF]"
            style={{ height }}
          />
        ))}
      </div>
      <div className="mt-1 flex gap-2 text-[6px] text-white">
        {["01-06", "06-12", "12-18", "18-24", "24-30"].map((label) => (
          <span key={label} className="w-[41px] text-center font-mono">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function GridShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full overflow-hidden bg-[#0A0A0A] px-0">
      <div className="mx-auto w-[1540px] max-w-[1540px] [zoom:0.8]">
        <div className="relative w-[1540px] border-r border-[#262626]">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-30 hidden w-px bg-zinc-800 xl:block" />
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <main className="overflow-x-hidden bg-[#0A0A0A] text-[#F5F5F5]">
      <GridShell>
        <section className="border-b border-[#262626]">
          <div className="relative h-[812px] border-b border-[#262626]">
            <div className="pointer-events-none absolute right-0 top-0 z-40 hidden h-[812px] w-px bg-zinc-800 xl:block" />
            <div className="relative border-b border-[#262626] px-8 pb-14 pt-6 sm:px-10 md:px-14 xl:absolute xl:left-0 xl:top-0 xl:h-[812px] xl:w-[698px] xl:border-b-0 xl:px-0 xl:pb-0 xl:pt-0">
              <div className="xl:absolute xl:left-[66px] xl:top-[25px] xl:w-[474px]">
                <Image
                  src="/burd logo.svg"
                  alt="Burd"
                  width={131}
                  height={80}
                  className="h-[46px] w-auto xl:h-[46px] mt-4"
                />

                <h1 className="mt-14 max-w-[474px] text-[32px] leading-[1.2] sm:text-[36px] xl:mt-[112px] xl:text-[40px]">
                  Construindo o futuro das IAs na América Latina
                </h1>

                <p className="mt-32 max-w-[467px] font-mono text-[14px] leading-[1.55] text-[#9CA3AF] xl:mt-[245px] xl:text-[16px]">
                  Infraestrutura descentralizada com nós na América Latina para
                  resposta em milissegundos. Compare ofertas, faça o deploy de
                  modelos open source e pague em reais. Zero Docker, zero dor de
                  cabeça.
                </p>

                <div className="mt-6 xl:mt-6">
                  <PrimaryButton label="Começar" />
                </div>
              </div>
            </div>

            <div className="hidden overflow-hidden xl:absolute xl:bottom-0 xl:left-1/2 xl:right-0 xl:top-0 xl:block">
              <Image
                src="/Hero Image.svg"
                alt="Arte principal da landing"
                fill
                className="object-cover object-[58%_center]"
                priority
              />
            </div>

            <div className="hidden xl:absolute xl:right-[48px] xl:top-[37px] xl:flex xl:h-[56px] xl:w-[521px] xl:items-center xl:rounded-[8px] xl:border xl:border-[rgba(255,255,255,0.35)] xl:bg-[rgba(255,255,255,0.07)] xl:px-[15px] xl:shadow-[inset_2.146px_2px_9.24px_0px_rgba(255,255,255,0.13),inset_1.217px_1.134px_4.62px_0px_rgba(255,255,255,0.13),-11.15px_-10.392px_48px_-12px_rgba(0,0,0,0.15),-1.858px_-1.732px_12px_-8px_rgba(0,0,0,0.15)] xl:backdrop-blur-[7.58px]">
              <div className="flex h-8 w-[168px] items-center rounded-[4px] bg-[#1A1A1A] px-[15px] font-mono text-[16px]">
                Desenvolvimento
              </div>
              <div className="ml-8 flex items-center gap-8 font-mono text-[16px] text-[#F5F5F5]">
                {navItems.slice(1).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] xl:hidden">
              <Image
                src="/Hero Image.svg"
                alt="Arte principal da landing"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <div className="h-[117px]" />
        </section>

        <section className="border-b border-[#262626]">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="border-b border-[#262626] px-8 py-16 sm:px-10 md:px-[66px] xl:min-h-[472px] xl:border-r xl:border-[#262626] xl:py-[114px]">
              <h2 className="max-w-[474px] text-[32px] leading-[1.2] xl:text-[40px]">
                O ecossistema completo
              </h2>
              <p className="mt-4 max-w-[438px] font-mono text-[14px] leading-[1.6] text-[#9CA3AF] xl:text-[16px]">
                Para devs e pesquisadores rodarem IA sem atrito. Para
                entusiastas e pequenos data centers rentabilizarem hardware
                ocioso.
              </p>
              <div className="mt-6">
                <button className="inline-flex h-9 items-center border border-[#262626] bg-[#1A1A1A] px-[10px] font-mono text-[14px] text-[#F5F5F5] transition hover:border-[#333] hover:bg-[#202020]">
                  <span>Todos os serviços</span>
                  <span className="ml-3 inline-flex h-[29px] w-[29px] items-center justify-center">
                    <Image src="/arrow.svg" alt="" width={29} height={29} />
                  </span>
                </button>
              </div>
            </div>

            <div className="border-b border-[#262626] bg-[#111111] px-8 py-7 sm:px-10 md:px-[62px] xl:min-h-[472px] xl:py-[27px]">
              <div className="relative h-[269px] w-full overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <Image
                  src="/BG Image 1.svg"
                  alt="Preview de deploy"
                  fill
                  className="object-cover object-center opacity-70"
                />
                <div className="absolute inset-x-4 inset-y-7 flex items-center justify-center">
                  <div className="h-[250px] w-full max-w-[535px]">
                    <MockWindow />
                  </div>
                </div>
              </div>
              <h3 className="mt-5 text-[28px] leading-[1.2] xl:text-[32px]">
                Deploy em segundos
              </h3>
              <p className="mt-2 max-w-[718px] font-mono text-[14px] leading-[1.6] text-[#9CA3AF] xl:text-[16px]">
                Elimine a configuração. Suba modelos pesados instantaneamente,
                acompanhe métricas ao vivo e pague em reais.
              </p>
            </div>

            <div className="border-b border-[#262626] bg-[#111111] px-8 py-7 sm:px-10 md:px-[62px] xl:min-h-[472px] xl:border-r xl:border-[#262626] xl:py-[27px]">
              <div className="relative h-[269px] w-full overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <Image
                  src="/BG Image 2.svg"
                  alt="Painel de ganhos do provedor"
                  fill
                  className="object-cover object-left opacity-70"
                />
                <div className="absolute inset-x-4 inset-y-7 flex items-center justify-center">
                  <div className="w-full max-w-[295px]">
                    <EarningsCard />
                  </div>
                </div>
              </div>
              <h3 className="mt-5 text-[28px] leading-[1.2] xl:text-[32px]">
                Torne-se um provedor
              </h3>
              <p className="mt-2 max-w-[718px] font-mono text-[14px] leading-[1.6] text-[#9CA3AF] xl:text-[16px]">
                Disponibilize sua infraestrutura. Defina seu preço, deixe a
                plataforma orquestrar os bids e fature fornecendo compute.
              </p>
            </div>

            <div className="bg-[#111111] px-8 py-7 sm:px-10 md:px-[46px] xl:min-h-[472px]">
              <div className="relative h-[269px] w-full overflow-hidden">
                <Image
                  src="/BG Image 3.svg"
                  alt="Visual de escalabilidade"
                  fill
                  className="object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-10">
                  <div className="relative flex h-[169px] w-[176px] items-center justify-center rounded-[4px] bg-[#111111]">
                    <Image
                      src="/Docker.svg"
                      alt="Docker"
                      width={96}
                      height={96}
                      className="h-auto w-[84px] xl:w-[96px]"
                    />
                  </div>

                  <div className="relative flex h-[169px] w-[176px] items-center justify-center rounded-[4px] bg-[#141414]">
                    <div className="flex h-full w-full items-center justify-center pl-7">
                      <Image
                        src="/upper image.svg"
                        alt="Escala 3x"
                        width={88}
                        height={159}
                        className="h-[146px] w-auto xl:h-[159px]"
                      />
                    </div>
                  </div>

                  <div className="relative h-[169px] w-[176px] overflow-hidden rounded-[4px] bg-[#131313]">
                    <Image
                      src="/Cluster image.svg"
                      alt="Cluster distribuido"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <h3 className="mt-5 text-[28px] leading-[1.2] xl:text-[32px]">
                Escalabilidade fluida
              </h3>
              <p className="mt-2 max-w-[718px] font-mono text-[14px] leading-[1.6] text-[#9CA3AF] xl:text-[16px]">
                Um pool contínuo de poder de processamento. Fuja do lock-in das
                big techs e acesse uma malha descentralizada de alta
                disponibilidade.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#262626] bg-[#080808] px-6 py-14 text-center">
          <h2 className="mx-auto max-w-[520px] text-[40px] font-normal leading-[1.35] tracking-[-0.02em] text-white">
            Nós criamos os workflows para
            <br />
            simplificar a complexidade
          </h2>
        </section>

        <section className="border-b border-[#262626]">
          <div className="grid grid-cols-1 xl:grid-cols-[701px_839px]">
            <div className="relative min-h-[360px] border-b border-[#262626] xl:min-h-[660px] xl:border-b-0 xl:border-r xl:border-[#262626]">
              <Image
                src="/Works Image 1.svg"
                alt="Imagem da seção de workflow"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="px-8 py-8 sm:px-10 md:px-[30px] xl:px-[30px] xl:py-[30px]">
              <div className="flex items-start justify-between gap-4">
                <SectionEyebrow label="Como funciona" />
                <div className="text-[24px] leading-none">
                  <span>1</span>
                  <span className="text-[#2F2F2F]">/4</span>
                </div>
              </div>

              <div className="mt-16 xl:mt-[366px]">
                <h2 className="text-[28px] leading-[1.2] xl:text-[32px]">
                  Foque apenas no seu projeto
                </h2>
                <p className="mt-4 max-w-[438px] font-mono text-[14px] leading-[1.6] text-[#9CA3AF] xl:text-[16px]">
                  A complexidade da infraestrutura fica com a gente. Esqueça
                  configurações de servidores, Docker ou CUDA. Nós orquestramos
                  os nós, avaliamos as ofertas e rodamos seu código na melhor
                  GPU disponível. Você pensa no modelo, nós garantimos o
                  compute.
                </p>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 border-t border-[#262626] md:grid-cols-2 xl:grid-cols-4">
            <div className="pointer-events-none absolute bottom-0 left-0 z-30 flex h-4 w-4 -translate-x-1/2 translate-y-1/2 items-center justify-center font-mono text-[16px] leading-none text-white/75">
              +
            </div>

            {featureItems.map((item, index) => (
              <div
                key={item.title}
                className={`relative min-h-[180px] px-8 py-10 sm:px-10 xl:min-h-[232px] xl:px-[38px] xl:py-[52px] ${
                  index < featureItems.length - 1
                    ? "xl:border-r xl:border-[#262626]"
                    : ""
                } ${index < featureItems.length - 1 ? "border-b border-[#262626] xl:border-b-0" : ""}`}
              >
                <div className="flex items-center gap-2.5">
                  <item.icon
                    className="h-4 w-4 text-[#F5F5F5]"
                    strokeWidth={1.75}
                  />
                  <h3 className="text-[16px] leading-[1.25] text-[#F5F5F5]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 font-mono text-[12px] leading-[1.65] text-[#9CA3AF] xl:text-[11.8px]">
                  {item.text}
                </p>

                <div className="pointer-events-none absolute bottom-0 right-0 z-30 flex h-4 w-4 translate-x-1/2 translate-y-1/2 items-center justify-center font-mono text-[16px] leading-none text-white/75">
                  +
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative border-b border-[#262626] px-8 py-16 text-center sm:px-10 md:px-14 xl:px-[131px] xl:py-[121px]">
          <Image
            src="/BG about us.svg"
            alt="BG do sobre nós"
            fill
            className="object-cover object-top opacity-[0.13]"
          />
          <div className="relative">
            <SectionEyebrow label="Falaram de nós" />
            <blockquote className="mx-auto mt-[123px] max-w-[960px] text-[24px] leading-[1.35] xl:text-[32px]">
              &quot;A Burd resolveu a maior dor de quem constrói com IA no
              Brasil: a infraestrutura. Ter poder de GPU sob demanda, com baixa
              latência e pagamento em reais, muda o jogo para qualquer startup.
              Eles transformaram o caos do compute em uma camada simples e
              invisível.&quot;
            </blockquote>
            <p className="mt-[98px] text-[22px] xl:text-[24px]">Daniel Lima</p>
            <p className="mt-3 text-[22px] text-[#626262] xl:text-[24px]">
              Head da AbacatePay
            </p>
            <div className="mt-12 flex items-center justify-center gap-2">
              {[1, 2, 3, 4].map((item) => (
                <span
                  key={item}
                  className="h-12 w-12 rounded-full border border-[#3A3A3A] bg-[#111111]"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-b border-[#262626]">
          <div className="grid grid-cols-1 xl:min-h-[420px] xl:grid-cols-[649px_891px]">
            <div className="px-8 py-16 sm:px-10 md:px-[38px] xl:flex xl:min-h-[420px] xl:flex-col xl:justify-center xl:py-0">
              <SectionEyebrow label="PREÇOS" />

              <h2 className="mt-[43px] max-w-[369px] text-[32px] leading-[1.2] xl:text-[40px]">
                Por aqui não lidamos com valores fixos
              </h2>

              <p className="mt-[43px] max-w-[487px] font-mono text-[14px] leading-[1.6] text-[#9CA3AF]">
                Um mercado livre de infraestrutura. Providers oferecem suas GPUs
                através de bids em tempo real. Nós organizamos a lista com dados
                claros de preço, benchmark e uptime, e você escolhe a máquina
                ideal para o seu projeto. Liberdade total e pagamento em reais.
              </p>
            </div>

            <div className="relative min-h-[340px] overflow-hidden xl:min-h-[420px]">
              <Image
                src="/Coin Image.svg"
                alt="Visual de preços"
                fill
                className="scale-[1.18] object-cover object-[55%_45%] opacity-40"
              />
            </div>
          </div>
        </section>

        <section
          aria-hidden="true"
          className="h-[117px] border-b border-[#262626] bg-[#080808]"
        />

        <section>
          <div className="grid grid-cols-1 xl:grid-cols-[651px_889px]">
            <div className="border-b border-[#262626] px-8 py-16 sm:px-10 md:px-[38px] xl:border-b-0 xl:py-[58px]">
              <SectionEyebrow label="PERGUNTAS FREQUENTES" wide />

              <h2 className="mt-[58px] max-w-[424px] text-[32px] leading-[1.2] xl:text-[40px]">
                Dúvidas? <br />
                Nós temos as respostas
              </h2>

              <p className="mt-[24px] max-w-[487px] font-mono text-[14px] leading-[1.6] text-[#9CA3AF]">
                Selecionamos algumas dúvidas que recebemos com frequência, elas
                podem ser úteis para você!
              </p>
            </div>

            <div className="px-8 py-12 sm:px-10 md:px-[33px] xl:py-[58px]">
              <div className="border-2 border-[#262626]">
                {faqItems.map((item, index) => {
                  const isOpen = openFaqIndex === index;

                  return (
                    <div
                      key={item.question}
                      className={
                        index < faqItems.length - 1
                          ? "border-b border-[#262626]"
                          : ""
                      }
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        className="flex w-full items-start justify-between gap-6 px-8 py-7 text-left xl:px-[32px] xl:py-[28px]"
                      >
                        <div>
                          <h3 className="text-[18px] leading-[1.2] xl:text-[20px]">
                            {item.question}
                          </h3>

                          {isOpen ? (
                            <p
                              id={`faq-answer-${index}`}
                              className="mt-4 max-w-[702px] font-mono text-[13px] leading-[1.55] text-[#9CA3AF] xl:text-[14px]"
                            >
                              {item.answer}
                            </p>
                          ) : null}
                        </div>

                        <span className="shrink-0 text-[28px] leading-none text-white xl:text-[40px]">
                          {isOpen ? "-" : "+"}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-b border-[#262626] px-8 py-16 text-center sm:px-10 md:px-14 xl:px-[92px] xl:py-[163px]">
          <Image
            src="/Ready Image.svg"
            alt=""
            fill
            className="object-cover opacity-40"
          />
          <div className="relative mx-auto max-w-[489px]">
            <h2 className="text-[32px] leading-[1.2] xl:text-[40px]">
              Prontos para construir o futuro conosco?
            </h2>
            <p className="mx-auto mt-6 max-w-[403px] font-mono text-[16px] leading-[1.3] text-[#9CA3AF] xl:text-[20px]">
              Crie, sem limitações, as suas ideias agora tem um novo lar.
            </p>
            <div className="mt-6 flex justify-center">
              <PrimaryButton label="Começar" />
            </div>
          </div>
        </section>

        <footer className="border-b border-[#262626] bg-[#050505]">
          <div className="grid grid-cols-1 xl:grid-cols-[544px_1fr]">
            <div className="flex min-h-[426px] flex-col border-[#262626] xl:border-r">
              <div className="h-[104px] px-8 pt-8 sm:px-10 md:px-[38px] xl:px-[42px] xl:pt-[28px]">
                <Image
                  src="/burd logo.svg"
                  alt="Burd"
                  width={131}
                  height={80}
                  className="h-[42px] w-auto"
                />
              </div>

              <div className="flex-1 border-t border-[#262626] px-8 pt-[52px] sm:px-10 md:px-[38px] xl:px-[42px]">
                <p className="text-[28px] leading-[1.2] text-[#F5F5F5] xl:text-[32px]">
                  Contate@burd.ai
                </p>

                <div className="mt-6 space-y-1 font-mono text-[16px] leading-[1.5] text-[#9CA3AF]">
                  <p>Av. Presidente Vargas, 2555</p>
                  <p>Rio de Janeiro</p>
                  <p>Brasil</p>
                </div>
              </div>

              <div className="flex h-[54px] items-center border-t border-[#262626] px-8 sm:px-10 md:px-[38px] xl:px-[42px]">
                <div className="flex flex-wrap gap-x-9 gap-y-3 font-mono text-[13px] text-[#F5F5F5]">
                  <span>Termos &amp; Condições</span>
                  <span>Políticas de Privacidade</span>
                </div>
              </div>
            </div>

            <div className="flex min-h-[426px] flex-col">
              <div className="h-[104px] px-8 pt-8 sm:px-10 md:px-[43px] xl:px-[32px] xl:pt-[42px]">
                <nav className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-[13px] text-[#F5F5F5]">
                  {navItems.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </nav>
              </div>

              <div className="flex-1" />

              <div className="flex h-[54px] items-center justify-start border-t border-[#262626] px-8 sm:px-10 md:px-[43px] xl:justify-end xl:px-[32px]">
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-7 w-7 items-center justify-center text-white transition-opacity hover:opacity-70"
                  >
                    <Instagram
                      className="h-[22px] w-[22px]"
                      strokeWidth={1.9}
                    />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-7 w-7 items-center justify-center text-white transition-opacity hover:opacity-70"
                  >
                    <Linkedin className="h-[22px] w-[22px]" strokeWidth={1.9} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </GridShell>
    </main>
  );
}

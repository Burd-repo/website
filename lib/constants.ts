import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Bot,
  Building2,
  Cable,
  Cloud,
  Cpu,
  Database,
  FileText,
  Globe,
  GraduationCap,
  KeyRound,
  Languages,
  LayoutDashboard,
  MessageCircle,
  Network,
  PlugZap,
  Rocket,
  Scale,
  ScrollText,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Wallet,
  Webhook,
  Workflow,
} from "lucide-react";

export type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductItem = IconItem & {
  tag: string;
  cta: string;
  href: string;
};

export type FloatingCardItem = {
  label: string;
  icon: LucideIcon;
};

export type IntegrationNode = {
  title: string;
  icon: LucideIcon;
  x: number;
  y: number;
};

export type TechLayer = {
  label: string;
  description: string;
  items: IconItem[];
};

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
  status: string;
};

export const navLinks = [
  { label: "Produto", href: "#produto" },
  { label: "Templates", href: "#templates" },
  { label: "Integrações", href: "#integracoes" },
  { label: "Preços", href: "#precos" },
  { label: "Documentação", href: "#documentacao" },
];

export const heroFloatingCards: FloatingCardItem[] = [
  { label: "Qwen 7B pronto", icon: Bot },
  { label: "WhatsApp conectado", icon: MessageCircle },
  { label: "Fallback ativo", icon: ShieldCheck },
  { label: "Custo em reais", icon: Wallet },
  { label: "Logs simples", icon: ScrollText },
  { label: "GPU marketplace por trás", icon: Server },
  { label: "API key criada", icon: KeyRound },
  { label: "Template de atendimento", icon: LayoutDashboard },
];

export const problemItems: IconItem[] = [
  {
    title: "Setup complicado",
    description:
      "Docker, CUDA, servidores e configurações que travam o início.",
    icon: Settings2,
  },
  {
    title: "Pagamento em dólar",
    description:
      "GPU cloud internacional ainda assusta pelo custo e pela imprevisibilidade.",
    icon: Wallet,
  },
  {
    title: "Observabilidade técnica",
    description:
      "Logs, tokens, latência e erros aparecem de forma difícil para quem só quer usar IA.",
    icon: Activity,
  },
  {
    title: "Integrações manuais",
    description:
      "WhatsApp, sites, CRMs e sistemas internos exigem trabalho extra.",
    icon: PlugZap,
  },
  {
    title: "Custo difícil de prever",
    description:
      "Sem painel simples, o usuário não sabe quanto está gastando.",
    icon: BarChart3,
  },
  {
    title: "Pouca adaptação ao Brasil",
    description:
      "Falta Pix, português, suporte local e exemplos reais do mercado brasileiro.",
    icon: Languages,
  },
];

export const solutionItems: IconItem[] = [
  {
    title: "Produto em português",
    description: "Uma experiência pensada para quem constrói no Brasil.",
    icon: Languages,
  },
  {
    title: "Setup quase zero",
    description:
      "Sem perder dias configurando GPU, Docker ou servidor.",
    icon: Rocket,
  },
  {
    title: "Pix e reais",
    description: "Pagamento local, previsível e sem susto em dólar.",
    icon: Wallet,
  },
  {
    title: "Fallback e estabilidade",
    description:
      "A Ibaka troca providers e modelos quando necessário.",
    icon: ShieldCheck,
  },
  {
    title: "Painel simples",
    description:
      "Uso, custo, chamadas e erros em uma interface clara.",
    icon: LayoutDashboard,
  },
  {
    title: "Suporte humano local",
    description:
      "Ajuda real para colocar IA no fluxo do seu negócio.",
    icon: MessageCircle,
  },
];

export const productItems: ProductItem[] = [
  {
    tag: "Primeiro produto",
    title: "Ibaka AI",
    description:
      "Use modelos open source via API, painel e templates prontos, sem configurar GPU ou servidor.",
    cta: "Explorar Ibaka AI",
    href: "#final-cta",
    icon: Sparkles,
  },
  {
    tag: "Em construção",
    title: "Ibaka Cloud",
    description:
      "Deploy barato usando GPU marketplace por trás, com endpoints e workloads dedicados.",
    cta: "Ver visão Cloud",
    href: "#roadmap",
    icon: Cloud,
  },
  {
    tag: "Futuro beta",
    title: "Ibaka Provider",
    description:
      "No futuro, providers poderão conectar máquinas e GPUs à rede Ibaka.",
    cta: "Entrar na lista",
    href: "#final-cta",
    icon: Network,
  },
];

export const templateItems: IconItem[] = [
  {
    title: "Atendimento no WhatsApp",
    description:
      "Responda clientes com contexto, histórico e controle.",
    icon: MessageCircle,
  },
  {
    title: "FAQ inteligente para sites",
    description:
      "Transforme dúvidas frequentes em respostas automáticas.",
    icon: Globe,
  },
  {
    title: "Triagem de leads",
    description:
      "Classifique contatos e envie para o fluxo certo.",
    icon: Search,
  },
  {
    title: "Resumo de documentos",
    description:
      "Extraia pontos importantes de PDFs, contratos e textos longos.",
    icon: FileText,
  },
  {
    title: "E-commerce e suporte",
    description:
      "Ajude clientes com pedidos, produtos e dúvidas comuns.",
    icon: ShoppingBag,
  },
  {
    title: "Jurídico e contratos",
    description:
      "Organize relatos, documentos e perguntas recorrentes.",
    icon: Scale,
  },
  {
    title: "Clínicas e agendamentos",
    description:
      "Automatize dúvidas, horários e orientações iniciais.",
    icon: Stethoscope,
  },
  {
    title: "Educação e cursos",
    description:
      "Crie assistentes para alunos, materiais e dúvidas.",
    icon: GraduationCap,
  },
];

export const integrationItems: IntegrationNode[] = [
  { title: "WhatsApp", icon: MessageCircle, x: 18, y: 22 },
  { title: "Sites", icon: Globe, x: 44, y: 10 },
  { title: "APIs", icon: Cable, x: 80, y: 20 },
  { title: "Webhooks", icon: Webhook, x: 20, y: 80 },
  { title: "CRMs", icon: Building2, x: 44, y: 90 },
  { title: "Bancos de dados", icon: Database, x: 80, y: 80 },
  { title: "Documentos", icon: FileText, x: 10, y: 52 },
  { title: "Sistemas internos", icon: Server, x: 90, y: 52 },
];

export const techStackLayers: TechLayer[] = [
  {
    label: "Gateway e observabilidade",
    description: "Camada que recebe requisições, roteia modelos e registra cada chamada.",
    items: [
      {
        title: "LiteLLM",
        description: "Gateway e roteamento de providers.",
        icon: Workflow,
      },
      {
        title: "Langfuse",
        description: "Logs, traces e observabilidade.",
        icon: ScrollText,
      },
    ],
  },
  {
    label: "Execução e estado",
    description: "Camada que processa os modelos, filas e respostas com estabilidade.",
    items: [
      {
        title: "Ollama / vLLM",
        description: "Execução de modelos open source.",
        icon: Cpu,
      },
      {
        title: "Redis",
        description: "Fila, estado temporário e tarefas assíncronas.",
        icon: Cable,
      },
    ],
  },
  {
    label: "Dados e produto",
    description: "Camada que organiza usuários, projetos, histórico e a interface final.",
    items: [
      {
        title: "Postgres",
        description: "Dados do produto, usuários, projetos e histórico.",
        icon: Database,
      },
      {
        title: "Painel próprio",
        description: "A experiência simples que esconde a complexidade.",
        icon: LayoutDashboard,
      },
    ],
  },
];

export const roadmapItems: RoadmapItem[] = [
  {
    phase: "Fase 1",
    title: "Ibaka AI",
    description: "Modelos open source com API, painel e templates.",
    status: "Agora",
  },
  {
    phase: "Fase 2",
    title: "Integrações",
    description: "WhatsApp, sites, webhooks e sistemas internos.",
    status: "Próximo",
  },
  {
    phase: "Fase 3",
    title: "Ibaka Cloud",
    description: "Deploys e endpoints com GPU marketplace.",
    status: "Visão",
  },
  {
    phase: "Fase 4",
    title: "Ibaka Provider",
    description: "Beta para conectar máquinas e GPUs à rede.",
    status: "Futuro beta",
  },
  {
    phase: "Fase 5",
    title: "Rede Ibaka",
    description: "Marketplace brasileiro de computação para IA.",
    status: "Longo prazo",
  },
];

export const footerGroups = [
  {
    title: "Produto",
    links: ["Ibaka AI", "Ibaka Cloud", "Ibaka Provider", "Templates"],
  },
  {
    title: "Desenvolvedores",
    links: ["Documentação", "API", "Status", "Changelog"],
  },
  {
    title: "Empresa",
    links: ["Sobre", "Blog", "Contato"],
  },
  {
    title: "Legal",
    links: ["Termos", "Privacidade"],
  },
];

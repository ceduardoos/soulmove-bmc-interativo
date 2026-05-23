import { useState } from 'react'
import {
  ArrowRight,
  BadgeDollarSign,
  BusFront,
  Handshake,
  Layers,
  Leaf,
  Route,
  ShieldCheck,
  Smartphone,
  Trophy,
  Users,
} from 'lucide-react'

const blocks = [
  {
    id: 'partners',
    number: '01',
    title: 'Parcerias-chave',
    subtitle: 'Ecossistema de suporte',
    icon: Handshake,
    bullets: [
      'Soul Up e Prospera',
      'Marcas patrocinadoras',
      'Comunidades e instituições',
      'Dados de transporte público',
      'Parceiros futuros de mobilidade',
    ],
    description:
      'O SoulMove depende de parcerias para transformar a jornada sustentável em valor real. A Soul Up e a Prospera são a base do ecossistema. Marcas patrocinadoras podem financiar missões e Pontos Soul Up. Instituições, comunidades e possíveis parceiros de mobilidade ampliam o alcance da solução sem tornar o MVP dependente de integrações complexas com bilhetagem ou catracas.',
    area: 'bmc-partners',
  },
  {
    id: 'activities',
    number: '02',
    title: 'Atividades-chave',
    subtitle: 'Operação da jornada',
    icon: Route,
    bullets: [
      'Validar jornadas',
      'Calcular CO₂ evitado',
      'Gerar Pontos Soul Up',
      'Atualizar rankings',
      'Operar missões',
    ],
    description:
      'As atividades centrais são validar deslocamentos sustentáveis, calcular impacto ambiental estimado, gerar Pontos Soul Up, atualizar rankings e operar missões patrocinadas. A solução também precisa registrar eventos, aplicar regras antifraude e gerar indicadores agregados para a Soul Up e para marcas parceiras.',
    area: 'bmc-activities',
  },
  {
    id: 'resources',
    number: '03',
    title: 'Recursos-chave',
    subtitle: 'Base tecnológica e social',
    icon: Layers,
    bullets: [
      'App Soul Up',
      'Motor de validação',
      'Score de confiabilidade',
      'Pontos Soul Up',
      'Comunidades e Clipz',
    ],
    description:
      'Os recursos-chave incluem o aplicativo Soul Up, o sistema de Pontos Soul Up, o motor de validação de jornadas, o score de confiabilidade, as comunidades, o Clipz e a possibilidade de integração com dados públicos de transporte. Esses elementos permitem conectar mobilidade, gamificação, recompensa e mensuração de impacto.',
    area: 'bmc-resources',
  },
  {
    id: 'value',
    number: '04',
    title: 'Proposta de valor',
    subtitle: 'Mobilidade com impacto e recompensa',
    icon: Leaf,
    bullets: [
      'Impacto, pontos e reconhecimento',
      'Recorrência e dados agregados',
      'Campanhas ESG mensuráveis',
      'Jornada sustentável gamificada',
      'Validação, não navegação',
    ],
    description:
      'O SoulMove transforma deslocamentos de transporte público em impacto ambiental, Pontos Soul Up e reconhecimento. Para o usuário, gera recompensa e pertencimento. Para a Soul Up, aumenta recorrência, retenção e dados agregados. Para marcas, cria campanhas ESG mensuráveis. A solução não substitui Google Maps, Moovit ou Cittamobi; ela atua como uma camada de validação, gamificação e recompensa dentro do ecossistema Soul Up.',
    area: 'bmc-value',
    featured: true,
  },
  {
    id: 'relationships',
    number: '05',
    title: 'Relacionamento com clientes',
    subtitle: 'Hábito e pertencimento',
    icon: Trophy,
    bullets: [
      'Missões sustentáveis',
      'Badges e conquistas',
      'Histórico de impacto',
      'Desafios coletivos',
      'Compartilhamento',
    ],
    description:
      'O relacionamento acontece por meio de missões, badges, rankings, desafios coletivos, histórico de impacto e compartilhamento de conquistas. A proposta é criar hábito e pertencimento, aproximando o SoulMove da lógica do Strava: registrar, validar, comparar e reconhecer uma prática cotidiana.',
    area: 'bmc-relationships',
  },
  {
    id: 'channels',
    number: '06',
    title: 'Canais',
    subtitle: 'Dentro do ecossistema existente',
    icon: Smartphone,
    bullets: [
      'App Soul Up',
      'Aba SoulMove',
      'Notificações',
      'Comunidades',
      'Clipz e carteira',
    ],
    description:
      'O principal canal é o próprio app da Soul Up, por meio de uma aba ou seção chamada SoulMove. A experiência pode ser reforçada por notificações, comunidades, carteira de Pontos Soul Up, Clipz, rankings e campanhas patrocinadas. O objetivo é manter o usuário dentro do ecossistema existente, sem criar um app separado.',
    area: 'bmc-channels',
  },
  {
    id: 'segments',
    number: '07',
    title: 'Segmentos de clientes',
    subtitle: 'Pessoas, comunidades e marcas',
    icon: Users,
    bullets: [
      'Usuários de transporte público',
      'Jovens urbanos',
      'Estudantes e trabalhadores',
      'Comunidades da Soul Up',
      'Marcas com foco em ESG',
    ],
    description:
      'O SoulMove cria valor para usuários da Soul Up que utilizam transporte público, especialmente jovens urbanos, estudantes e trabalhadores. Também atende comunidades dentro do app e marcas interessadas em ESG, mobilidade urbana, juventude, consumo consciente e campanhas de engajamento mensurável.',
    area: 'bmc-segments',
  },
  {
    id: 'costs',
    number: '08',
    title: 'Estrutura de custos',
    subtitle: 'Operação e segurança',
    icon: ShieldCheck,
    bullets: [
      'Desenvolvimento',
      'Infraestrutura e processamento',
      'Segurança e antifraude',
      'Design e comunicação',
      'Recompensas não patrocinadas',
    ],
    description:
      'Os custos envolvem desenvolvimento, manutenção, infraestrutura, processamento de eventos, armazenamento, segurança, antifraude, design, comunicação e operação de campanhas. Quando não houver patrocínio, a emissão de pontos ou benefícios também pode gerar custo para o ecossistema.',
    area: 'bmc-costs',
  },
  {
    id: 'revenues',
    number: '09',
    title: 'Fontes de receita',
    subtitle: 'Financiamento por campanhas',
    icon: BadgeDollarSign,
    bullets: [
      'Patrocínio de missões',
      'Campanhas B2B',
      'Mídia segmentada',
      'Cupons patrocinados',
      'Ativações ESG',
    ],
    description:
      'A principal hipótese de receita é o patrocínio de missões por marcas. Empresas podem financiar campanhas de mobilidade sustentável em troca de visibilidade, associação ESG, engajamento e relatórios agregados de participação. Isso ajuda a responder quem financia os Pontos Soul Up gerados pelas jornadas.',
    area: 'bmc-revenues',
  },
]

const journeyFlow = [
  'Jornada',
  'Validação',
  'CO₂ evitado',
  'Pontos Soul Up',
  'Ranking',
]

function CanvasCard({ block, active, onSelect, staticView = false }) {
  const Icon = block.icon
  const CardElement = staticView ? 'article' : 'button'
  const interactiveProps = staticView
    ? {}
    : {
        type: 'button',
        onMouseEnter: () => onSelect(block.id),
        onClick: () => onSelect(block.id),
        onFocus: () => onSelect(block.id),
        'aria-pressed': active,
        'aria-label': `${block.title}. Exibir explicação completa.`,
        'data-testid': `block-${block.id}`,
      }

  return (
    <CardElement
      className={`canvas-card ${staticView ? 'canvas-card--static' : ''} ${block.area} ${
        block.featured ? 'canvas-card--value' : ''
      } ${active && !staticView ? 'canvas-card--active' : ''}`}
      {...interactiveProps}
    >
      <div className="card-heading">
        <span className="card-number">{block.number}</span>
        <Icon className="card-icon" aria-hidden="true" />
      </div>
      <h3>{block.title}</h3>
      <ul>
        {block.bullets.map((bullet) => (
          <li key={bullet}>
            <span aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
    </CardElement>
  )
}

function DetailPanel({ block }) {
  const Icon = block.icon

  return (
    <aside className="detail-panel" aria-label="Detalhe do bloco selecionado">
      <div className="detail-content" key={block.id} aria-live="polite">
        <div className="detail-overline">
          <span>Bloco {block.number}</span>
          <Icon aria-hidden="true" />
        </div>
        <h2>{block.title}</h2>
        <p className="detail-subtitle">{block.subtitle}</p>
        <div className="detail-rule" aria-hidden="true" />
        <p className="detail-description">{block.description}</p>
      </div>
      <div className="detail-note">
        <Leaf aria-hidden="true" />
        <span>Validação, gamificação e recompensa dentro da Soul Up.</span>
      </div>
    </aside>
  )
}

function FlowTrack() {
  return (
    <div className="flow-track" aria-label="Fluxo de valor SoulMove">
      <BusFront className="flow-bus" aria-hidden="true" />
      {journeyFlow.map((stage, index) => (
        <div className="flow-stage" key={stage}>
          <span>{stage}</span>
          {index < journeyFlow.length - 1 && (
            <ArrowRight className="flow-arrow" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [activeId, setActiveId] = useState('value')
  const staticView = new URLSearchParams(window.location.search).has('static')
  const activeBlock = blocks.find((block) => block.id === activeId) ?? blocks[3]

  return (
    <div className="presentation-page">
      <main
        className={`slide-frame ${staticView ? 'slide-frame--static' : ''}`}
        aria-label="Business Model Canvas SoulMove"
      >
        <div className="paper-texture" aria-hidden="true" />
        <header className="slide-header">
          <div>
            <p className="header-kicker">SoulMove / Estratégia de produto</p>
            <h1>Business Model Canvas</h1>
            <p className="header-subtitle">
              SoulMove — mobilidade sustentável gamificada dentro da Soul Up
            </p>
          </div>
          <div className="header-side">
            <span className="sprint-badge">
              {staticView ? 'BMC estratégico • Sprint A' : 'BMC interativo • Sprint A'}
            </span>
            <p>
              O SoulMove transforma o deslocamento que o usuário já realiza em
              impacto mensurável, reconhecimento e valor para o ecossistema Soul
              Up.
            </p>
          </div>
        </header>

        <section className={`slide-content ${staticView ? 'slide-content--static' : ''}`}>
          <div className="canvas-column">
            <div className="canvas-guide">
              <span>Modelo de negócio / nove blocos</span>
              <p>
                {staticView
                  ? 'Validação, gamificação e recompensa dentro da Soul Up.'
                  : 'Passe o mouse ou clique nos blocos para ver a explicação completa.'}
              </p>
            </div>
            <div className="bmc-grid" aria-label="Nove blocos do Business Model Canvas">
              {blocks.map((block) => (
                <CanvasCard
                  key={block.id}
                  block={block}
                  active={activeId === block.id}
                  onSelect={setActiveId}
                  staticView={staticView}
                />
              ))}
            </div>
          </div>
          {!staticView && <DetailPanel block={activeBlock} />}
        </section>

        <footer className="slide-footer">
          <p className="footer-signature">SoulMove • FIAP Challenge 2026 • 1TDS</p>
          <FlowTrack />
        </footer>
      </main>
    </div>
  )
}

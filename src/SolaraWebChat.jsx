import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ExternalLink } from 'lucide-react'
import './solara-invite.css'

const SCRIPT_ID = 'solara-watson-web-chat'
const CHAT_OPTIONS = {
  integrationID: 'a2b4b691-c037-41b9-809a-86dbc2685bae',
  region: 'https://integrations.us-east.assistant.watson.appdomain.cloud',
  serviceInstanceID: '6ad8ba01-959f-421a-9a87-56ab3ee96ff4',
}

export default function SolaraWebChat() {
  const staticView = new URLSearchParams(window.location.search).has('static')
  const [inviteTarget, setInviteTarget] = useState(null)

  useEffect(() => {
    if (staticView) {
      return undefined
    }

    const target = document.querySelector('.detail-note')
    const panel = target?.closest('.detail-panel')

    if (target && panel) {
      target.classList.add('detail-note--solara')
      panel.classList.add('detail-panel--solara')
      setInviteTarget(target)
    }

    return () => {
      target?.classList.remove('detail-note--solara')
      panel?.classList.remove('detail-panel--solara')
    }
  }, [staticView])

  useEffect(() => {
    if (staticView) {
      return undefined
    }

    window.watsonAssistantChatOptions = {
      ...CHAT_OPTIONS,
      onLoad: async (instance) => {
        await instance.render()
      },
    }

    if (document.getElementById(SCRIPT_ID)) {
      return undefined
    }

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.async = true
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
      window.watsonAssistantChatOptions.clientVersion || 'latest'
    }/WatsonAssistantChatEntry.js`
    document.head.appendChild(script)

    return undefined
  }, [staticView])

  if (!inviteTarget || staticView) {
    return null
  }

  return createPortal(
    <section className="solara-invite" aria-label="Experiência completa da Solara">
      <p className="solara-overline">Assistente virtual • Solara</p>
      <h3>Quer testar a experiência completa?</h3>
      <p>
        No webchat, tire dúvidas sobre o SoulMove e sua experiência na Soul Up.
      </p>
      <p>
        Para simular uma jornada de ônibus, testar áudio e receber respostas
        por voz, fale com a Solara no Telegram.
      </p>
      <a
        className="telegram-link"
        href="https://t.me/SolaraSoulMoveBot"
        target="_blank"
        rel="noreferrer"
      >
        Conversar no Telegram
        <ExternalLink aria-hidden="true" />
      </a>
    </section>,
    inviteTarget,
  )
}

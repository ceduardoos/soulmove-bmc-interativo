import { useEffect } from 'react'

const SCRIPT_ID = 'solara-watson-web-chat'
const CHAT_OPTIONS = {
  integrationID: 'a2b4b691-c037-41b9-809a-86dbc2685bae',
  region: 'https://integrations.us-east.assistant.watson.appdomain.cloud',
  serviceInstanceID: '6ad8ba01-959f-421a-9a87-56ab3ee96ff4',
}

export default function SolaraWebChat() {
  const staticView = new URLSearchParams(window.location.search).has('static')

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

  return null
}

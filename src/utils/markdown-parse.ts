import blockQuoteStyles from "../components/DiscordMessage/DiscordQuote/styles.css"
import view from "../components/DiscordView/styles.css"

export default function parseMarkdown(message: string) {
    const result = message
        .replace(/\n/gim, "<br>")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
        .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/gim, "<i>$1</i>")
        .replace(/~~(.*?)~~/gim, "<s>$1</s>")
        .replace(/__(.*?)__/gim, "<em>$1</em>")
        // .replace(/`(.*)`/gim, "<code>$1</code>") // scrollbar-thin-thumb background-secondary
        .replace(
            /<:\w+:(\d{18})>/gim,
            "<img src='https://cdn.discordapp.com/emojis/$1.png'></img>"
        )
        .replace(
            /<a:\w+:(\d{18})>/gim,
            "<img src='https://cdn.discordapp.com/emojis/$1.gif'></img>"
        )
        .replace(
            /^(?: *>>> ([\s\S]*))|(?:^ *>(?!>>) +.+\n)+(?:^ *>(?!>>) .+\n?)+|^(?: *>(?!>>) ([^\n]*))(\n?)/gm,
            (all, match1, match2, newLine) => {
                return `<div class="${
                    blockQuoteStyles["block-quote"]
                }"><blockquote>${
                    match1 || match2 || newLine
                        ? match1 || match2
                        : all.replace(/^ *> /gm, "")
                }</blockquote></div>`
            }
        )

        .replace(
            /```(?:([a-z0-9_+\-.]+?)\n)?\n*([^\n][^]*?)\n*```/gi,
            (_, w, x) => {
                if (w) return `<pre><code class="${w}">${x.trim()}</code></pre>`
                else
                    return `<pre><code class="${
                        view.hljs
                    } nohighlight">${x.trim()}</code></pre>`
            }
        )
    return result
}

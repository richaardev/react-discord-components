import React from "react"
import { DiscordMessageEmbed } from "../../../typings/DiscordMessage"
import { DiscordEmbedAuthor } from "./DiscordEmbedAuthor/DiscordEmbedAuthor"
import { DiscordEmbedDescription } from "./DiscordEmbedDescription/DiscordEmbedDescription"
import { DiscordEmbedFields } from "./DiscordEmbedFields/DiscordEmbedFields"
import { DiscordEmbedFooter } from "./DiscordEmbedFooter/DiscordEmbedFooter"
import { DiscordEmbedImage } from "./DiscordEmbedImage/DiscordEmbedImage"
import { DiscordEmbedThumbnail } from "./DiscordEmbedThumbnail/DiscordEmbedThumbnail"
import { DiscordEmbedTitle } from "./DiscordEmbedTitle/DiscordEmbedTitle"
import styles from "./styles.css"

interface Props {
    embed: DiscordMessageEmbed
}

export const DiscordEmbed: React.FC<Props> = (props) => {
    const { embed } = props
    let style = {}
    if (embed.color) {
        style = {
            ...style,
            borderLeft: "4px solid #" + embed.color?.toString(16)
        }
    }

    return (
        <article style={style} className={styles.embed}>
            <div className={styles["embed-contents"]}>
                {embed.author && (
                    <DiscordEmbedAuthor
                        name={embed.author.name}
                        icon={embed.author.icon_url}
                        url={embed.author.url}
                    />
                )}
                {embed.title && (
                    <DiscordEmbedTitle text={embed.title} url={embed.url} />
                )}
                {embed.description && (
                    <DiscordEmbedDescription description={embed.description} />
                )}
                {embed.fields && <DiscordEmbedFields fields={embed.fields} />}
                {embed.image && <DiscordEmbedImage image={embed.image.url} />}
                {embed.thumbnail && (
                    <DiscordEmbedThumbnail url={embed.thumbnail.url} />
                )}
                {embed.footer && (
                    <DiscordEmbedFooter
                        text={embed.footer.text}
                        icon_url={embed.footer.icon_url}
                        timestamp={embed.timestamp}
                    />
                )}
            </div>
        </article>
    )
}

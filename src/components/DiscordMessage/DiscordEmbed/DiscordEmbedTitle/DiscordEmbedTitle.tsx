import React from "react"
import parseMarkdown from "../../../../utils/markdown-parse"
import styles from "./styles.css"

export const DiscordEmbedTitle: React.FC<{ text: string; url?: string }> = (
    props
) => {
    const { text, url } = props
    const hasLink =
        props.url !== undefined || props.url != null ? "has-link" : ""

    return (
        <div className={styles["embed-title-container"]}>
            <a
                className={`${styles["embed-title"]} ${styles[hasLink]}`}
                href={url}
                dangerouslySetInnerHTML={{ __html: parseMarkdown(text) }}
            />
        </div>
    )
}

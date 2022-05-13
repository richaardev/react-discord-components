import React from "react"
import parseMarkdown from "../../../../utils/markdown-parse"
import styles from "./styles.css"

export const DiscordEmbedDescription: React.FC<{ description: string }> = (
    props
) => {
    return (
        <div
            className={styles["embed-description"]}
            dangerouslySetInnerHTML={{
                __html: parseMarkdown(props.description)
            }}
        />
    )
}

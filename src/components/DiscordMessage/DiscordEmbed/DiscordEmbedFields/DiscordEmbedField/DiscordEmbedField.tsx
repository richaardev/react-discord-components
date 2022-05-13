import React from "react"
import parseMarkdown from "../../../../../utils/markdown-parse"
import styles from "./styles.css"

interface Props {
    name: string
    value: string
    inline?: boolean
    style?: React.CSSProperties
}

export const DiscordEmbedField: React.FC<Props> = (props) => {
    return (
        <div className={styles["embed-field"]} style={props.style}>
            <div
                className={styles["embed-field-name"]}
                dangerouslySetInnerHTML={{ __html: parseMarkdown(props.name) }}
            />
            <div
                className={styles["embed-field-value"]}
                dangerouslySetInnerHTML={{ __html: parseMarkdown(props.value) }}
            />
        </div>
    )
}

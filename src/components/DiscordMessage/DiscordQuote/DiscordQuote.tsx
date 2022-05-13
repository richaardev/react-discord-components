import React from "react"
import styles from "./DiscordQuote.css"

interface Props {
    text?: string
}

export const DiscordQuote: React.FC<Props> = (props) => {
    const { text } = props
    return (
        <div className={styles["block-quote"]}>
            <div className={styles["block-quote-divider"]} />
            <blockquote>{text}</blockquote>
        </div>
    )
}

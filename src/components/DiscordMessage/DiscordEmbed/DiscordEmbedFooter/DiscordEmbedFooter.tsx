import React from "react"
import styles from "./styles.css"

export const DiscordEmbedFooter: React.FC<{
    text?: string
    icon_url?: string
    timestamp?: Date | number
}> = (props) => {
    const { icon_url, text, timestamp } = props

    return (
        <div className={styles["embed-footer-container"]}>
            {icon_url && (
                <img className={styles["embed-footer-icon"]} src={icon_url} />
            )}
            <div className={styles["embed-footer-text"]}>
                {text}
                {timestamp && (
                    <React.Fragment>
                        <span className={styles["embed-footer-separator"]} />
                        asdj
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

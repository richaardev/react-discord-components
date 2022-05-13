import React from "react"
import styles from "./styles.css"

export const DiscordEmbedThumbnail: React.FC<{ url: string }> = (props) => {
    const { url } = props

    return (
        <div className={styles["embed-thumbnail"]}>
            <img src={url} className={styles["embed-thumbnail-image"]} />
        </div>
    )
}

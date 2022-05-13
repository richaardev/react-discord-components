import React from "react"
import styles from "./styles.css"

export const DiscordEmbedImage: React.FC<{ image: string }> = (props) => {
    return (
        <div className={styles["embed-image"]}>
            <img
                src={props.image}
                className={styles["message-embed-image-content"]}
            />
        </div>
    )
}

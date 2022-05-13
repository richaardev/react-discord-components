import React from "react"
import styles from "./styles.css"

export const DiscordEmbedAuthor: React.FC<{
    name: string
    icon?: string
    url?: string
}> = (props) => {
    // const hasLink =
    //     props.url !== undefined || props.url != null ? "has-link" : ""
    return (
        <div className={styles["embed-author-container"]}>
            {props.icon && (
                <img
                    className={styles["embed-author-image"]}
                    src="https://cdn.discordapp.com/avatars/646416170123132959/44331c48d83a34287c70795fee1723c1.png"
                />
            )}
            <a className={`${styles["embed-author-name"]}`} href={props.url}>
                {props.name}
            </a>
        </div>
    )
}

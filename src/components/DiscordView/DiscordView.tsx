// import "../../styles/dark.css";

import React from "react"
import "../../styles/dark.css"
import "../../styles/font.css"
import styles from "./styles.css"

interface Props {
    children: React.ReactNode
}

export const DiscordView: React.FC<Props> = ({ children }) => {
    return <div className={styles["discord-view"]}>{children}</div>
}

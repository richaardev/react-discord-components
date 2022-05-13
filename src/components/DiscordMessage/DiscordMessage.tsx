import React from "react"
import { DiscordMessage as DMsg } from "../../typings/DiscordMessage"
import parseMarkdown from "../../utils/markdown-parse"
import { DiscordEmbed } from "./DiscordEmbed/DiscordEmbed"
import styles from "./styles.css"

interface Props {
    author: {
        name: string
        avatar: string
    }

    message: DMsg
    options?: {
        isMentioned?: boolean
        isBot?: boolean
        isVerified?: boolean
    }
}

export const DiscordMessage: React.FC<Props> = (props) => {
    const mentioned = props.options?.isMentioned ? "hasMention" : ""

    return (
        <div className={`${styles[`message-container`]} ${styles[mentioned]}`}>
            <div className={styles["message-contents"]}>
                <img
                    className={styles["message-author-avatar"]}
                    src={props.author.avatar}
                />
                <h2 className={styles["message-header"]}>
                    <span className={styles["message-author-username"]}>
                        {props.author.name}

                        {props.options?.isBot && (
                            <span className={styles["message-bot-tag"]}>
                                {props.options?.isVerified && (
                                    <svg
                                        className={
                                            styles["message-bot-verified"]
                                        }
                                        aria-label="Bot verificado"
                                        aria-hidden="false"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 15.2"
                                    >
                                        <path
                                            d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                )}
                                <span className={styles["message-bot-text"]}>
                                    BOT
                                </span>
                            </span>
                        )}
                    </span>
                    <span className={styles["message-timestamp"]}>
                        Hoje ás 22:50
                    </span>
                </h2>
                <div
                    className={styles["message-content"]}
                    dangerouslySetInnerHTML={{
                        __html: parseMarkdown(props.message.content ?? "")
                    }}
                />
                {props.message.embeds && (
                    <div className={styles["message-acessories"]}>
                        {props.message.embeds?.map((embed, i) => (
                            <DiscordEmbed key={i} embed={embed} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

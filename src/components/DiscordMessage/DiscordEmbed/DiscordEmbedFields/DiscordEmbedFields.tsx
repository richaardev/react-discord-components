import React from "react"
import { DiscordMessageEmbedField } from "../../../../typings/DiscordMessage"
import { DiscordEmbedField } from "./DiscordEmbedField/DiscordEmbedField"
import styles from "./styles.css"

interface Props {
    fields: DiscordMessageEmbedField[]
}

export const DiscordEmbedFields: React.FC<Props> = (props) => {
    const elements: string[] = []
    props.fields.forEach((field, i) => {
        if (elements.length > i) return

        if (field.inline) {
            if (props.fields[i + 1].inline && props.fields[i + 2].inline) {
                elements.push("1 / 5")
                elements.push("5 / 9")
                elements.push("9 / 13")
            } else if (props.fields[i + 1].inline) {
                elements.push("1 / 7")
                elements.push("7 / 13")
            } else {
                elements.push("1 / 13")
            }
            return
        }

        elements.push("1 / 13")
    })

    return (
        <div className={styles["embed-fields"]}>
            {props.fields.map((field, i) => {
                return (
                    <DiscordEmbedField
                        key={i}
                        style={{ gridColumn: elements[i] }}
                        name={field.name}
                        value={field.value}
                        inline={field.inline}
                    />
                )
            })}
        </div>
    )
}

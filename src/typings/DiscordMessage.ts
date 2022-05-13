export interface DiscordMessage {
    content?: string
    embeds?: DiscordMessageEmbed[]
}

export interface DiscordMessageEmbed {
    title?: string
    description?: string
    url?: string
    timestamp?: Date | number
    color?: number
    footer?: {
        text: string
        icon_url?: string
    }
    image?: {
        width?: number
        height?: number
        url: string
    }
    thumbnail?: {
        width?: number
        height?: number
        url: string
    }
    author?: {
        name: string
        url?: string
        icon_url?: string
    }
    fields?: DiscordMessageEmbedField[]
}

export interface DiscordMessageEmbedField {
    name: string
    value: string
    inline?: boolean
}

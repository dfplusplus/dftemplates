export type Template = {
    blocks: Block[]
}

interface GenericBlock {
    id: "block"
}

interface EmptyBlock extends GenericBlock {
    block: "blank" | "else"
}

interface ArgsBlock extends GenericBlock {
    args: {
        items: Item[]
    }
}

interface DataBlock extends ArgsBlock {
    block: "call_func" 
    | "start_process" 
    | "process"
    | "func"
    data: string
}

interface ActionBlock extends ArgsBlock {
    action: string
}

interface GenericActionBlock extends ActionBlock {
    block: "event"
    | "entity_event"
    | "game_action"
    | "if_game"
    | "set_var"
    | "if_var"
    | "control"
    | "repeat"
}

interface TargettableBlock extends ActionBlock {
    block: "player_action"
    | "if_player"
    | "entity_action"
    | "if_entity"
    target?: string
}

interface SubActionBlock extends ActionBlock {
    block: "repeat"
    | "select_obj"
    subAction: string
}

interface BracketBlock {
    id: "bracket"
    direct: "open" | "close"
    type: "norm" | "repeat"
}

type Block = EmptyBlock 
| DataBlock 
| GenericActionBlock
| TargettableBlock
| SubActionBlock
| BracketBlock 

interface Item {
    item: PotionItem 
    | ParticleItem
    | SoundItem
    | VectorItem
    | LocationItem
    | NumItem
    | TextTrack
    | GameValueItem
    | VarItem
    | NBTITem
    | TagItem
    slot: number
}

interface PotionItem {
    id: "pot"
    data: {
        pot: string
        dur: number
        amp: number
    }
}

interface ParticleItem {
    id: "part"
    data: {
        particle: string
        cluster: {
            amount: number
            horizontal: number
            vertical: number
        }
        data: {
            x?: number
            y?: number
            z?: number
            material?: string
            motionVariation?: number
            rgb?: number
            colorVariation?: number
            size?: number
            sizeVariation?: number
        }
    }
}

interface SoundItem {
    id: "snd"
    data: {
        sound: string
        pitch: number
        vol: number
    }
}

interface VectorItem {
    id: "vec"
    data: {
        x: number
        y: number
        z: number
    }
}

interface LocationItem {
    id: "loc"
    data: {
        isBlock: boolean
        loc: {
            x: number
            y: number
            z: number
            pitch: number
            yaw: number
        }
    }
}

interface NumItem {
    id: "num"
    data: {
        name: string
    }
}

interface TextItem {
    id: "txt"
    data: {
        name: string
    }
}

interface GameValueItem {
    id: "g_val"
    data: {
        type: string
        target: string
    }
}

interface VarItem {
    id: "var"
    data: {
        name: string
        scope: "unsaved" | "saved" | "local"
    }
}

interface NBTITem {
    id: "item"
    data: {
        item: string
    }
}

interface TagItem {
    id: "bl_tag"
    data: {
        option: string
        tag: string
        action: string
        block: string
    }
}
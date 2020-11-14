export interface GameMenuItem {
    name: string;
    url: string;
    type: GameItemType;
    active: boolean;
    isHashBorder: boolean;
    description?: string;
    countDetail?: string;
    prev: string;
    next: string;
    nextItems: GameMenuItem[];
}

export enum GameItemType {
    GAME = "game",
    SUBMENU = "submenu",
    SYSTEM = "system",
    MASTER = "master",
    CACHE_CONSOLE = "cache_console"
}
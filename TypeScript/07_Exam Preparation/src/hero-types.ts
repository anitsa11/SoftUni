import { WithId } from "./models";
import { HeroRole } from "./models";
import { Hero } from "./models";
import { Weapon } from "./models";

export class GuildStash<T extends WithId> {
    private records: T[] = [];

    public add(item: T): void {
        this.records.push(item);
    }

    public take(id: number): T | undefined {
        const foundIndex = this.records.findIndex((item) => item.id === id);
        if (foundIndex === -1) 
            return undefined
        return this.records.splice(foundIndex,1)[0];
    }

    public getAll(): T[] {
        return this.records.slice() //-плитко копие
    }    
}

export abstract class BaseHero implements Hero {
    id: number;
    name: string;
    level: number; 
    role: HeroRole;
    weapons: Weapon[] = [];

    constructor(id: number, name: string, level: number, role: HeroRole) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.role = role;
    }

    abstract calculateStamina(): number;
    abstract attack(): number;
}


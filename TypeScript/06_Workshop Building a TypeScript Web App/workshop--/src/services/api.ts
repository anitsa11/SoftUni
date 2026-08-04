
import type { OmitId } from "../types/omitId";

export abstract class ApiService<T extends { id: number }> {
    protected baseServiceUrl: string

    constructor(baseServiceUrl: string) {
        this.baseServiceUrl = baseServiceUrl;
    }

    async getll(): Promise<T[]> {
        const res = await fetch(this.baseServiceUrl);
        return res.json();
    }

    async create(itemData: OmitId<T>): Promise<T> {
        const res = await fetch(this.baseServiceUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData)
        })

        return res.json();
    }

    async update(id: number, itemData: T): Promise<T> {
        const res = await fetch(`${this.baseServiceUrl}/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(itemData)
            });

        return res.json();
    }

    async delete(id: number): Promise<void> {
        await fetch(`${this.baseServiceUrl}/${id}`, {
            method: "DELETE"
        });
    }
}
interface RestApiClient<T> {
    getAll(): Promise<T[]>;
    getOne(id: string): Promise<T>;
}

interface Site {
    name: string;
}

class SitesApiClient implements RestApiClient<Site> {
    getAll(): Promise<Site[]> {
        const res: Site[] = [{ name: "website1" }];
        return Promise.resolve(res);
    }

    getOne(id: string): Promise<Site> {
        return Promise.resolve({ name: "website1" });
    }
}
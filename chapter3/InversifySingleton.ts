import "reflect-metadata";
import { injectable, Container } from "inversify";
interface UsersApiService {
    getUsers(): Promise<string[]>;
}

let TYPES = {
    UsersApiService: Symbol("UsersApiService")
}

@injectable()
class UsersApiServiceImp implements UsersApiService {
    getUsers(): Promise<string[]> {
        return Promise.resolve(["Alex", "John", "Sarah", "Adrian"]);
    }
}

const container = new Container();
container
    .bind<UsersApiService>(TYPES.UsersApiService)
    .to(UsersApiServiceImp)
    .inSingletonScope();

container
    .get<UsersApiService>(TYPES.UsersApiService)
    .getUsers()
    .then((res) => console.log(res));

export class UsersAPISingleton {
    private static instance: UsersAPISingleton;

    private constructor() { }

    static getInstance() {
        if (!UsersAPISingleton.instance) {
            UsersAPISingleton.instance = new UsersAPISingleton();
        }

        return UsersAPISingleton.instance;
    }

    getUsers(): Promise<any> {
        return Promise.resolve(["Alex", "John", "Sarah"]);
    }

}

const usersPromise = UsersAPISingleton.getInstance().getUsers();
usersPromise.then((res) => {
    console.log(res);
})
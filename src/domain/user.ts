export class User {
    id: number;
    name: string;
    balance: number;

    constructor(object: User) {
        this.id = object.id;
        this.name = object.name;
        this.balance = object.balance;
    }
}
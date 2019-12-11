import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';

export class ServerData implements InMemoryDbService {
    createDb() {
        const users = [
            { id: 1, email: "wfm@mail.ru",password: "12345678",name: "Администратор"}
        ];
        return users;
    }
}

// import { File } from 'buffer';
import fs from 'fs';
import path from 'node:path';

const dbPath = path.join(__dirname, '../Database/database.json');

class OauthUserRepositoryService {
  async create(data: { email: string; id: string }) {
    const rawData = fs.readFileSync(dbPath, {
      encoding: 'utf8',
    });

    const users = JSON.parse(rawData);

    users.push(data);
    fs.writeFileSync(dbPath, JSON.stringify(users));
    return data;
  }

  async getUser(email: string) {
    const rawData = fs.readFileSync(dbPath, {
      encoding: 'utf8',
    });

    const users = JSON.parse(rawData);

    for (let user of users) {
      if (user.email == email) {
        return user;
      }
    }

    return null;
  }

  getAllUsers() {
    const rawData = fs.readFileSync(dbPath, {
      encoding: 'utf8',
    });

    const users = JSON.parse(rawData);
    return users;
  }
}

export default OauthUserRepositoryService;

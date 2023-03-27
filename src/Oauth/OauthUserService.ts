import OauthUserRepositoryService from '../Respositories/UserRepositories';

class OauthUserService {
  private noauthUserRepositoryService: OauthUserRepositoryService;

  constructor() {
    this.noauthUserRepositoryService = new OauthUserRepositoryService();
  }

  async create(profile: { email: string; id: string }) {
    const { email, id } = profile;
    const userExists = await this.noauthUserRepositoryService.getUser(email);
    
    if (userExists) {
      return userExists;
    }

    const user = await this.noauthUserRepositoryService.create({ email, id });
    return user;
  }
}

export default OauthUserService;

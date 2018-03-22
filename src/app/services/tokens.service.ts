export default class TokensService {

  public reader(): string {
    return localStorage.getItem('token')
  }

}

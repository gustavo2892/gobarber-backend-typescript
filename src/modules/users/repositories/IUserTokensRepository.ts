import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

export default interface IUserTokensReepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
}

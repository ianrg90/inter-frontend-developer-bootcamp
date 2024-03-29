import User from "../models/user.models";
import db from "../db";
import DatabaseError from "../models/errors/database.error.model";

class UserRepository {
  async findAllUsers(): Promise<User[]> {
    const query = `
        SELECT uuid, username
        FROM application_user
        `;
    const result = await db.query<User>(query);
    const rows = result.rows;
    //const {rows} = await db.query<User>(query)

    return rows || [];
  }

  async findById(uuid: string): Promise<User> {
    try {
      const query = ` 
            SELECT uuid, username
            FROM application_user
            WHERE uuid = $1 
        `;
      const values = [uuid];
      const { rows } = await db.query<User>(query, values);
      const [user] = rows;

      return user;
    } catch (error) {
      throw new DatabaseError("Erro na pesquisa por ID", error);
    }
  }

  async findByUsernameAndPassword(
    username: string,
    password: string
  ): Promise<User | null> {
    try {
      const query = `
            SELECT uuid, username
            FROM application_user
            WHERE username = $1 
            AND password = crypt($2, 'my_key')
        `;
      const values = [username, password];

      const { rows } = await db.query<User>(query, values);
      const [user] = rows;

      return !user ? null : user;
    } catch (error) {
        throw new DatabaseError("Erro na consulta por username and password", error);
    }
  }

  async create(user: User): Promise<string> {
    const script = `
            INSERT INTO application_user(
                username,
                password
            )
            VALUES ($1, crypt($2, 'my_key'))
            RETURNING uuid
        `;
    const values = [user.username, user.password];

    const { rows } = await db.query<{ uuid: string }>(script, values);

    const [newUser] = rows;
    return newUser.uuid;
  }

  async update(user: User): Promise<void> {
    const script = `
            UPDATE application_user
            SET
                username = $1,
                password = crypt($2, 'my_key')
            WHERE uuid = $3
        `;
    const values = [user.username, user.password, user.uuid];

    await db.query(script, values);
  }

  async remove(uuid: string): Promise<void> {
    const script = `
            DELETE
            FROM application_user
            WHERE uuid = $1
        `;
    const values = [uuid];
    await db.query(script, values);
  }
}

export default new UserRepository();

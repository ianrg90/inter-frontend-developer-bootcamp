import {Pool} from "pg"

const connectionString = "postgres://kxssaene:N21EAjuWN6ufddW6t6HwnLjAuvlPzS-5@kesavan.db.elephantsql.com/kxssaene"

const db = new Pool({connectionString})

export default db


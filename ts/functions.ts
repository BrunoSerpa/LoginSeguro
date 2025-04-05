function logQuery(sql: string, params?: any[]) {
    console.log(`Executing Query: ${sql}`);
    if (params) console.log(`With Parameters: ${JSON.stringify(params)}`);
};

function encodeHTML(input: string): string {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

export const getAllUsers = async (query: Function) => {
    const sql = 'SELECT * FROM UserTable';
    logQuery(sql);
    const result = await query(sql);
    return result;
};

export const createUser = async (query: Function, email_user: string, password_user: string, name_user: string) => {
    const sanitizedEmail = encodeHTML(email_user);
    const sanitizedPassword = encodeHTML(password_user);
    const sanitizedName = encodeHTML(name_user);

    const sql = 'INSERT INTO UserTable (email_user, password_user, name_user) VALUES ($1, $2, $3)';
    logQuery(sql, [sanitizedEmail, sanitizedPassword, sanitizedName]);
    return query(sql, [sanitizedEmail, sanitizedPassword, sanitizedName]);
};

export const login = async (query: Function, email_user: string, password_user: string) => {
    const sanitizedEmail = encodeHTML(email_user);
    const sanitizedPassword = encodeHTML(password_user);

    const sql = 'SELECT name_user FROM UserTable WHERE email_user = $1 AND password_user = $2';
    logQuery(sql, [sanitizedEmail, sanitizedPassword]);
    return query(sql, [sanitizedEmail, sanitizedPassword]);
};
import bcrypt from "bcrypt";

export const hashPassowrd = (password: string): string => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export const comparePassword = (raw: string, hash: string): boolean => {
    return bcrypt.compareSync(raw, hash);
}
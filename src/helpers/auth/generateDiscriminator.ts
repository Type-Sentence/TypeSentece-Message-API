import { Request, Response } from "express";
import Users from "../../database/schemas/usersSchema";
import { IUserWithCredentials } from "../../interfaces/userInterafaces";

export const generateDiscriminator = async (req: Request, res: Response, username: string) => {
    try {
        const users = await Users.find<IUserWithCredentials>({ username })  // Return an array of users with that specified username, or return an empty array

        if (users.length <= 0) return "#0001";

        if (users) {
            console.log(users);
            const lastCreatedUsers: IUserWithCredentials = users[users.length - 1];

            const lastDiscriminator = lastCreatedUsers.discriminator;

            let getDiscriminatorNumber = parseInt(lastDiscriminator.substring(1), 10);

            if (getDiscriminatorNumber >= 9999) {
                return res.status(403).send({ msg: "There are to many users with this username" })
            }
            getDiscriminatorNumber++
            const discriminator = getDiscriminatorNumber.toString().padStart(4, "0");
            const formattedDiscriminator = `#${discriminator}`

            return formattedDiscriminator;
        }
    } catch (err) {
        console.log(err);
    }
}
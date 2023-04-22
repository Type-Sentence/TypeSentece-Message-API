import passport from "passport";
import { Strategy } from "passport-local";
import Users from "../database/schemas/usersSchema";
import { comparePassword } from "../helpers/hashingController";
import { IUserWithCredentials } from "../interfaces/userInterafaces";

passport.serializeUser((user: any, done) => {
    console.log("Serializing User...")
    done(null, user.id); //req.sessions.passport.user = user.id;
})

passport.deserializeUser(async (id: string, done) => {
    console.log("Deserializing User...")
    console.log(id);

    try {
        const userDb = await Users.findOne<IUserWithCredentials>({ id });

        if (!userDb) throw new Error("User not found");
        console.log(userDb);
        done(null, userDb);
    } catch (err) {
        console.log(err);
        done(err, null);
    }
})

passport.use(
    new Strategy(
        {
            usernameField: "email",
        },
        async (email: string, password: string, done) => {
            console.log(email);
            console.log(password);

            try {
                if (!email || !password) throw new Error("Missing argumentes, insert email and password")

                const userDb = await Users.findOne<IUserWithCredentials>({ email })

                if (!userDb) throw new Error("User doesn't exist, try another email")

                const isValid = comparePassword(password, userDb.password)

                if (isValid) {
                    console.log("Auth sucessfull")
                    done(null, userDb);
                } else {
                    console.log("Auth unsucessfull")
                    done(null, null)
                }
            } catch (err) {
                done(err, null);
            }
        }
    )
)
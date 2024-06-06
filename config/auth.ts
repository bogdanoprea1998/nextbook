import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const bcrypt = require("bcrypt");

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<any> => {
        console.log(credentials);
        //   let user = null;
        //   const pwHash = bcrypt.hash(credentials.password, 10);
        //   user = await
        return true;
      },
    }),
  ],
});

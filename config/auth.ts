import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { getUserFromDb } from "@/app/_actions/userActions";

const bcrypt = require("bcrypt");

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<any> => {
        let user = null;

        user = await getUserFromDb(credentials.email, credentials.password);

        if (!user) {
          throw new Error("User not found.");
        }

        return user;
      },
    }),
  ],
});

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createUser, getUser } from "./actions";

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },

    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getUser(user.email);

        if (!existingUser) {
          await createUser({
            email: user.email,
            fullName: user.name,
          });
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    async session({ session }) {
      try {
        const user = await getUser(session.user.email);

        session.user.userId = user.id;
        return session;
      } catch (err) {
        console.error("Error in session callback:", err);
        return session;
      }
    },
  },
  pages: {
    signIn: "/signin",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

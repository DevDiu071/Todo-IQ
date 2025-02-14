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
      console.log("Authorized callback:", auth);
      return !!auth?.user;
    },

    async signIn({ user, account, profile }) {
      try {
        console.log("Sign-in Attempt - User:", user);

        const existingUser = await getUser(user.email);
        console.log("Fetched User from DB:", existingUser);

        if (!existingUser) {
          console.log("User not found, creating...");
          const newUser = await createUser({
            email: user.email,
            fullName: user.name,
          });
          console.log("New user created:", newUser);
        } else {
          console.log("User already exists:", existingUser);
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    async session({ session }) {
      try {
        console.log("Session callback - session:", session);
        const user = await getUser(session.user.email);
        console.log("User from session:", user);
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

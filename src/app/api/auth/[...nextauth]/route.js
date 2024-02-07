import clientPromise from "@/libs/mongoClient";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLES_CLIENT_ID,
      clientSecret: process.env.GOOGLES_CLIENT_SECRET
    })
  ],
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
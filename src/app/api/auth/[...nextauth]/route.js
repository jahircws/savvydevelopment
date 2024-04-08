import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = (req, res) => {
    return NextAuth(req, res, authOptions(req, res))
}

export { handler as GET, handler as POST };
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (userId) {
    try {
      // Clerk'dan foydalanuvchi ma'lumotlarini olib, bazaga yozamiz
      const clerkUser = await fetch(`https://api.clerk.com/v1/users/${userId}`, {
        headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` },
      }).then((res) => res.json());

      if (clerkUser && clerkUser.email_addresses?.length > 0) {
        await prisma.user.upsert({
          where: { clerkId: userId },
          update: {
            email: clerkUser.email_addresses[0].email_address,
            name: `${clerkUser.first_name ?? ""} ${clerkUser.last_name ?? ""}`.trim() || "Student",
          },
          create: {
            clerkId: userId,
            email: clerkUser.email_addresses[0].email_address,
            name: `${clerkUser.first_name ?? ""} ${clerkUser.last_name ?? ""}`.trim() || "Student",
          },
        });
      }
    } catch (error) {
      console.error("Middleware user upsert error:", error);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
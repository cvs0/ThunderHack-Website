import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {
    const { username } = await req.json();

    if (!username) {
        return new NextResponse("Username not included.", { status: 400 })
    }

    try {
        const login = await prisma.login.create({
            data: {
                username: username
            }
        })

        return NextResponse.json(login)
    } catch (error: any) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function GET(req: Request) {
    try {
        const uniqueUsernames = await prisma.login.findMany({
            distinct: ['username'],
            select: {
                username: true,
            }
        });

        const totalUsersCount = uniqueUsernames.length;

        return NextResponse.json({ totalUsersCount });
    } catch (error: any) {
        return new NextResponse("Internal Error", { status: 500 });
    }
}
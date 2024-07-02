import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET(request:NextRequest){
const users = await prisma.user.findMany({orderBy:{name:'asc'}});
return NextResponse.json(users);
}
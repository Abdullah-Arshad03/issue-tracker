import { get } from "http";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest){

    const token = await getToken({req : request})
    console.log('this is the token: ', token)
    return NextResponse.json(token)

}
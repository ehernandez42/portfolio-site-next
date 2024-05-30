import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest){
    const ipAddress = await fetch("https://api.myip.com")
    const html = await ipAddress.text()
    return NextResponse.json(html);
}

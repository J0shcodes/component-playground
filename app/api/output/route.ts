import { NextRequest, NextResponse } from "next/server";
import axios from "axios";


const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})

export async function POST(request: NextRequest): Promise<NextResponse> {
    const body = await request.json()
    console.log(body)

    const response = await API.post("/execute", body)
    return response.data
}
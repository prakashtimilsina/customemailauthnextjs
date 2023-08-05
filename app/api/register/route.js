import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req){
    try {
        const {name, email, password} = await req.json();
        const hassedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        const user = await User.create({name, email, password : hassedPassword})
        return NextResponse.json({message: "User Registered.", user}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "An error occurred while registering the user."}, {status: 500})
    }

};
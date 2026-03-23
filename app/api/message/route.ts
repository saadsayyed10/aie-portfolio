import { connectToDB } from "@/lib/connect-db";
import Message from "@/model/Message";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const getAllMessages = await Message.find();
    return NextResponse.json({ messages: getAllMessages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Cannot get messages" }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, vision } = await req.json();

    connectToDB();

    const addMessage = await Message.create({ name, email, vision });
    return NextResponse.json({ message: addMessage }, { status: 201 });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error }, { status: 500 });
  }
}

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

import ConnectToDb from "@/utils/ConnectToDb";
import User from "@/models/User";
import { createJWT, hashPassword } from "@/utils/utils";

export function GET() {
  return Response.json({ message: "bad request" });
}

export async function POST(req: Request) {
  ConnectToDb();
  const body = await req.json();
  const { name, email, password } = body;
  if (!name || !email || !password) {
    return Response.json({ message: "bad request" },{status:400});
  }
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    return Response.json({ message: "user already exist" },{status:400});
  }

  const hashedPassword = await hashPassword(password);
  const createdJWT = await createJWT(email);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return Response.json(
    { message: "user created", user },
    {
      status: 201,
      headers: {
        "Set-Cookie": `token=${createdJWT}; HttpOnly; Path=/; Max-Age=86400;`,
      },
    }
  );
}

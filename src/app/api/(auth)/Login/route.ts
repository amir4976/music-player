
import ConnectToDb from "@/utils/ConnectToDb";
import User from "@/models/User";
import { createJWT, verifyPassword } from "@/utils/utils";

export function GET() {
  return Response.json({ message: "bad request" });
}

export async function POST(req: Request) {
  ConnectToDb();
  const body = await req.json();
  const { identifire, password } = body;
  if (!identifire || !password) {
    return Response.json({ message: "bad request" },{status:400});
  }

  const isUserExist = await User.findOne({
    $or: [{ email: identifire }, { name: identifire }],
  });
  if (!isUserExist) {
    return Response.json({ message: "user not found" },{status:404});
  }

  const isPasswordMatch = await verifyPassword(password,isUserExist.password);
  if (!isPasswordMatch) {
    return Response.json({ message: "password not match" },{status:400});
  }
  const MakeJWT = await createJWT(isUserExist.gmail)  

  return Response.json({ message: "g request" },{
    status: 201,
    headers: {
      "Set-Cookie": `token=${MakeJWT}; HttpOnly; Path=/; Max-Age=86400;`,
    }
  });
}

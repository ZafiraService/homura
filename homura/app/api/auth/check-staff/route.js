import { NextResponse } from "next/server";

export async function GET(req) {
  const userId = req.headers.get("x-user-id");

  const guildId = process.env.GUILD_ID;

  const botToken = process.env.BOT_TOKEN;

  // prendi membro dal server Discord
  const res = await fetch(
    `https://discord.com/api/guilds/${guildId}/members/${userId}`,
    {
      headers: {
        Authorization: `Bot ${botToken}`
      }
    }
  );

  if (!res.ok) {
    return NextResponse.json({ staff: false });
  }

  const member = await res.json();

  const isStaff = member.roles.some(role =>
    process.env.STAFF_ROLES?.split(",").includes(role)
  );

  return NextResponse.json({
    staff: isStaff
  });
}
import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.CLIENT_ID;
  const redirectUri = process.env.REDIRECT_URI;

  const url =
    `https://discord.com/oauth2/authorize` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=code` +
    `&scope=identify%20guilds`;

  return NextResponse.redirect(url);
}
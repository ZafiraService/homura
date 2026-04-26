import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    // 1. Scambio code → access token
    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.REDIRECT_URI
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      return NextResponse.json(
        { error: "Token exchange failed", details: tokenData },
        { status: 400 }
      );
    }

    // 2. Prendi user Discord
    const userResponse = await fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`
      }
    });

    const user = await userResponse.json();

    // 3. Cookie sessione semplice (base version)
    const response = NextResponse.redirect(
      new URL("/dashboard", req.url)
    );

    response.cookies.set("discord_user", JSON.stringify(user), {
      httpOnly: true,
      secure: true,
      path: "/"
    });

    return response;

  } catch (err) {
    return NextResponse.json(
      { error: "Callback error", details: err.message },
      { status: 500 }
    );
  }
}
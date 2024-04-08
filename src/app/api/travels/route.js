import { NextResponse } from 'next/server';

export const runtime = 'edge'

export async function POST(req) {
  const { cvt } = await req.json();
  console.log("from server:", cvt);
  const url = `https://booking.accessdevelopment.com/api/auth/cvt/?cvt=${cvt}`;

  try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
      return NextResponse.json(response);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
      console.error('Error:', error);
      return NextResponse.json(error);
  }
}
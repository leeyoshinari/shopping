import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    if (!url) {
      return NextResponse.json({ error: 'URL 参数是必须的' }, { status: 400 });
    }
    const response = await fetch(decodeURIComponent(url));
    if (!response.ok) {
        return NextResponse.json(
            { error: `请求失败: ${response.status}` },
            { status: response.status }
        );
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: '无法转发请求' }, { status: 500 });
  }
}
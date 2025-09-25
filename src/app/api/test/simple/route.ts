import { NextResponse } from 'next/server';

// 关键！告诉 Next.js 和 Cloudflare 在 Edge 环境中运行此路由
export const runtime = 'edge';

/**
 * 处理 GET 请求
 * @param request NextRequest 对象
 * @returns NextResponse 对象
 */
export async function GET(request: Request) {
  // 这是一个简单的示例，返回一个 JSON 对象
  // 你可以根据需要修改返回的数据
  return NextResponse.json({ 
    message: 'Hello from the Edge!',
    timestamp: new Date().toISOString(),
    status: 'ok'
  });
}

// 你也可以根据需要添加其他 HTTP 方法，例如 POST
// export async function POST(request: Request) {
//   const body = await request.json();
//   console.log(body);
//   return NextResponse.json({ message: 'Data received', data: body });
// }

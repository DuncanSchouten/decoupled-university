import { pantheonAPIHandler } from "@/lib/pcc";

export async function GET(
  req: Request,
  context: { params: Promise<{ command?: string | string[] }> },
) {
  return pantheonAPIHandler(req as never, context);
}

export async function POST(
  req: Request,
  context: { params: Promise<{ command?: string | string[] }> },
) {
  return pantheonAPIHandler(req as never, context);
}

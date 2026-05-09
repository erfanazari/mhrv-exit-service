export default async function (req: Request): Promise<Response> {
  return new Response("pong", { status: 200 });
}
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");
  if (!target) return new Response("Missing url", { status: 400 });
  try {
    const res = await fetch(target, { cache: "no-store" });
    if (!res.ok) return new Response(`Upstream ${res.status}`, { status: 502 });
    const arrayBuf = await res.arrayBuffer();
    return new Response(arrayBuf, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store"
      }
    });
  } catch (e) {
    return new Response(`Proxy error: ${e}`, { status: 500 });
  }
}

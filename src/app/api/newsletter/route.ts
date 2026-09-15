export function POST() {
  return Response.json(
    {
      error: "Newsletter subscriptions are not available yet.",
    },
    { status: 501 },
  );
}

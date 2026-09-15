export function POST() {
  return Response.json(
    {
      error: "Contact submissions are not available yet.",
    },
    { status: 501 },
  );
}

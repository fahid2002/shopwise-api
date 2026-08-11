import app from "./app";

const port = Number(process.env.PORT ?? 5000);

if (process.env.VERCEL !== "1") {
  app.listen(port, () => {
    console.log(`Shopwise API running on http://localhost:${port}`);
  });
}

export default app;

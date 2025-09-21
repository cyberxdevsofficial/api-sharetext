export default function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      success: false,
      message: "hello user"
    });
  }

  // Generate random ID (mock sharetext link)
  const randomId = Math.random().toString(36).substring(2, 10);

  res.status(200).json({
    success: true,
    creator: "@Anuga Senithu",
    query: q,
    results: `https://sharetext.io/54c1a488}`
  });
                       }

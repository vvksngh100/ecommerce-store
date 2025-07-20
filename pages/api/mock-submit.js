export default function handler(req, res) {
  if (req.method === 'POST') {
    setTimeout(() => {
      res.status(200).json({ 
        message: 'Product added successfully (simulated)',
        data: req.body 
      });
    }, 1000);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
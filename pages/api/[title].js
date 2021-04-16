export default function handler(req, res) {
  const { title } = req.query
  res.end(`Title is: ${title}`)
}
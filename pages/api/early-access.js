export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, error: 'Invalid email' });
    }
    
    // Mock success response
    // In production, you would save the email to a database here
    return res.status(200).json({ success: true, message: 'Thank you! You will receive an invite within 24 hours.' });
  }
  
  return res.status(405).json({ success: false, error: 'Method not allowed' });
}



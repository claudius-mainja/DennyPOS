# DennyPOS API

**Version:** 1.0.0  
**Designed & Developed by:** Claudius Mainja - Blacklemur Innovations

## Contact Form API

### Endpoint
```
POST /api/contact.php
```

### Request
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+27 XX XXX XXXX",
  "company": "Company Name",
  "interest": "POS System",
  "message": "I'm interested in DennyPOS..."
}
```

### Response (Success)
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you shortly."
}
```

### Response (Error)
```json
{
  "success": false,
  "message": "Name is required"
}
```

### Features
- Input sanitization
- Email validation
- HTML email template
- CORS support
- Error handling

### Configuration
Edit the `$to` variable in `contact.php` to set the recipient email address.

---

© 2026 DennyPOS. All rights reserved.  
Designed and developed by **Claudius Mainja** under **Blacklemur Innovations**.

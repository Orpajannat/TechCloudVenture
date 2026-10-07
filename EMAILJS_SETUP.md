# Consultation form email setup

The homepage consultation form needs an EmailJS account to send email from the browser. Create an account at https://www.emailjs.com/ and connect the TCL email service.

1. Create a **company notification** email template.
   - To Email: `info@techcloudventure.com`
   - Reply-To: `{{email}}`
   - Subject: `New consultation request from {{name}}`
   - Body: `{{message}}`
2. Create a **visitor confirmation** template matching the supplied example.
   - To Email: `{{email}}`
   - From Name: `TCL Global Distribution LLC`
   - Subject: `New message from "TCL Global Distribution LLC"`
   - Body:

     `Hi {{name}},`

     `Thanks for getting in touch! Your message is on its way to our team, and we'll be in touch shortly. In the meantime, feel free to explore our range of services. We're excited to chat with you soon!`
3. In the company notification template's **Auto-Reply** tab, link the visitor confirmation template. EmailJS sends both emails from one form request. The auto-reply uses another request from the account quota.
4. Create `.env.local` in the project root with the Service ID, company notification Template ID, and Public Key:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_company_notification_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. Restart the Next.js development server after adding the variables. Configure the same public values in the hosting environment before deploying.

EmailJS processes the submitted form details. Do not put an EmailJS private key in browser environment variables.
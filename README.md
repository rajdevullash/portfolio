# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d1d95000-fe46-4c58-830f-750cfde3ad50

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d1d95000-fe46-4c58-830f-750cfde3ad50) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d1d95000-fe46-4c58-830f-750cfde3ad50) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Email Setup (Contact Form)

The contact form uses **EmailJS** to send emails directly from the browser - no backend required! EmailJS is free for up to 200 emails per month.

### Quick Setup Steps:

1. **Create an EmailJS Account:**
   - Sign up for free at [emailjs.com](https://www.emailjs.com/)
   - Verify your email address

2. **Add Email Service:**

   **Option A: Use EmailJS Service (Recommended - Easier Setup)**
   - Go to **Email Services** in your EmailJS dashboard
   - Click **Add New Service**
   - Choose **EmailJS** service (not Gmail API)
   - This is simpler and doesn't require OAuth setup
   - Copy your **Service ID**

   **Option B: Use Gmail API (If you prefer Gmail)**
   - Go to **Email Services** in your EmailJS dashboard
   - Click **Add New Service**
   - Choose **Gmail** service
   - **IMPORTANT:** When connecting, make sure to:
     1. Click **"Gmail Connect"** button
     2. Sign in with your Gmail account (`dev.rajdevullash@gmail.com`)
     3. **CRITICAL:** When Google asks for permissions, make sure to check **"Send email on your behalf"** permission
     4. If you see error "Request had insufficient authentication scopes":
         - **Disconnect** the current Gmail service
         - **Delete** the service
         - **Reconnect** and make sure to grant ALL permissions, especially email sending permissions
         - Or use **Option A (EmailJS Service)** instead - it's much simpler!
   - Copy your **Service ID** (e.g., `service_e5omoyl`)

3. **Create Email Template:**
   - Go to **Email Templates** in your EmailJS dashboard
   - Click **Create New Template**
   - **Subject:** `Portfolio Contact: {{subject}}`
   - **Content:** Copy and paste this HTML template:
     ```html
     <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
       <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
       <div
         style="
           margin-top: 20px;
           padding: 15px 0;
           border-width: 1px 0;
           border-style: dashed;
           border-color: lightgrey;
         "
       >
         <table role="presentation">
           <tr>
             <td style="vertical-align: top">
               <div
                 style="
                   padding: 6px 10px;
                   margin: 0 10px;
                   background-color: aliceblue;
                   border-radius: 5px;
                   font-size: 26px;
                 "
                 role="img"
               >
                 👤
               </div>
             </td>
             <td style="vertical-align: top">
               <div style="color: #2c3e50; font-size: 16px">
                 <strong>{{name}}</strong>
               </div>
               <div style="color: #cccccc; font-size: 13px">{{time}}</div>
               <div style="color: #7f8c8d; font-size: 13px; margin-bottom: 10px">{{from_email}}</div>
               <div style="color: #34495e; font-size: 14px; font-weight: 600; margin-bottom: 8px">Subject: {{subject}}</div>
               <p style="font-size: 16px; color: #2c3e50; line-height: 1.6; margin: 0">{{message}}</p>
             </td>
           </tr>
         </table>
       </div>
     </div>
     ```
   - **Important:** Make sure the template content type is set to **HTML** (not plain text)
   - Save the template and copy your **Template ID**

4. **Get Your Public Key:**
   - Go to **Account** > **General** in your EmailJS dashboard
   - Copy your **Public Key** (also called API Key)

5. **Set Environment Variables:**
   - Create a `.env` file in the root directory (if it doesn't exist)
   - Add these variables:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```
   - Replace the values with your actual EmailJS credentials

6. **Update Email Address:**
   - Edit `src/components/Contact.tsx`
   - Find the line with `to_email: "dev.rajdevullash@gmail.com"`
   - Replace with your email address

7. **Restart Development Server:**
   ```bash
   npm run dev
   ```

### Alternative: Direct Configuration

If you prefer not to use environment variables, you can directly edit `src/components/Contact.tsx` and replace:
- `YOUR_SERVICE_ID` with your EmailJS Service ID
- `YOUR_TEMPLATE_ID` with your EmailJS Template ID  
- `YOUR_PUBLIC_KEY` with your EmailJS Public Key

**Note:** Make sure to add `.env` to your `.gitignore` file to keep your credentials secure!

### Troubleshooting Gmail API Error

If you get the error: **"Request had insufficient authentication scopes"**

**Solution 1: Reconnect Gmail with Proper Permissions**
1. Go to EmailJS Dashboard → Email Services
2. Click on your Gmail service
3. Click **"Disconnect"** or **"Delete"** the service
4. Create a new Gmail service
5. When connecting, make sure to grant **ALL permissions**, especially:
   - ✅ Send email on your behalf
   - ✅ Read and send email
6. Complete the OAuth flow

**Solution 2: Use EmailJS Service Instead (Easier)**
1. Delete the Gmail service
2. Create a new service and choose **"EmailJS"** (not Gmail API)
3. This doesn't require OAuth and works immediately
4. You'll receive emails at the address you configure in EmailJS

**Solution 3: Check Google Account Permissions**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Check **"Third-party apps with account access"**
3. Find EmailJS and make sure it has email sending permissions
4. If not, revoke access and reconnect from EmailJS dashboard

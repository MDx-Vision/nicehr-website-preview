# EmailJS Setup Guide for TDR360 Assessment

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up Free"
3. Create account with your Gmail

## Step 2: Add Gmail Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Select "Gmail"
4. Click "Connect Account" and authorize your Gmail
5. Save - note the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
New TDR360 Assessment: {{lead_name}} from {{lead_organization}} - {{score_status}}
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
        .header { border-bottom: 2px solid #1a1a1a; padding-bottom: 20px; margin-bottom: 30px; }
        .logo { font-size: 24px; font-weight: bold; }
        .score-badge { display: inline-block; padding: 8px 20px; font-weight: bold; font-size: 18px; border-radius: 4px; margin: 20px 0; }
        .go { background: #1a1a1a; color: white; }
        .conditional { background: #666; color: white; }
        .at-risk { background: #e5e5e5; color: #1a1a1a; }
        .section { margin: 30px 0; }
        .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 15px; }
        .info-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
        .score-row { display: flex; justify-content: space-between; padding: 8px 0; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #888; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">TDR360 Assessment Lead</div>
        </div>

        <p>New assessment completed on {{assessment_date}}</p>

        <div class="score-badge {{score_status}}">
            {{total_score}} - {{score_status}}
        </div>

        <div class="section">
            <div class="section-title">Contact Information</div>
            <div class="info-row">
                <span>Name</span>
                <strong>{{lead_name}}</strong>
            </div>
            <div class="info-row">
                <span>Email</span>
                <strong>{{lead_email}}</strong>
            </div>
            <div class="info-row">
                <span>Organization</span>
                <strong>{{lead_organization}}</strong>
            </div>
            <div class="info-row">
                <span>Role</span>
                <strong>{{lead_role}}</strong>
            </div>
            <div class="info-row">
                <span>EHR System</span>
                <strong>{{lead_ehr}}</strong>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Score Breakdown</div>
            <div class="score-row">
                <span>Documentation & Tracking</span>
                <strong>{{score_infrastructure}}</strong>
            </div>
            <div class="score-row">
                <span>Interface Testing</span>
                <strong>{{score_integrations}}</strong>
            </div>
            <div class="score-row">
                <span>Data Migration</span>
                <strong>{{score_data}}</strong>
            </div>
            <div class="score-row">
                <span>Workflows & Procedures</span>
                <strong>{{score_workflows}}</strong>
            </div>
            <div class="score-row">
                <span>Support Readiness</span>
                <strong>{{score_support}}</strong>
            </div>
        </div>

        <div class="footer">
            This lead was generated from the TDR360 Go-Live Readiness Assessment.
        </div>
    </div>
</body>
</html>
```

4. Set "To Email" to: `{{to_email}}`
5. Save - note the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" in dashboard
2. Copy your **Public Key**

## Step 5: Update the Assessment Page
Open `tdr360-assessment.html` and replace these values around line 413:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your public key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your template ID
```

## Step 6: Test
1. Take the assessment yourself
2. Check your Gmail for the lead notification

## Free Tier Limits
- 200 emails per month
- 2 email templates
- Sufficient for lead generation

## Upgrade
If you need more volume, EmailJS paid plans start at $5/month for 1,000 emails.

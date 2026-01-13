# Mailchimp Import Instructions

## Shelsky's Winter Holidays 2025 Email

This guide walks you through importing the holiday email into Mailchimp.

---

## Step 1: Upload Images to Mailchimp

First, you need to upload all images to Mailchimp's Content Studio.

1. Log into Mailchimp
2. Click **Content** in the left sidebar
3. Click **My Files**
4. Click **Upload** button
5. Upload ALL of these files from the `email_resources` folder:

| File Name | What It Is |
|-----------|------------|
| `logo-fish.webp` | Fish logo icon |
| `logo-text.webp` | "SHELSKY'S" text logo |
| `hero_1.png` | Hero banner image |
| `HanukkahBasket (1).jpeg` | Hanukkah basket photo |
| `SweetPotLatkesNew.jpeg` | Latkes photo |
| `Caviarshots-Squareformat-4-scaled.jpeg` | Caviar photo |
| `Tsars-Cut-Balik-Salmon-scaled-e1609091751991.jpg` | Salmon photo |
| `FancyGelt1.jpeg` | Chocolate gelt photo |
| `WoodenDreidel1.jpeg` | Dreidel photo |

---

## Step 2: Get Image URLs from Mailchimp

After uploading, you need to get the URL for each image:

1. In **Content > My Files**, click on an uploaded image
2. Click **View Details** (or the info icon)
3. Copy the **URL** - it will look something like:
   ```
   https://mcusercontent.com/abc123/images/xyz789.png
   ```
4. Write down or copy each URL - you'll need them in Step 3

---

## Step 3: Replace Placeholders in HTML

Open `holiday-email.html` in a text editor (like VS Code, Sublime Text, or even Notepad).

Use **Find & Replace** (Ctrl+H on Windows, Cmd+H on Mac) to replace each placeholder with the Mailchimp URL you copied:

| Find This Placeholder | Replace With URL For |
|-----------------------|---------------------|
| `{{IMAGE_LOGO_FISH}}` | logo-fish.webp |
| `{{IMAGE_LOGO_TEXT}}` | logo-text.webp |
| `{{IMAGE_HERO}}` | hero_1.png |
| `{{IMAGE_HANUKKAH_BASKET}}` | HanukkahBasket (1).jpeg |
| `{{IMAGE_LATKES}}` | SweetPotLatkesNew.jpeg |
| `{{IMAGE_CAVIAR}}` | Caviarshots-Squareformat-4-scaled.jpeg |
| `{{IMAGE_SALMON}}` | Tsars-Cut-Balik-Salmon-scaled-e1609091751991.jpg |
| `{{IMAGE_GELT}}` | FancyGelt1.jpeg |
| `{{IMAGE_DREIDEL}}` | WoodenDreidel1.jpeg |

**Important:** Make sure to replace ALL instances. `{{IMAGE_LOGO_FISH}}` appears twice (header and footer).

Save the file when done.

---

## Step 4: Create Campaign in Mailchimp

1. Go to **Campaigns** in Mailchimp
2. Click **Create Campaign**
3. Select **Email** > **Regular**
4. Name your campaign (e.g., "Winter Holidays 2025")
5. Click **Begin**

---

## Step 5: Set Up Campaign Details

1. **To:** Select your audience/list
2. **From:** Set sender name and email
3. **Subject:** Enter a subject line, for example:
   - "The Holidays Start Here - Order Now!"
   - "Now Taking Holiday Orders - Hanukkah, Christmas & New Year's"
4. **Preview text:** This is auto-filled from the HTML, but you can customize

---

## Step 6: Import the HTML Code

1. In the **Content** section, click **Design Email**
2. Select **Code your own**
3. Choose **Paste in code**
4. Open your updated `holiday-email.html` file
5. Select ALL the code (Ctrl+A / Cmd+A)
6. Copy it (Ctrl+C / Cmd+C)
7. Paste it into Mailchimp's code editor (Ctrl+V / Cmd+V)
8. Click **Save and Close** (or **Continue**)

---

## Step 7: Preview and Test

**VERY IMPORTANT - Don't skip this!**

1. Click **Preview and Test** dropdown
2. Select **Send a test email**
3. Enter your email address
4. Click **Send Test**
5. Check the email on both desktop AND mobile
6. Verify:
   - [ ] All images load correctly
   - [ ] Links work (buttons go to holiday page)
   - [ ] Text is readable
   - [ ] Looks good on mobile

---

## Step 8: Send or Schedule

Once everything looks good:

1. Click **Schedule** to set a send date/time
   - OR -
2. Click **Send** to send immediately

---

## Troubleshooting

### Images not showing?
- Double-check the URLs were pasted correctly
- Make sure there are no extra spaces in the URLs
- Verify images uploaded successfully to Mailchimp

### Email looks broken?
- Make sure you copied ALL the HTML code
- Check that all placeholder replacements were done correctly
- Try pasting the code again fresh

### Unsubscribe link not working?
- This is normal in test mode - Mailchimp fills in `*|UNSUB|*` automatically when sending to real subscribers

---

## File Reference

All source files are in the `email_resources` folder:

```
email_resources/
├── holiday-email.html      <- The email code
├── import_instruct.md      <- This file
├── hero_1.png
├── logo-fish.webp
├── logo-text.webp
├── HanukkahBasket (1).jpeg
├── SweetPotLatkesNew.jpeg
├── Caviarshots-Squareformat-4-scaled.jpeg
├── Tsars-Cut-Balik-Salmon-scaled-e1609091751991.jpg
├── FancyGelt1.jpeg
├── WoodenDreidel1.jpeg
└── (other reference files)
```

---

## Questions?

If you run into issues, reach out for help before sending!

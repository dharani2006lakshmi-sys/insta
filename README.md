# 📚 StudyVault - Complete Setup & Management Guide

## 🎯 What You Have

A **Google Drive-style PDF sharing website** that you control 100% through GitHub.

### ✅ Features:
- Folder navigation (unlimited depth)
- PDF viewer (opens directly in website)
- Download button for each PDF
- Search functionality
- List/Grid view toggle
- Dark theme
- Mobile responsive
- **Only YOU can edit** (via GitHub)

---

## 📁 Project Structure

```
StudyVault/
├── index.html          ← Main website page
├── app.js              ← Application logic (DON'T EDIT)
├── data.js             ← YOUR MAIN FILE (edit this to add/remove folders & PDFs)
├── pdfs/               ← Store ALL your PDF files here
│   ├── sem1/
│   │   ├── course/
│   │   │   └── unit1/
│   │   │       ├── lesson1-10.pdf
│   │   │       └── lesson11-20.pdf
│   │   └── lab/
│   ├── sem2/
│   ├── sem3/
│   │   ├── course/
│   │   └── lab/
│   └── sem4/
└── README.md           ← This file
```

---

## 🚀 Step 1: Setup on GitHub

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `studyvault` (or any name you want)
3. Set to **Public**
4. Click "Create repository"

### 2. Upload Files

**Upload these 3 files:**
- `index.html`
- `app.js`
- `data.js`

**Method 1: Via GitHub Website**
1. Click "uploading an existing file"
2. Drag and drop all 3 files
3. Click "Commit changes"

**Method 2: Via Git Commands**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/studyvault.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** (left sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 2-3 minutes
6. Your site will be live at: `https://YOUR-USERNAME.github.io/studyvault/`

---

## 📄 Step 2: How to Add PDFs

### Method 1: GitHub Website (Easiest)

1. Go to your repository
2. Click "Add file" → "Upload files"
3. Create the folder structure by typing: `pdfs/sem3/course/unit1/lesson1.pdf`
4. Upload your PDF
5. Click "Commit changes"

### Method 2: GitHub Desktop

1. Clone your repository
2. Create folders: `pdfs/sem3/course/unit1/`
3. Copy PDF files into folders
4. Commit and push

### Folder Organization Example:

```
pdfs/
├── sem1/
│   ├── course/
│   │   ├── unit1/
│   │   │   ├── lesson1-10.pdf
│   │   │   ├── lesson11-20.pdf
│   │   │   └── practice.pdf
│   │   └── unit2/
│   │       └── lesson1-15.pdf
│   └── lab/
│       ├── experiment1.pdf
│       └── experiment2.pdf
├── sem2/
└── sem3/
```

---

## ⚙️ Step 3: Edit data.js to Add Folders/PDFs

### 🔥 MOST IMPORTANT FILE: `data.js`

This is where you tell the website about your folders and PDFs.

### Example 1: Adding a New Semester

**Before:**
```javascript
"SEM-3": {
    type: "folder",
    children: {
        "COURSE": {
            type: "folder",
            children: {}
        }
    }
}
```

**After (adding SEM-4):**
```javascript
"SEM-3": {
    type: "folder",
    children: {
        "COURSE": {
            type: "folder",
            children: {}
        }
    }
},
"SEM-4": {
    type: "folder",
    children: {
        "COURSE": {
            type: "folder",
            children: {}
        },
        "LAB": {
            type: "folder",
            children: {}
        }
    }
}
```

### Example 2: Adding PDFs to a Unit

```javascript
"UNIT 1": {
    type: "folder",
    children: {
        "Chapter 1 - Introduction": {
            type: "pdf",
            path: "pdfs/sem4/course/unit1/chapter1.pdf",
            size: "2.5 MB",
            modified: "2024-05-20"
        },
        "Chapter 2 - Theory": {
            type: "pdf",
            path: "pdfs/sem4/course/unit1/chapter2.pdf",
            size: "3.1 MB",
            modified: "2024-05-21"
        },
        "Practice Problems": {
            type: "pdf",
            path: "pdfs/sem4/course/unit1/practice.pdf",
            size: "1.8 MB",
            modified: "2024-05-22"
        }
    }
}
```

### Example 3: Complete Structure for One Semester

```javascript
"SEM-5": {
    type: "folder",
    children: {
        "COMPUTER NETWORKS": {
            type: "folder",
            children: {
                "UNIT 1": {
                    type: "folder",
                    children: {
                        "Lesson 1-10": {
                            type: "pdf",
                            path: "pdfs/sem5/networks/unit1/lesson1-10.pdf",
                            size: "4.2 MB",
                            modified: "2024-05-20"
                        },
                        "Important Questions": {
                            type: "pdf",
                            path: "pdfs/sem5/networks/unit1/important-questions.pdf",
                            size: "1.5 MB",
                            modified: "2024-05-21"
                        }
                    }
                },
                "UNIT 2": {
                    type: "folder",
                    children: {}
                }
            }
        },
        "DATABASE SYSTEMS": {
            type: "folder",
            children: {}
        }
    }
}
```

---

## 🛠️ Step 4: Editing Files on GitHub

### Option A: Edit Directly on GitHub (Easiest)

1. Go to your repository
2. Click on `data.js`
3. Click the **pencil icon** (✏️) to edit
4. Make your changes
5. Scroll down and click **"Commit changes"**
6. Wait 1-2 minutes for GitHub Pages to update

### Option B: Edit Locally

1. Clone repository
2. Edit `data.js` in any text editor
3. Save file
4. Commit and push
```bash
git add data.js
git commit -m "Added SEM-5 materials"
git push
```

---

## 📝 Common Tasks

### ✅ How to Add a New Folder

```javascript
"FOLDER-NAME": {
    type: "folder",
    children: {}
}
```

### ✅ How to Add a PDF

```javascript
"PDF-NAME": {
    type: "pdf",
    path: "pdfs/folder-path/filename.pdf",
    size: "2.5 MB",
    modified: "2024-05-20"
}
```

### ✅ How to Rename a Folder

1. Change the folder name in `data.js`
2. Change the folder name in the `pdfs/` directory
3. Update all `path` references

### ✅ How to Delete a Folder/PDF

1. Remove the entry from `data.js`
2. Delete the PDF file from GitHub repository

### ✅ How to Move a PDF

1. Move the PDF file in the `pdfs/` folder
2. Update the `path` in `data.js`

---

## 🎨 Customization

### Change Website Title

Edit `index.html`, line 6:
```html
<title>StudyVault - Academic Resources</title>
```

### Change Theme Colors

Edit `index.html` in the `<style>` section:

```css
/* Main background */
background: #0a0e27;

/* Card background */
background: #13172e;

/* Accent color (blue) */
color: #64b5f6;
```

---

## 🔒 Security & Control

### ✅ Only YOU Can Edit

- Website is read-only for visitors
- Only GitHub account owner can:
  - Add files
  - Delete files
  - Edit `data.js`
  - Change structure

### ✅ Making Repository Private

If you want to hide the code but keep site public:
1. Settings → Change visibility to **Private**
2. GitHub Pages will still work
3. But people can't see your code

---

## 🐛 Troubleshooting

### PDF Not Loading?

**Check:**
1. File path in `data.js` matches actual folder structure
2. PDF is actually uploaded to GitHub
3. Path uses forward slashes `/` not backslashes `\`
4. No spaces in file names (use `-` or `_`)

**Example:**
```javascript
// ❌ WRONG
path: "pdfs\sem3\unit 1\lesson.pdf"

// ✅ CORRECT
path: "pdfs/sem3/unit1/lesson.pdf"
```

### Website Not Updating?

1. Check if commit was successful
2. Wait 2-3 minutes for GitHub Pages to rebuild
3. Clear browser cache (Ctrl+F5)
4. Check for JavaScript errors (F12 → Console)

### Syntax Error in data.js?

**Common mistakes:**
- Missing comma after `}`
- Extra comma at the end
- Unmatched brackets `{}`

**Use online JSON validator:**
- https://jsonlint.com/

---

## 📊 Example: Full Semester Structure

```javascript
"SEM-6": {
    type: "folder",
    children: {
        "MACHINE LEARNING": {
            type: "folder",
            children: {
                "UNIT 1 - Introduction": {
                    type: "folder",
                    children: {
                        "Theory Notes": {
                            type: "pdf",
                            path: "pdfs/sem6/ml/unit1/theory.pdf",
                            size: "3.5 MB",
                            modified: "2024-05-20"
                        },
                        "Practice Problems": {
                            type: "pdf",
                            path: "pdfs/sem6/ml/unit1/practice.pdf",
                            size: "2.1 MB",
                            modified: "2024-05-21"
                        },
                        "Previous Year Questions": {
                            type: "pdf",
                            path: "pdfs/sem6/ml/unit1/pyq.pdf",
                            size: "1.8 MB",
                            modified: "2024-05-22"
                        }
                    }
                },
                "UNIT 2 - Algorithms": {
                    type: "folder",
                    children: {}
                }
            }
        },
        "WEB TECHNOLOGIES": {
            type: "folder",
            children: {}
        },
        "LAB": {
            type: "folder",
            children: {
                "Experiment 1": {
                    type: "pdf",
                    path: "pdfs/sem6/lab/exp1.pdf",
                    size: "1.2 MB",
                    modified: "2024-05-15"
                }
            }
        }
    }
}
```

---

## 🎓 Quick Reference

| Task | File to Edit | Action |
|------|--------------|--------|
| Add new folder | `data.js` | Add folder entry |
| Add new PDF | `data.js` + upload PDF | Add PDF entry + upload file |
| Change folder name | `data.js` | Change folder name in structure |
| Delete PDF | `data.js` + GitHub | Remove entry + delete file |
| Change website title | `index.html` | Edit `<title>` tag |
| Change colors | `index.html` | Edit CSS in `<style>` |

---

## 📞 Support

**Website live at:**
`https://YOUR-USERNAME.github.io/studyvault/`

**Repository:**
`https://github.com/YOUR-USERNAME/studyvault`

---

## 🔥 Pro Tips

1. **Organize by semester first**, then by subject
2. **Use clear naming**: `lesson1-10.pdf` not `l1.pdf`
3. **Keep folder names short**: `UNIT 1` not `UNIT 1 - INTRODUCTION TO COMPUTER SCIENCE`
4. **Update modified dates** so students know what's new
5. **Test on mobile** after making changes
6. **Backup your `data.js`** file regularly

---

## ✅ You're All Set!

Your website is:
- ✅ Hosted on GitHub Pages (FREE)
- ✅ Only YOU can edit
- ✅ Opens PDFs directly in browser
- ✅ Has download buttons
- ✅ Mobile responsive
- ✅ Dark themed
- ✅ Google Drive-style navigation

**Next steps:**
1. Upload your PDFs to `pdfs/` folder
2. Edit `data.js` to match your structure
3. Share your GitHub Pages link with students!

---

Made with ❤️ for studying

# 🚀 QUICK START GUIDE - StudyVault

## 📌 MOST IMPORTANT THINGS TO KNOW

### 1️⃣ Only Edit `data.js` File
- **DO NOT** edit `index.html` or `app.js` (unless you know what you're doing)
- **ONLY** edit `data.js` to add/remove folders and PDFs

### 2️⃣ Upload PDFs to `pdfs/` Folder
```
pdfs/
├── sem1/
├── sem2/
├── sem3/
└── sem4/
```

### 3️⃣ Update `data.js` After Uploading PDFs
Every PDF needs an entry in `data.js`

---

## ⚡ COPY-PASTE TEMPLATES

### 📁 Add a New Semester
```javascript
"SEM-X": {
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

### 📚 Add a New Subject
```javascript
"SUBJECT-NAME": {
    type: "folder",
    children: {
        "UNIT 1": {
            type: "folder",
            children: {}
        },
        "UNIT 2": {
            type: "folder",
            children: {}
        },
        "UNIT 3": {
            type: "folder",
            children: {}
        },
        "UNIT 4": {
            type: "folder",
            children: {}
        }
    }
}
```

### 📄 Add Multiple PDFs
```javascript
"UNIT 1": {
    type: "folder",
    children: {
        "Lesson 1-10": {
            type: "pdf",
            path: "pdfs/sem3/course/unit1/lesson1-10.pdf",
            size: "2.5 MB",
            modified: "2024-05-20"
        },
        "Lesson 11-20": {
            type: "pdf",
            path: "pdfs/sem3/course/unit1/lesson11-20.pdf",
            size: "3.1 MB",
            modified: "2024-05-21"
        },
        "Practice Questions": {
            type: "pdf",
            path: "pdfs/sem3/course/unit1/practice.pdf",
            size: "1.8 MB",
            modified: "2024-05-22"
        }
    }
}
```

---

## 🔄 STEP-BY-STEP: Adding New Content

### Step 1: Upload PDF to GitHub
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Create path: `pdfs/sem5/networks/unit1/chapter1.pdf`
4. Upload PDF
5. Click "Commit changes"

### Step 2: Edit data.js
1. Click on `data.js` file
2. Click pencil icon ✏️ to edit
3. Find the right location in the structure
4. Add your PDF entry:
```javascript
"Chapter 1": {
    type: "pdf",
    path: "pdfs/sem5/networks/unit1/chapter1.pdf",
    size: "2.5 MB",
    modified: "2024-05-20"
}
```
5. Click "Commit changes"

### Step 3: Wait & Check
1. Wait 2-3 minutes
2. Visit your website
3. Navigate to the folder
4. Click PDF to view
5. Click download button to download

---

## 🎯 COMMON TASKS

### ✅ Add a Folder
```javascript
"NEW-FOLDER": {
    type: "folder",
    children: {}
}
```

### ✅ Add a PDF
```javascript
"PDF-NAME": {
    type: "pdf",
    path: "pdfs/path/to/file.pdf",
    size: "X.X MB",
    modified: "YYYY-MM-DD"
}
```

### ✅ Delete a PDF
1. Remove the entry from `data.js`
2. Delete the PDF file from GitHub

### ✅ Rename a Folder
Change the folder name in `data.js`:
```javascript
// Before
"OLD-NAME": {

// After
"NEW-NAME": {
```

---

## ⚠️ IMPORTANT RULES

### ✅ DO:
- Use forward slashes `/` in paths
- Use hyphens `-` or underscores `_` instead of spaces
- Keep folder names short
- Update modified dates
- Save and commit after every change

### ❌ DON'T:
- Use backslashes `\` in paths
- Use spaces in file names
- Forget commas between entries
- Leave extra comma at the end
- Edit `index.html` or `app.js`

---

## 🔧 SYNTAX RULES

### Commas Matter!
```javascript
// ✅ CORRECT
{
    "Item 1": {...},
    "Item 2": {...},
    "Item 3": {...}
}

// ❌ WRONG (missing comma)
{
    "Item 1": {...}
    "Item 2": {...}
}

// ❌ WRONG (extra comma at end)
{
    "Item 1": {...},
    "Item 2": {...},
}
```

### Path Format
```javascript
// ✅ CORRECT
path: "pdfs/sem3/unit1/lesson.pdf"

// ❌ WRONG
path: "pdfs\sem3\unit 1\lesson.pdf"
```

---

## 🐛 TROUBLESHOOTING

### PDF Not Loading?
✅ **Check:**
1. Is PDF uploaded to GitHub?
2. Does path in `data.js` match file location?
3. Are there spaces in the file name?
4. Is path using forward slashes `/`?

### Website Not Updating?
✅ **Fix:**
1. Wait 2-3 minutes
2. Clear browser cache (Ctrl+F5)
3. Check commit was successful

### Blank Page?
✅ **Fix:**
1. Check browser console (F12)
2. Look for JavaScript errors
3. Validate `data.js` syntax at jsonlint.com

---

## 📋 CHECKLIST: Before Committing Changes

- [ ] PDF uploaded to correct folder
- [ ] Path in `data.js` matches file location
- [ ] No spaces in file names
- [ ] All commas in correct places
- [ ] No extra comma at end
- [ ] Brackets `{}` are balanced
- [ ] File size and date are updated

---

## 🎓 EXAMPLE: Complete Addition

**Goal:** Add "Computer Networks - Unit 1 - Chapter 1" to SEM-5

**Step 1:** Upload PDF
- Location: `pdfs/sem5/networks/unit1/chapter1.pdf`

**Step 2:** Edit `data.js`
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
                        "Chapter 1 - Introduction": {
                            type: "pdf",
                            path: "pdfs/sem5/networks/unit1/chapter1.pdf",
                            size: "2.5 MB",
                            modified: "2024-05-20"
                        }
                    }
                }
            }
        }
    }
}
```

**Step 3:** Commit and wait 2 minutes

**Done!** ✅

---

## 💡 PRO TIPS

1. **Use descriptive names:** `chapter1-introduction.pdf` not `c1.pdf`
2. **Group by topic:** Create folders for related content
3. **Date your uploads:** Keep modified dates current
4. **Test on mobile:** Check after major changes
5. **Backup data.js:** Keep a local copy

---

## 📞 QUICK LINKS

**Your Website:**
`https://YOUR-USERNAME.github.io/studyvault/`

**Edit data.js:**
`https://github.com/YOUR-USERNAME/studyvault/edit/main/data.js`

**Upload Files:**
`https://github.com/YOUR-USERNAME/studyvault/upload/main`

---

## ✅ THAT'S IT!

You now have everything you need to manage your StudyVault website!

**Remember:**
1. Upload PDF to `pdfs/` folder
2. Add entry in `data.js`
3. Commit changes
4. Wait 2 minutes
5. Check website

**Need help?** Re-read the full README.md file.

---

Happy Sharing! 📚✨

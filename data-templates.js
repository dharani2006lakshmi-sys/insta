// 📚 StudyVault - Advanced Data Template
// Copy sections from here as needed

const advancedTemplate = {
    // ============================================
    // COMPLETE SEMESTER EXAMPLE
    // ============================================
    "SEM-5": {
        type: "folder",
        children: {
            "COMPUTER NETWORKS": {
                type: "folder",
                children: {
                    "UNIT 1 - Network Fundamentals": {
                        type: "folder",
                        children: {
                            "Chapter 1 - Introduction": {
                                type: "pdf",
                                path: "pdfs/sem5/networks/unit1/chapter1.pdf",
                                size: "2.5 MB",
                                modified: "2024-05-20"
                            },
                            "Chapter 2 - OSI Model": {
                                type: "pdf",
                                path: "pdfs/sem5/networks/unit1/chapter2.pdf",
                                size: "3.2 MB",
                                modified: "2024-05-21"
                            },
                            "Practice Questions": {
                                type: "pdf",
                                path: "pdfs/sem5/networks/unit1/practice.pdf",
                                size: "1.8 MB",
                                modified: "2024-05-22"
                            },
                            "Previous Year Questions": {
                                type: "pdf",
                                path: "pdfs/sem5/networks/unit1/pyq.pdf",
                                size: "2.1 MB",
                                modified: "2024-05-23"
                            }
                        }
                    },
                    "UNIT 2 - Data Link Layer": {
                        type: "folder",
                        children: {
                            "Theory Notes": {
                                type: "pdf",
                                path: "pdfs/sem5/networks/unit2/theory.pdf",
                                size: "4.0 MB",
                                modified: "2024-05-24"
                            }
                        }
                    },
                    "UNIT 3 - Network Layer": {
                        type: "folder",
                        children: {}
                    },
                    "UNIT 4 - Transport Layer": {
                        type: "folder",
                        children: {}
                    }
                }
            },
            "DATABASE SYSTEMS": {
                type: "folder",
                children: {
                    "UNIT 1": {
                        type: "folder",
                        children: {
                            "Introduction to DBMS": {
                                type: "pdf",
                                path: "pdfs/sem5/database/unit1/intro.pdf",
                                size: "2.8 MB",
                                modified: "2024-05-20"
                            },
                            "ER Diagrams": {
                                type: "pdf",
                                path: "pdfs/sem5/database/unit1/er-diagrams.pdf",
                                size: "3.5 MB",
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
            "OPERATING SYSTEMS": {
                type: "folder",
                children: {
                    "Complete Notes": {
                        type: "pdf",
                        path: "pdfs/sem5/os/complete-notes.pdf",
                        size: "8.5 MB",
                        modified: "2024-05-20"
                    },
                    "UNIT 1": {
                        type: "folder",
                        children: {}
                    }
                }
            },
            "LAB": {
                type: "folder",
                children: {
                    "Networks Lab 1 - Packet Tracer": {
                        type: "pdf",
                        path: "pdfs/sem5/lab/networks-lab1.pdf",
                        size: "1.5 MB",
                        modified: "2024-05-15"
                    },
                    "Networks Lab 2 - Wireshark": {
                        type: "pdf",
                        path: "pdfs/sem5/lab/networks-lab2.pdf",
                        size: "2.0 MB",
                        modified: "2024-05-16"
                    },
                    "Database Lab 1 - SQL Basics": {
                        type: "pdf",
                        path: "pdfs/sem5/lab/database-lab1.pdf",
                        size: "1.2 MB",
                        modified: "2024-05-17"
                    }
                }
            },
            "QUESTION BANKS": {
                type: "folder",
                children: {
                    "Mid Term Questions": {
                        type: "pdf",
                        path: "pdfs/sem5/qb/midterm.pdf",
                        size: "3.0 MB",
                        modified: "2024-05-10"
                    },
                    "Final Exam Questions": {
                        type: "pdf",
                        path: "pdfs/sem5/qb/final.pdf",
                        size: "4.5 MB",
                        modified: "2024-05-11"
                    }
                }
            }
        }
    },

    // ============================================
    // ANOTHER COMPLETE SEMESTER
    // ============================================
    "SEM-6": {
        type: "folder",
        children: {
            "MACHINE LEARNING": {
                type: "folder",
                children: {
                    "UNIT 1": {
                        type: "folder",
                        children: {
                            "Introduction to ML": {
                                type: "pdf",
                                path: "pdfs/sem6/ml/unit1/intro.pdf",
                                size: "3.2 MB",
                                modified: "2024-05-20"
                            },
                            "Supervised Learning": {
                                type: "pdf",
                                path: "pdfs/sem6/ml/unit1/supervised.pdf",
                                size: "4.5 MB",
                                modified: "2024-05-21"
                            },
                            "Regression Algorithms": {
                                type: "pdf",
                                path: "pdfs/sem6/ml/unit1/regression.pdf",
                                size: "3.8 MB",
                                modified: "2024-05-22"
                            }
                        }
                    },
                    "UNIT 2": {
                        type: "folder",
                        children: {}
                    }
                }
            },
            "WEB TECHNOLOGIES": {
                type: "folder",
                children: {
                    "HTML & CSS": {
                        type: "pdf",
                        path: "pdfs/sem6/web/html-css.pdf",
                        size: "5.0 MB",
                        modified: "2024-05-20"
                    },
                    "JavaScript Fundamentals": {
                        type: "pdf",
                        path: "pdfs/sem6/web/javascript.pdf",
                        size: "6.2 MB",
                        modified: "2024-05-21"
                    }
                }
            }
        }
    }
};

// ============================================
// DIFFERENT ORGANIZATIONAL STYLES
// ============================================

// Style 1: By Course → Unit → Lessons
const styleByUnits = {
    "DATA STRUCTURES": {
        type: "folder",
        children: {
            "UNIT 1": {
                type: "folder",
                children: {
                    "Lesson 1-5": { type: "pdf", path: "pdfs/ds/unit1/l1-5.pdf", size: "2MB", modified: "2024-05-20" },
                    "Lesson 6-10": { type: "pdf", path: "pdfs/ds/unit1/l6-10.pdf", size: "2MB", modified: "2024-05-21" }
                }
            },
            "UNIT 2": { type: "folder", children: {} }
        }
    }
};

// Style 2: By Course → Topic → Subtopic
const styleByTopics = {
    "ALGORITHMS": {
        type: "folder",
        children: {
            "Sorting Algorithms": {
                type: "folder",
                children: {
                    "Bubble Sort": { type: "pdf", path: "pdfs/algo/sorting/bubble.pdf", size: "1.5MB", modified: "2024-05-20" },
                    "Quick Sort": { type: "pdf", path: "pdfs/algo/sorting/quick.pdf", size: "2.0MB", modified: "2024-05-21" },
                    "Merge Sort": { type: "pdf", path: "pdfs/algo/sorting/merge.pdf", size: "1.8MB", modified: "2024-05-22" }
                }
            },
            "Searching Algorithms": {
                type: "folder",
                children: {
                    "Linear Search": { type: "pdf", path: "pdfs/algo/search/linear.pdf", size: "1.2MB", modified: "2024-05-20" },
                    "Binary Search": { type: "pdf", path: "pdfs/algo/search/binary.pdf", size: "1.5MB", modified: "2024-05-21" }
                }
            }
        }
    }
};

// Style 3: Mixed - Some PDFs at root, some in folders
const styleMixed = {
    "COMPUTER ARCHITECTURE": {
        type: "folder",
        children: {
            "Complete Notes": { type: "pdf", path: "pdfs/ca/complete.pdf", size: "10MB", modified: "2024-05-20" },
            "Syllabus": { type: "pdf", path: "pdfs/ca/syllabus.pdf", size: "500KB", modified: "2024-05-15" },
            "UNIT 1": {
                type: "folder",
                children: {
                    "Detailed Notes": { type: "pdf", path: "pdfs/ca/unit1/detailed.pdf", size: "3MB", modified: "2024-05-20" }
                }
            }
        }
    }
};

// ============================================
// SPECIAL SECTIONS
// ============================================

// Question Banks
const questionBanks = {
    "QUESTION BANKS": {
        type: "folder",
        children: {
            "Mid-Term": { type: "pdf", path: "pdfs/qb/midterm.pdf", size: "3MB", modified: "2024-05-20" },
            "Finals": { type: "pdf", path: "pdfs/qb/finals.pdf", size: "4MB", modified: "2024-05-21" },
            "Previous Years": {
                type: "folder",
                children: {
                    "2023": { type: "pdf", path: "pdfs/qb/2023.pdf", size: "5MB", modified: "2024-05-20" },
                    "2022": { type: "pdf", path: "pdfs/qb/2022.pdf", size: "4.5MB", modified: "2024-05-20" },
                    "2021": { type: "pdf", path: "pdfs/qb/2021.pdf", size: "4.8MB", modified: "2024-05-20" }
                }
            }
        }
    }
};

// Important Materials
const importantMaterials = {
    "IMPORTANT": {
        type: "folder",
        children: {
            "Exam Pattern": { type: "pdf", path: "pdfs/important/pattern.pdf", size: "1MB", modified: "2024-05-20" },
            "Syllabus": { type: "pdf", path: "pdfs/important/syllabus.pdf", size: "500KB", modified: "2024-05-15" },
            "Time Table": { type: "pdf", path: "pdfs/important/timetable.pdf", size: "200KB", modified: "2024-05-10" }
        }
    }
};

// Reference Books
const referenceBooks = {
    "REFERENCE BOOKS": {
        type: "folder",
        children: {
            "Computer Networks - Tanenbaum": { type: "pdf", path: "pdfs/books/tanenbaum.pdf", size: "25MB", modified: "2024-05-20" },
            "Database Systems - Korth": { type: "pdf", path: "pdfs/books/korth.pdf", size: "20MB", modified: "2024-05-21" }
        }
    }
};

// ============================================
// COPY-PASTE READY TEMPLATES
// ============================================

/*

// Template 1: Empty Semester Structure
"SEM-X": {
    type: "folder",
    children: {
        "COURSE-1": {
            type: "folder",
            children: {
                "UNIT 1": { type: "folder", children: {} },
                "UNIT 2": { type: "folder", children: {} },
                "UNIT 3": { type: "folder", children: {} },
                "UNIT 4": { type: "folder", children: {} }
            }
        },
        "COURSE-2": {
            type: "folder",
            children: {}
        },
        "LAB": {
            type: "folder",
            children: {}
        }
    }
}

// Template 2: Single PDF Entry
"PDF-NAME": {
    type: "pdf",
    path: "pdfs/folder/file.pdf",
    size: "X.X MB",
    modified: "YYYY-MM-DD"
}

// Template 3: Multiple PDFs in One Unit
"UNIT 1": {
    type: "folder",
    children: {
        "Lesson 1-10": { type: "pdf", path: "pdfs/.../l1-10.pdf", size: "2MB", modified: "2024-05-20" },
        "Lesson 11-20": { type: "pdf", path: "pdfs/.../l11-20.pdf", size: "3MB", modified: "2024-05-21" },
        "Lesson 21-30": { type: "pdf", path: "pdfs/.../l21-30.pdf", size: "2.5MB", modified: "2024-05-22" },
        "Practice": { type: "pdf", path: "pdfs/.../practice.pdf", size: "1.5MB", modified: "2024-05-23" },
        "Important Questions": { type: "pdf", path: "pdfs/.../important.pdf", size: "2MB", modified: "2024-05-24" }
    }
}

*/

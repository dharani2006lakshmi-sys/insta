// 📚 StudyVault Data Structure
// This is where you manage ALL folders and PDFs

const fileStructure = {
    "MAIN": {
        type: "folder",
        children: {
            "SEM-1": {
                type: "folder",
                children: {
                    "COURSE": {
                        type: "folder",
                        children: {
                            "UNIT 1": {
                                type: "folder",
                                children: {
                                    "LESSON 1-10": {
                                        type: "pdf",
                                        path: "pdfs/sem1/course/unit1/lesson1-10.pdf",
                                        size: "2.5 MB",
                                        modified: "2024-01-15"
                                    },
                                    "LESSON 11-20": {
                                        type: "pdf",
                                        path: "pdfs/sem1/course/unit1/lesson11-20.pdf",
                                        size: "3.1 MB",
                                        modified: "2024-01-16"
                                    }
                                }
                            },
                            "UNIT 2": {
                                type: "folder",
                                children: {}
                            }
                        }
                    },
                    "LAB": {
                        type: "folder",
                        children: {}
                    }
                }
            },
            "SEM-2": {
                type: "folder",
                children: {
                    "COURSE": {
                        type: "folder",
                        children: {}
                    }
                }
            },
            "SEM-3": {
                type: "folder",
                children: {
                    "COURSE": {
                        type: "folder",
                        children: {
                            "UNIT 1": {
                                type: "folder",
                                children: {
                                    "LESSON 1-10": {
                                        type: "pdf",
                                        path: "pdfs/sem3/course/unit1/lesson1-10.pdf",
                                        size: "4.2 MB",
                                        modified: "2024-02-01"
                                    },
                                    "LESSON 10-20": {
                                        type: "pdf",
                                        path: "pdfs/sem3/course/unit1/lesson10-20.pdf",
                                        size: "3.8 MB",
                                        modified: "2024-02-02"
                                    },
                                    "LESSON 20-29": {
                                        type: "pdf",
                                        path: "pdfs/sem3/course/unit1/lesson20-29.pdf",
                                        size: "2.9 MB",
                                        modified: "2024-02-03"
                                    },
                                    "Practice Session": {
                                        type: "pdf",
                                        path: "pdfs/sem3/course/unit1/practice-session.pdf",
                                        size: "1.5 MB",
                                        modified: "2024-02-04"
                                    }
                                }
                            },
                            "UNIT 2": {
                                type: "folder",
                                children: {
                                    "LESSON 1-15": {
                                        type: "pdf",
                                        path: "pdfs/sem3/course/unit2/lesson1-15.pdf",
                                        size: "3.3 MB",
                                        modified: "2024-02-10"
                                    }
                                }
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
                    },
                    "LAB": {
                        type: "folder",
                        children: {
                            "Experiment 1": {
                                type: "pdf",
                                path: "pdfs/sem3/lab/experiment1.pdf",
                                size: "1.2 MB",
                                modified: "2024-02-15"
                            }
                        }
                    }
                }
            }
        }
    }
};

// ✅ HOW TO ADD NEW FOLDERS:
/*
"FOLDER-NAME": {
    type: "folder",
    children: {}
}
*/

// ✅ HOW TO ADD NEW PDFs:
/*
"PDF-NAME": {
    type: "pdf",
    path: "pdfs/your-folder-path/filename.pdf",
    size: "2.5 MB",
    modified: "2024-05-20"
}
*/

// ✅ EXAMPLE: Adding SEM-4
/*
"SEM-4": {
    type: "folder",
    children: {
        "COURSE": {
            type: "folder",
            children: {
                "UNIT 1": {
                    type: "folder",
                    children: {
                        "Chapter 1": {
                            type: "pdf",
                            path: "pdfs/sem4/course/unit1/chapter1.pdf",
                            size: "2.0 MB",
                            modified: "2024-03-01"
                        }
                    }
                }
            }
        }
    }
}
*/

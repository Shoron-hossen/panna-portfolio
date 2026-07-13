"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
// Data file path
const DATA_FILE = path_1.default.join(__dirname, 'data', 'content.json');
// Ensure data directory exists
if (!fs_1.default.existsSync(path_1.default.join(__dirname, 'data'))) {
    fs_1.default.mkdirSync(path_1.default.join(__dirname, 'data'), { recursive: true });
}
// Default content data
const defaultContent = {
    site: {
        name: "Panna.",
        fullName: "MD Sakawat Hossain Panna",
        tagline: "Textile Engineer & Photographer",
        copyright: "© 2024 MD SAKAWAT HOSSAIN PANNA",
        footerText: "Designed for Excellence"
    },
    hero: {
        subtitle: "Precision in Textiles & Light",
        heading: "MD Sakawat<br/>Hossain Panna",
        description: "A specialized Textile Engineer and visual storyteller dedicated to merging technical industrial excellence with high-fidelity creative documentation.",
        focus: "Sustainable R&D",
        expertise: "Fabric Engineering",
        portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUfjTKbEYecN46Pi-ZEvNYu9kEl2YKva0rXTWnDdvr3USUHIFLHkP7LL2BSSteBOfP0vl7LbYVhKx_uFv7Bu6vtMatNQ3kofbPlGr69LE5iCkzfTVPvpcrAcUyxUjlL2EpKZ1_aQbU_F4NABKG5h-w5reUHtkhb3LW-jvnAP12EBF5l8_r1M0IJkVtGsbnmtOgm8lbytcJMA-d6iYIiSq5fxX260rKnFniNj_g1Z1nIiwYIKknhZGu9Id9n7PLLC2M8jVy_MwzeGDH",
        degreeTitle: "B.Sc. Textile Engineering",
        degreeCollege: "Pabna Textile Engineering College (BUTEX Affiliate)"
    },
    about: {
        subtitle: "Mission",
        heading: "Career Objective",
        description: "To build a career in the textile sector by applying my academic knowledge and technical expertise. I am passionate about learning new technologies and equipment and performing my duty with professional quality and efficiency. I seek an opportunity where I can enhance my skills, grow professionally, and contribute effectively to the organization's success.",
        quote: "To leverage my technical expertise to innovate sustainable solutions while capturing the beauty of the physical world through lens. Merging analytical precision with creative vision.",
        corePrinciples: ["Technical Integrity", "Creative Discipline", "Continuous Learning"],
        primaryDomains: ["Fiber & Yarn Analysis", "Industrial Photography", "Supply Chain Management"]
    },
    career: {
        subtitle: "The Track Record",
        heading: "Professional Highlights",
        mainExperience: {
            badge: "Professional Internship",
            company: "Crown Wears Pvt. Ltd (Sparrow Group)",
            role: "Merchandising, Production & IE",
            period: "Feb — March, 2024",
            tasks: [
                "Sample Development and R&D implementation",
                "Quality Assurance Department protocols",
                "Garments manufacturing flow analysis",
                "Dyeing and Washing technical observation"
            ]
        },
        industrialVisits: [
            { type: "Spinning & Cotton", name: "Syed Spinning & Cotton Mills Ltd." },
            { type: "Apparel", name: "Square Fashions Limited" },
            { type: "Silk & Research", name: "Bangladesh Silk Research & Training" }
        ],
        keySkills: ["Adobe Photoshop", "Illustrator", "MS Office", "Data Analysis", "Public Speaking"],
        softSkills: ["Leadership", "Time Management", "Adaptable", "Determined"],
        academics: {
            ssc: { gpa: "GPA 5.00/5.00", label: "Secondary School Certificate", institution: "Pabna Zilla School" },
            hsc: { gpa: "GPA 5.00/5.00", label: "Higher Secondary Certificate", institution: "Pabna College" },
            bsc: { gpa: "CGPA 3.52", label: "B.Sc. Textile Engineering", institution: "Pabna Textile Engineering College" }
        }
    },
    showcase: {
        subtitle: "Creative Gallery",
        heading: "Visual Narrative",
        description: "Photography focusing on the intersection of human labor, mechanical symmetry, and the raw texture of materials."
    },
    contact: {
        subtitle: "Available for projects",
        heading: "Let's Create<br/>Something Exceptional",
        email: "sakawatpanna77@gmail.com"
    },
    links: [
        { name: "Facebook", url: "#", logo: "https://cdn-icons-png.flaticon.com/512/733/733547.png" },
        { name: "Instagram", url: "#", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
        { name: "WhatsApp", url: "#", logo: "https://cdn-icons-png.flaticon.com/512/733/733585.png" }
    ],
    careerPage: {
        career1: {
            subtitle: "Academic & Technical",
            heading: "The fusion of structural engineering and visual precision.",
            education: [
                {
                    period: "2019 — Present",
                    title: "B.Sc. in Textile Engineering",
                    institution: "Bangladesh University of Textiles (BUTEX)",
                    description: "Specializing in apparel manufacturing and textile physics. My studies focus on sustainable fabrication techniques, structural integrity of high-performance fabrics, and industrial R&D processes."
                },
                {
                    period: "2016 — 2018",
                    title: "Higher Secondary Certificate (HSC)",
                    institution: "Govt. Edward College, Pabna",
                    description: "Science major with high-distinction in Mathematics and Physics. This period established the core analytical skills necessary for complex engineering calculations."
                },
                {
                    period: "Graduated 2016",
                    title: "Secondary School Certificate (SSC)",
                    institution: "Atghoria Govt High School",
                    description: "Early academic excellence with a focus on general sciences, laying the groundwork for a future in technical education."
                }
            ],
            technicalSkills: {
                visualDesign: {
                    title: "Visual Identity & Design",
                    description: "Advanced proficiency in Adobe Photoshop and digital imaging. I bridge the gap between textile engineering and aesthetics, ensuring product visualizations meet professional standards.",
                    tags: ["Adobe Photoshop", "Lightroom", "Digital Composition"]
                },
                office: {
                    title: "Office Suite",
                    description: "Expert handling of MS Excel, PowerPoint, and Word for technical reporting and data visualization."
                },
                photography: {
                    title: "Visual Storytelling",
                    description: "Capturing the soul of industrial processes through professional photography."
                },
                textileRD: {
                    title: "Textile R&D",
                    items: ["Fabric Analysis", "Quality Control"]
                }
            },
            softSkills: [
                { icon: "groups", title: "Collaborative Leadership", description: "Proven ability to lead diverse teams in high-pressure technical environments." },
                { icon: "psychology", title: "Analytical Problem Solving", description: "Applying engineering logic to solve complex textile production challenges." },
                { icon: "chat", title: "Effective Communication", description: "Fluent in bridging technical specifications with creative visual requirements." },
                { icon: "history_edu", title: "Meticulous Researcher", description: "Deep-dive approach to material science and market trends." }
            ],
            extracurricular: [
                { icon: "event_available", title: "Event Coordination", description: "Organizing technical seminars and photography exhibitions at BUTEX." },
                { icon: "volunteer_activism", title: "Community Engagement", description: "Contributing to local development initiatives through technical literacy programs." }
            ]
        },
        career2: {
            subtitle: "Trajectory & Growth",
            heading: "Career in Technical Excellence",
            heroDescription: "Navigating the intersection of engineering precision and industrial leadership. My professional path is defined by a commitment to optimizing systems and driving innovation within the global textile landscape.",
            pillars: [
                { icon: "inventory_2", title: "Strategic Merchandising", description: "Comprehensive supply chain management and collection planning for tier-1 global brands.", tags: ["ERP Systems", "Market Analysis"] },
                { icon: "factory", title: "Operations & Optimization", description: "Implementing Lean methodology and Six Sigma principles to maximize floor efficiency.", tags: ["Lean Mfg", "KPI Tracking"] },
                { icon: "biotech", title: "Innovation & R&D", description: "Pioneering sustainable fabric technologies and performance-driven textile chemistry.", tags: ["Eco-Dyeing", "R&D Strategy"] }
            ],
            currentCareers: [
                {
                    badge: "CURRENT",
                    period: "JAN 2024 — MAR 2024",
                    title: "Industrial Intern",
                    company: "Crown Wears Pvt. Ltd",
                    accomplishments: [
                        "Optimized merchandising workflows reducing documentation lead time.",
                        "Spearheaded quality inspection protocols for international export compliance.",
                        "Conducted cross-departmental analysis of yarn-to-garment production cycles."
                    ]
                }
            ],
            previousCareers: [
                {
                    company: "Square Fashions Ltd.",
                    subtitle: "VERTICAL INTEGRATION STUDY",
                    description: "Deep dive into large-scale knit production and global supply chain logistics."
                },
                {
                    company: "Paramount Textile Ltd.",
                    subtitle: "ADVANCED WEAVING & DYEING",
                    description: "Analysis of sophisticated yarn dyeing technologies and high-speed weaving efficiency."
                }
            ]
        }
    }
};
// Initialize content file if it doesn't exist
if (!fs_1.default.existsSync(DATA_FILE)) {
    fs_1.default.writeFileSync(DATA_FILE, JSON.stringify(defaultContent, null, 2));
}
// Helper to read content
function readContent() {
    try {
        const raw = fs_1.default.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(raw);
    }
    catch (e) {
        return defaultContent;
    }
}
// Helper to write content
function writeContent(data) {
    fs_1.default.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}
// Serve static files from current directory
app.use(express_1.default.static(__dirname));
// API: Get all content
app.get('/api/content', (_req, res) => {
    res.json(readContent());
});
// API: Update all content
app.post('/api/content', (req, res) => {
    try {
        writeContent(req.body);
        res.json({ success: true, message: 'Content updated successfully' });
    }
    catch (e) {
        res.status(500).json({ success: false, message: 'Failed to save content' });
    }
});
// API: Update specific section
app.put('/api/content/:section', (req, res) => {
    try {
        const content = readContent();
        const section = req.params.section;
        content[section] = { ...content[section], ...req.body };
        writeContent(content);
        res.json({ success: true, message: `${section} updated successfully` });
    }
    catch (e) {
        res.status(500).json({ success: false, message: 'Failed to update section' });
    }
});
// API: Reset content to defaults
app.post('/api/content/reset', (_req, res) => {
    try {
        writeContent(defaultContent);
        res.json({ success: true, message: 'Content reset to defaults' });
    }
    catch (e) {
        res.status(500).json({ success: false, message: 'Failed to reset content' });
    }
});
// Clean URL routes (no .html extension needed)
app.get('/', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'homepage.html'));
});
app.get('/career', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'career.html'));
});
app.get('/career-1', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'career-1.html'));
});
app.get('/career-2', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'career-2.html'));
});
app.get('/showcase', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'showcase.html'));
});
app.get('/admin', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'admin.html'));
});
app.get('/homepage', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'homepage.html'));
});
// Start server
app.listen(PORT, () => {
    console.log(`\n🎨 Portfolio Server running at http://localhost:${PORT}`);
    console.log(`📋 Admin Panel: http://localhost:${PORT}/admin`);
    console.log(`🏠 Homepage: http://localhost:${PORT}/`);
    console.log(`💼 Career Page: http://localhost:${PORT}/career`);
    console.log(`📸 Showcase: http://localhost:${PORT}/showcase`);
    console.log(`\nPress Ctrl+C to stop the server.\n`);
});
//# sourceMappingURL=server.js.map
#!/usr/bin/env python3
"""Builds public/Geofry_Oduor_CV.pdf. Run: python3 scripts/build-cv.py  (needs reportlab)."""
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether

NAVY = colors.HexColor("#1f4e79")
INK = colors.HexColor("#14213d")
GREY = colors.HexColor("#555555")

base = ParagraphStyle("b", fontName="Helvetica", fontSize=8.6, leading=11.4, textColor=colors.black)
name = ParagraphStyle("n", fontName="Helvetica-Bold", fontSize=24, leading=27, textColor=NAVY)
tag = ParagraphStyle("t", fontName="Helvetica-BoldOblique", fontSize=9.5, leading=12, textColor=NAVY)
contact = ParagraphStyle("c", parent=base, fontSize=8.4)
bar = ParagraphStyle("bar", fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=colors.white)
summary = ParagraphStyle("s", parent=base, alignment=TA_JUSTIFY)
head = ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=9, leading=11.5, textColor=INK)
sub = ParagraphStyle("sub", fontName="Helvetica-Oblique", fontSize=8.3, leading=10.6, textColor=GREY)
bullet = ParagraphStyle("bl", parent=base, leftIndent=9, bulletIndent=0)
right = ParagraphStyle("r", parent=base, alignment=2)
label = ParagraphStyle("l", fontName="Helvetica-Bold", fontSize=8.6, leading=11.4, textColor=INK)

story = []


def section(title):
    t = Table([[Paragraph(title, bar)]], colWidths=[180 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("LEFTPADDING", (0, 0), (-1, -1), 6), ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.extend([Spacer(1, 7), t, Spacer(1, 5)])


def entry(title, org, period=None, bullets=()):
    left = [Paragraph(title, head), Paragraph(org, sub)]
    row = Table([[left, Paragraph(period or "", right)]], colWidths=[145 * mm, 35 * mm])
    row.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                             ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0),
                             ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
    block = [row] + [Paragraph(b, bullet, bulletText="•") for b in bullets] + [Spacer(1, 4)]
    story.append(KeepTogether(block))


def kv(rows):
    t = Table([[Paragraph(k, label), Paragraph(v, base)] for k, v in rows], colWidths=[42 * mm, 138 * mm])
    t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                           ("TOPPADDING", (0, 0), (-1, -1), 1), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
    story.append(t)


story += [
    Paragraph("GEOFRY ODUOR", name),
    Paragraph("Software Engineer · AI &amp; Full-Stack Developer · Professional Hockey Player", tag),
]
head_t = Table([[Paragraph("Nairobi, Kenya | +254 707 628 505 | geofryoduor108@gmail.com", contact),
                 Paragraph("linkedin.com/in/geofry-oduor-b021b5272 | github.com/geoduor<br/>geotech-portfolio.vercel.app", ParagraphStyle("cr", parent=contact, alignment=2))]],
               colWidths=[95 * mm, 85 * mm])
head_t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "BOTTOM"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                            ("RIGHTPADDING", (0, 0), (-1, -1), 0)]))
story.append(head_t)

section("PROFESSIONAL SUMMARY")
story.append(Paragraph(
    "Software engineer and AI developer in Kenya, in the final year of a Bachelor of Technology at the Technical "
    "University of Kenya. I build AI-powered tools and full-stack web platforms for agriculture, healthcare, sports "
    "and education, and have shipped seven projects, six of them live, using React, Next.js, TypeScript, Python, "
    "FastAPI and PostgreSQL, with Claude and Gemini behind the AI features. Currently training in AI and Software "
    "Development with Power Learn Project Africa and in the Software Engineering Programme at Zone01 Kisumu. "
    "Competitive hockey player in the Kenya Hockey Union league.", summary))

section("EDUCATION &amp; TRAINING")
entry("Bachelor of Technology (final year)", "Technical University of Kenya (TUK), Nairobi", "2020 – Present")
entry("Software Engineering Programme", "Zone01 Kisumu · Go track: Algorithms &amp; Data Structures", "Current")
entry("AI &amp; Software Development", "Power Learn Project Africa", "Current")
entry("Kenya Certificate of Secondary Education (KCSE)", "Ramba High School", "2016")
entry("Kenya Certificate of Primary Education (KCPE)", "M.M. Shah Primary School", "2011")

section("TECHNICAL SKILLS")
kv([
    ("Languages:", "Python, TypeScript, JavaScript, Go (Golang), PHP, C/C++ (Arduino)"),
    ("Frontend:", "React, Next.js, Tailwind CSS, Flutter, HTML5/CSS3, PWAs"),
    ("Backend &amp; data:", "FastAPI, Node.js, REST APIs, PostgreSQL, SQLite, Supabase, Prisma"),
    ("AI &amp; automation:", "Multi-agent systems, Claude API, Gemini, Prompt Engineering, n8n, Google Apps Script, rules engines"),
    ("DevOps &amp; tooling:", "Git, GitHub, GitHub Actions, Docker, Vercel, Linux/Bash"),
    ("Embedded &amp; IoT:", "Arduino Uno, PIR/ultrasonic sensors, servo motors, non-blocking firmware"),
])

section("PROJECT EXPERIENCE")
entry("Kenya Hockey Union Live", "Fan-built installable PWA · React, FastAPI, SQLite · khu-live-app.vercel.app", "2025",
      ["Live standings across 8 KHU leagues, match-state tracking, favourite teams with scoped push notifications and offline caching.",
       "Fed by a rate-limited scraper with a circuit breaker."])
entry("AgriPulse AI", "AI agronomy platform · Python, FastAPI, React, Gemini, Supabase", "2024 – 2025",
      ["Agronomy assistant for Kenyan smallholder farmers in English, Swahili and local dialects.",
       "Identifies crop disease with Gemini, pulls county-level weather and recommends locally available agrochemicals with KES pricing."])
entry("Off-Pitch Africa", "Sports media website · JavaScript, Vercel, Claude API · offpitchafrica.com", "",
      ["Multi-page site with a Claude-powered chat assistant, live YouTube, Instagram and Facebook feeds, and a password-protected admin dashboard."])
entry("MediTriage AI (team prototype)", "Healthcare triage · Next.js, FastAPI · GOMYCODE Come Build with AI hackathon, Team 104", "2026",
      ["Bilingual (English/Swahili) triage tool using a deterministic rule engine; the LLM only structures and phrases, it never decides."])
entry("AttachKenya", "Education tech · Next.js, TypeScript, Supabase, Claude API", "",
      ["Matching system giving transparent 0–100 placement scores from a weighted rules engine, with Claude-drafted cover letters and an application tracker."])
entry("Kisumu Young Stars Hockey Club system", "Club management · FastAPI, PostgreSQL, React, TypeScript · kyhc.vercel.app", "",
      ["Role-based API with OAuth2 JWT authentication and seven permission levels, tested and shipped through GitHub Actions."])
entry("Ikinai Media", "Media website and CMS · Next.js, TypeScript, Prisma, PostgreSQL · ikinai-media.vercel.app", "",
      ["Public site with an admin dashboard for publishing news, managing portfolio items and reviewing enquiries."])
entry("Smart Automated Scarecrow (final-year project)", "Technical University of Kenya", "2024 – 2025",
      ["Solar-powered bird deterrent: PIR and ultrasonic sensors with an Arduino Uno driving servo motors and a buzzer.",
       "Wrote production-grade non-blocking firmware using a state machine architecture."])

section("PROFESSIONAL EXPERIENCE")
entry("Logistics Coordinator / Assistant", "Gantad Logistics Company | Nairobi, Kenya", "2023",
      ["Coordinated logistics operations, shipment scheduling and supply chain documentation.",
       "Worked on delivery routes and turnaround times; managed vendor communications and records."])
entry("Technical Support &amp; Wi-Fi Installation Technician", "Safaricom Agent Network | Kenya", "2020 – 2022",
      ["Installed and configured Wi-Fi equipment and last-mile internet for residential and SME clients.",
       "Troubleshot connectivity and hardware faults and trained users on their equipment."])

section("SPORTS")
entry("Professional Hockey Player – Kisumu Young Stars Hockey Club (KYHC)", "Kenya Hockey Union (KHU) League", "2020 – Present",
      ["Compete in the national Kenya Hockey Union league; built the club's management system and a live league app."])

section("CERTIFICATIONS")
entry("Come Build with AI hackathon (participation, Team 104)", "GOMYCODE", "27 Sep 2026")
entry("AI Safari (4-week programme)", "Power Learn Project Africa", "2026")
entry("Introduction to Software Development", "Zone01 Kisumu", "2 Apr 2024")

section("LANGUAGES &amp; INTERESTS")
kv([("Languages:", "English (fluent, professional) · Kiswahili (fluent, native)"),
    ("Interests:", "Software engineering · Artificial intelligence · Field hockey · Digital transformation in Africa")])

doc = SimpleDocTemplate("public/Geofry_Oduor_CV.pdf", pagesize=A4, leftMargin=15 * mm, rightMargin=15 * mm,
                        topMargin=12 * mm, bottomMargin=12 * mm, title="Geofry Oduor – CV", author="Geofry Oduor")
doc.build(story)

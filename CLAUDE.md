# The NICEHR Group Website

## Writing Doctrine
This project follows the **Enterprise Apple for Healthcare Consulting** doctrine.
See `ENTERPRISE_APPLE_DOCTRINE.md` and `AI_INSTRUCTIONS.md` for full guidelines.

**Key rules:**
- No slogans or taglines
- No promotional language (strategic, innovative, comprehensive, seamless, etc.)
- Short, declarative sentences
- Verbs over adjectives
- Outcome-focused copy

**Approved CTAs:** Explore Solutions, Talk to an Expert, Contact, Request Proposal, View Platform, View RCM

**Prohibited:** "Learn more", "Get started", "Discover", "We offer", persuasive questions

## Structure
- 29 HTML pages (static site)
- `css/` - Stylesheets
- `js/` - JavaScript
- `images/` - Assets including client logos

## Key Pages
- `index.html` - Homepage
- `why-tng.html` - Direct-to-source positioning (consultant-owned differentiator)
- `services.html` - All solutions
- `rcm.html` - Revenue cycle management
- `ehr-systems.html` - EHR platform expertise
- `dischedule.html` - Behavioral matching platform
- `blog.html` - Blog index with article cards
- `blog-ehr-golive.html` - 5 Keys to Successful EHR Go-Live article
- `blog-behavioral-matching.html` - Behavioral Matching article (DiSChedule)
- `blog-oracle-cerner.html` - Oracle Cerner in 2026 article
- `case-studies.html` - Case studies index
- `case-study-epic-implementation.html` - Epic 12-hospital implementation
- `case-study-cerner-optimization.html` - Cerner workflow optimization
- `case-study-rcm-turnaround.html` - RCM $4.2M recovery

## Client Logos Section
Header must be: **"Healthcare organizations served."**
Intro line: **"Delivery experience across healthcare systems."**

## Recent Work
- Applied Enterprise Apple doctrine compliance fixes (Dec 2025)
- Renamed "IT Strategic Planning" to "IT Planning" across all navigation
- Removed taglines and promotional language
- Fixed "What We Deliver" section - wrapped cards in 3-column grid layout
- Fixed mobile responsive issues (Jan 2026):
  - Added tap/click support for mobile dropdown navigation
  - Reduced section/card/header padding on mobile
  - Fixed testimonial grid overflow
  - Added mobile nav scroll support
- Added Why TNG page (Jan 2026):
  - New `why-tng.html` with 10 doctrine-compliant sections
  - Direct-to-source positioning vs traditional staffing middlemen
  - Cost structure comparison, technology differentiators
  - Visual EHR lifecycle diagram
  - Nav restructured: About now dropdown with About Us + Why TNG
- Restructured Revenue Cycle nav (Feb 2026):
  - Combined Revenue Cycle and Industries into single dropdown
  - Added section headers with indented subsection links
  - Revenue Cycle Management: 9 items (Pre-Billing through RCM Platform)
  - Industries: 5 items (Hospitals, Physicians, Surgery Centers, Imaging, Labs)
- Doctrine compliance audit (Feb 2026):
  - Full site audit: 92% compliant
  - Fixed broken HTML in imaging-centers-rcm.html (<12% stat)
  - Rewrote FAQ CTA to doctrine-compliant language
- A- Motion Design System (Feb 2026):
  - Scroll-triggered fade-up animations with Intersection Observer
  - Staggered reveals for grid items (0.1-0.6s delays)
  - Stat counter animation (requestAnimationFrame)
  - Enhanced button hover states (scale + shadow lift)
  - Smooth nav dropdown animation
  - EHR logo hover glow (gold accent)
  - Lifecycle diagram animation
  - Accessibility: prefers-reduced-motion support
- Blog Content (Feb 2026):
  - 3 doctrine-compliant articles written
  - EHR Go-Live (Rafael Rodriguez)
  - Behavioral Matching/DiSChedule (Wendy Perdomo)
  - Oracle Cerner 2026 (NICEHR Team)
  - Blog cards now link to full articles
- Case Studies (Feb 2026):
  - 3 case studies with metrics
  - Epic Implementation: 12 hospitals, 18-month go-live
  - Cerner Optimization: 23% documentation time reduction
  - RCM Turnaround: $4.2M recovered
  - Each includes challenge, approach, results, testimonial
- Photography Guide (Feb 2026):
  - Created `PHOTO_GUIDE.md` with shot list and specs
  - Organized `/images/` folder structure (heroes, team, consulting, office)
  - README files in each image folder with requirements
  - Team headshots already in place on About page

## Local Development
```bash
python3 -m http.server 8000
open http://localhost:8000
```
Or open `index.html` directly in browser.

## Responsive Breakpoints
- `968px` - Tablet (nav collapses, grids → 2 columns)
- `768px` - Small tablet
- `640px` - Mobile (grids → 1-2 columns)
- `480px` - Small mobile
- `380px` - Very small (single column)

Test with browser dev tools: `Cmd + Option + I` → `Cmd + Shift + M`

## Session History
- @.claude/sessions/2025-12-28-doctrine-fixes.txt - Doctrine compliance audit & fixes
- @.claude/sessions/2026-01-10-mobile-fixes.txt - Mobile responsive fixes
- @.claude/sessions/2026-01-17-why-tng-page.txt - Why TNG page creation & partnership research

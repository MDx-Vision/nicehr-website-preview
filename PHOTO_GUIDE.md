# TNG Photo Guide

Photography requirements for A- level website presentation.

---

## Priority 1: Hero Images (High Impact)

These appear at the top of major pages. Replace stock images with real TNG imagery.

| Page | Current Stock | Recommended Replacement | Specs |
|------|---------------|------------------------|-------|
| `index.html` | EHR implementation meeting | Real TNG team in client meeting or command center | 1920x1080, dark overlay compatible |
| `about.html` | Generic medical | TNG office or team group shot | 1920x1080 |
| `why-tng.html` | Consultant/business | TNG consultants at work | 1920x1080 |
| `services.html` | Healthcare setting | TNG team planning session | 1920x1080 |
| `contact.html` | Office building | TNG office exterior or reception | 1920x1080 |

**Technical specs for hero images:**
- Minimum: 1920x1080px
- Format: JPG, optimized for web (80% quality)
- Style: Professional, natural lighting preferred
- Note: Images get dark overlay (70-90% opacity navy), so mid-tones work best

---

## Priority 2: Team/Culture Photos

Showcase TNG's consultant-owned culture and team environment.

### Recommended Shots:

| Shot | Description | Usage |
|------|-------------|-------|
| **Command Center** | Team monitoring go-live, multiple screens visible | Case studies, services pages |
| **Training Session** | Consultant training hospital staff at-the-elbow | EHR implementation page, blog |
| **Team Meeting** | Leadership or project team discussion | About page, Why TNG |
| **Office Environment** | Modern workspace, collaborative setting | Careers, About |
| **Remote Support** | Consultant on video call helping client | DiSChedule page, staffing |
| **Go-Live Moment** | Team celebrating successful launch | Case studies, testimonials |

**Technical specs:**
- Minimum: 1200x800px for feature blocks
- Minimum: 600x400px for cards
- Candid > posed (more authentic)
- Show diversity of team

---

## Priority 3: Consultant Action Shots

Show consultants doing the work (not just headshots).

### Recommended Shots:

| Shot | Context | Notes |
|------|---------|-------|
| At hospital workstation | Consultant working with EHR system | Permission required from facility |
| With clinical staff | Training or support interaction | Faces may need blurring |
| In scrubs/professional attire | Establishing credibility | Healthcare-appropriate dress |
| Travel/on-site | Arriving at client location | Shows national reach |

**Important:** Hospital photography requires facility permission. Consider:
- Mock setups in controlled environment
- Stock overlays for actual hospital settings
- Focus on consultant, blur backgrounds

---

## Priority 4: Office/Workspace

Establish TNG as established company, not just remote contractors.

### Recommended Shots:

| Shot | Purpose |
|------|---------|
| Office exterior | Contact page, footer |
| Reception/lobby | Professional impression |
| Conference room | Meeting capability |
| Workstations | Day-to-day operations |
| Team collaboration spaces | Culture showcase |

---

## Current Team Headshots (Already in Place)

Located on About page, sourced from thenicehrgroup.com:

| Person | Current Photo | Notes |
|--------|---------------|-------|
| Rafael Rodriguez | ✅ Good | Professional headshot |
| Wendy Perdomo | ✅ Good | May need slight crop adjustment |
| Marcos Fermin | ✅ Good | |
| Carlos Del Carmen | ✅ Good | |
| Christian Diaz | ✅ Good | |
| Jacqueline Resto | ✅ Good | |
| Billy Duc | ✅ Good | |
| Omoniyi Awofesobi | ✅ Good | Different source, consistent quality |
| Victor Roiter | ✅ Good | |
| Lori Mathieu | ✅ Good | |

**Headshot specs if updating:**
- 400x400px minimum (square crop)
- Consistent background (solid or blurred office)
- Professional attire
- Natural expression
- Good lighting (no harsh shadows)

---

## Stock Images Currently in Use

These pages use Unsplash stock images that should eventually be replaced:

| Page | Element | Current Source | Replace With |
|------|---------|----------------|--------------|
| `index.html` | Hero | Unsplash (meeting) | Real team meeting |
| `index.html` | Feature blocks | Unsplash | Real implementation shots |
| `about.html` | Hero | Unsplash (medical) | Team photo |
| `about.html` | Feature image | Unsplash | Rafael or team working |
| `services.html` | Hero | Unsplash | Planning session |
| `why-tng.html` | Hero | Unsplash | Consultants at work |
| `ehr-systems.html` | Cards | Unsplash | EHR screenshots or team |
| `rcm.html` | Hero | Unsplash | RCM team or dashboard |
| `staffing.html` | Hero | Unsplash | Training session |
| Case study pages | Headers | Unsplash (cityscapes) | Keep or replace with client-area imagery |

---

## Image Optimization Checklist

Before adding images to the site:

- [ ] Resize to appropriate dimensions (don't upload 4000px images)
- [ ] Compress using TinyPNG or similar (target <200KB for heroes)
- [ ] Use descriptive filenames: `tng-team-command-center.jpg` not `IMG_4521.jpg`
- [ ] Add to `/images/` folder with organized subfolders:
  ```
  images/
  ├── heroes/
  ├── team/
  ├── office/
  └── consulting/
  ```

---

## Quick Win: Smartphone Photos

If professional photography isn't immediately available:

1. **Good lighting** - Natural window light, avoid harsh overhead fluorescents
2. **Clean backgrounds** - Declutter before shooting
3. **Landscape orientation** - Most web uses are horizontal
4. **Multiple shots** - Take 10, pick 1
5. **Edit lightly** - Slight brightness/contrast adjustment, don't over-filter

Modern smartphones (iPhone 12+, Samsung S21+) produce web-quality images.

---

## Photography Budget Considerations

| Option | Cost Range | Quality | Timeline |
|--------|------------|---------|----------|
| Smartphone (DIY) | Free | Good | Immediate |
| Local photographer (half-day) | $500-1,500 | Professional | 1-2 weeks |
| Professional shoot (full-day) | $2,000-5,000 | Enterprise | 2-4 weeks |
| Stock enhancement | $50-200 | Mixed | Immediate |

**Recommendation:** Start with smartphone shots for immediate improvement, schedule professional shoot for hero images and team culture shots.

---

## File Naming Convention

```
tng-[category]-[description]-[size].jpg

Examples:
tng-hero-team-meeting-1920.jpg
tng-team-rafael-headshot-400.jpg
tng-office-conference-room-1200.jpg
tng-consulting-go-live-support-800.jpg
```

---

## Contact for Questions

When scheduling photography, capture shots for:
- Website (this guide)
- LinkedIn company page
- Proposals/RFPs
- Marketing materials

One professional shoot can provide assets for multiple uses.

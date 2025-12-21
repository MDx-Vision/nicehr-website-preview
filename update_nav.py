import os

nav_item = """        <li class="nav-dropdown">
          <a href="#" class="nav-link">Industries</a>
          <div class="dropdown-menu">
            <a href="hospitals-rcm.html">Hospitals & Health Systems</a>
            <a href="physicians-rcm.html">Physician Practices</a>
            <a href="surgery-centers-rcm.html">Surgery Centers</a>
            <a href="imaging-centers-rcm.html">Imaging Centers</a>
            <a href="laboratories-rcm.html">Laboratories</a>
          </div>
        </li>"""

files = [
    "about.html", "blog.html", "case-studies.html", "contact.html", 
    "data-analytics.html", "dischedule.html", "ehr-implementation.html", 
    "ehr-systems.html", "faq.html", "government.html", "services.html", 
    "staffing.html", "testimonials.html", "veterans.html"
]

base_dir = "/Users/rafaelrodriguez/Downloads/nicehr-website-static"

for filename in files:
    path = os.path.join(base_dir, filename)
    if not os.path.exists(path):
        print(f"Skipping {filename} (not found)")
        continue
        
    with open(path, "r") as f:
        content = f.read()
        
    if "Industries" in content:
        print(f"Skipping {filename} (already has Industries)")
        continue
        
    # Find Revenue Cycle closing tag
    target = '            <a href="rcm-platform.html">RCM Platform</a>\n          </div>\n        </li>'
    
    if target in content:
        new_content = content.replace(target, target + "\n" + nav_item)
        with open(path, "w") as f:
            f.write(new_content)
        print(f"Updated {filename}")
    else:
        print(f"Could not find insertion point in {filename}")

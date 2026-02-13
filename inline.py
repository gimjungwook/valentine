import re
import glob
import shutil

# Read HTML from dist
with open(r'C:\Projects\valentine\dist\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find and inline CSS file
css_files = glob.glob(r'C:\Projects\valentine\dist\assets\index-*.css')
if css_files:
    with open(css_files[0], 'r', encoding='utf-8') as f:
        css = f.read()
    
    # Remove external CSS link and add inline style
    html = re.sub(r'<link rel="stylesheet"[^>]*\.css[^>]*>', '', html)
    html = html.replace('</head>', f'<style>{css}</style>\n</head>')

# Find and inline JS file
js_files = glob.glob(r'C:\Projects\valentine\dist\assets\index-*.js')
if js_files:
    with open(js_files[0], 'r', encoding='utf-8') as f:
        js = f.read()
    
    # Remove external JS script and add inline script  
    html = re.sub(r'<script type="module"[^>]*\.js[^>]*></script>', '', html)
    html = html.replace('</head>', f'<script type="module">{js}</script>\n</head>')

# Write single file
with open(r'C:\Projects\valentine\valentine-single.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Copy to docs/index.html for GitHub Pages (docs folder deployment)
import os
os.makedirs(r'C:\Projects\valentine\docs', exist_ok=True)
with open(r'C:\Projects\valentine\docs\index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Done! Size:', len(html), 'bytes')
print('Output: valentine-single.html + docs/index.html')

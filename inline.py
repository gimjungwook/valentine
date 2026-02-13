import re
import glob

# Read HTML
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

# Also copy to index.html for GitHub Pages
with open(r'C:\Projects\valentine\index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Done! Size:', len(html), 'bytes')

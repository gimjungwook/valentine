import re

# Read files
with open(r'C:\Projects\valentine\dist\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open(r'C:\Projects\valentine\dist\assets\index-BD1OM9Gs.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open(r'C:\Projects\valentine\dist\assets\index-3ggcbGsf.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Remove external CSS link and add inline style
html = re.sub(r'<link rel="stylesheet"[^>]*\.css[^>]*>', '', html)
html = html.replace('</head>', f'<style>{css}</style>\n</head>')

# Remove external JS script and add inline script  
html = re.sub(r'<script type="module"[^>]*\.js[^>]*></script>', '', html)
html = html.replace('</body>', f'<script type="module">{js}</script>\n</body>')

# Write single file
with open(r'C:\Projects\valentine\valentine-single.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Done! Size:', len(html), 'bytes')

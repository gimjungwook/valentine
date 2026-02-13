import urllib.request
import base64
import re

# Get Google Fonts CSS
req = urllib.request.Request(
    'https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&display=swap',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
)
with urllib.request.urlopen(req) as response:
    font_css = response.read().decode('utf-8')

print("Font CSS:")
print(font_css)

# Extract font URLs (ttf or woff2)
urls = re.findall(r'url\((https://[^)]+\.(?:woff2|ttf))\)', font_css)
print(f"\nFound {len(urls)} font URLs")

# Download and convert to base64
for url in urls:
    print(f"Downloading: {url}")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        font_data = response.read()
    b64 = base64.b64encode(font_data).decode('utf-8')
    fmt = 'font/woff2' if url.endswith('.woff2') else 'font/ttf'
    font_css = font_css.replace(url, f'data:{fmt};base64,{b64}')
    print(f"  Size: {len(font_data)} bytes")

# Read current HTML
with open(r'C:\Projects\valentine\valentine-single.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove Google Fonts links and add inline font CSS
html = re.sub(r'<link rel="preconnect"[^>]*fonts\.googleapis\.com[^>]*>', '', html)
html = re.sub(r'<link[^>]*fonts\.googleapis\.com[^>]*>', '', html)

# Add font CSS at the beginning of existing style
html = html.replace('<style>', f'<style>\n{font_css}\n')

# Write final file
with open(r'C:\Projects\valentine\valentine-complete.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\nDone! Final size: {len(html)} bytes")

from pathlib import Path
text = Path('src/pages/index.astro').read_text()
idx = text.index('</section>')
print(text[idx:idx+150].replace('\n','\\n'))

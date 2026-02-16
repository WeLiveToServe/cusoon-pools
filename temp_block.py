from pathlib import Path
path = Path('src/pages/index.astro')
lines = path.read_text().splitlines()
start = lines.index('      <div  class=mt-8 grid gap-5 sm:grid-cols-2'.replace(','))

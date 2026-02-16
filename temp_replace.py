from pathlib import Path
path = Path('src/pages/index.astro')
data = path.read_text()
old = '''        {testimonials.map((testimonial, index) => (
          <article
            class={ounded-3xl border p-6 shadow-lift 
          >'''
new = '''        {testimonials.map((testimonial, index) => (
          <article class={ounded-3xl border p-6 shadow-lift >
'''
if old not in data:
    raise SystemExit('snippet not found')
data = data.replace(old, new, 1)
path.write_text(data, encoding='utf-8')

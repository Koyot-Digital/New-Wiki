# ONPS Wiki

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![License: KDAAL](https://img.shields.io/badge/License-KDAAL-lightgrey.svg?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/Koyot-Digital/Wiki?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Koyot-Digital/Wiki?style=for-the-badge)

- **Dev site:** https://wiki.scatterbox.dev/
  [![deploy](https://github.com/Koyot-Digital/Wiki/actions/workflows/dev-deploy.yml/badge.svg)](https://github.com/Koyot-Digital/Wiki/actions/workflows/Dev-Deploy.yml)
- **Prod site:** https://wiki.koyot.digital/
  [![deploy](https://github.com/Koyot-Digital/Wiki/actions/workflows/prod-deploy.yml/badge.svg)](https://github.com/Koyot-Digital/Wiki/actions/workflows/Prod-Deploy.yml)

---

## 🛠️ Development

This project is built with HTML, CSS, and JavaScript, and uses [Prettier](https://prettier.io/) for consistent code
formatting.

To exclude a node from Prettier formatting, wrap it like this:

```html
<!-- prettier-ignore-start -->
[NODE HERE]
<!-- prettier-ignore-end -->
```

### Resources

- [Svelte](https://svelte.dev)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Heroicons](https://heroicons.com/)

---

## ✏️ Contributing

For full contributing guidelines, see [/CONTRIBUTING.md](/CONTRIBUTING.md).

New to GitHub? Git can feel overwhelming at first, but it clicks quickly. This XKCD comic is a fun starting point:

![XKCD 1597](https://imgs.xkcd.com/comics/git.png)

For a solid introduction to core concepts like `push`, `fetch`, and `pull`, check
out [this beginner-friendly article](https://webtuu.com/blog/04/a-laymans-introduction-to-git).

---

## 📖 Writing Guidelines

Good writing helps people learn faster and find information when they need it. Here are the standards we follow.

### 🎯 Voice and Style

**Write Directly to the Reader:**
Avoid unnecessary pronouns in instructions. Instead of "operators should check the pressure" or "you should check the
pressure," write "check the pressure." It's more assertive, cleaner, and easier to follow. When a pronoun is needed, use
gender-neutral options like "they," "them," or "operator."

**Keep It Conversational:**
Professional doesn't mean stiff. Write like you're explaining something to a knowledgeable colleague standing next to
you — clear, direct, and human.

For example:

**_DON'T:_**

```
The missile knows where it is at all times. It knows this because it knows where it isn't. By subtracting where it is from where it isn't, or where it isn't from where it is (whichever is greater), it obtains a difference, or deviation...
```

**_DO:_**

```
The missile knows where it is at all times. It knows this because it knows where it isn't.
```

### 🏷️ Formatting Standards

**Headers and Titles:**
Use Title Case for all headings (e.g. "Pre-Start Guide" or "Emergency Situations") to keep navigation consistent and
easy to scan.

**Break Things Up:**
Long paragraphs are hard to follow, especially mid-procedure. Use short paragraphs and break complex ideas into
digestible chunks.

**Technical Terms:**
Always provide context when using terminology. A brief explanation can save a reader a lot of confusion. Don't just
write "ECCS," link to a page or include a short description.

**Acronyms:**
Use the `<abbr>` tag so readers can hover for a definition:

```html
<abbr title="Emergency Core Cooling System">ECCS</abbr>
```

Not everyone will know what a <abbr title="Control Room Alert Searcher">CRAS</abbr> or ECCS is, the tag makes the wiki
more accessible to everyone.

---

## 🆘 Getting Help

Everyone gets stuck sometimes. Here's where to go.

**Technical Issues:**
Open an Issue in the repository, or reach out to **@gargleblaster_rmbk** or **@felix2557** on
the [Discord Server](https://discord.com/invite/exnVZvUJUw). Be as specific as possible about what you're trying to do
and what's going wrong — it helps a lot.

**Content Questions:**
Not sure if your changes fit the wiki's goals? Open an Issue and ask before investing a lot of time. It's always better
to check first.

### Common Gotchas

**HTML Syntax:**
If you're new to HTML, start by editing text content rather than structural tags. For reference, check how similar pages
are formatted, visit [@gargleblaster-rbmk's HTML guide](https://gargleblaster-rbmk.github.io/), or browse
the [Mozilla MDN Docs](https://developer.mozilla.org/).

**Image Formats:**
Only `.AVIF` files are supported. This keeps file sizes small and pages loading fast. Large images slow down the site
and hurt SEO.

---

## 📄 License

This project is licensed under the [Koyot Digital Antiderivative and Attribution License (KDAAL)](/LICENSE.md).

(function () {
  const S = window.SITE;
  const ALL = window.PROJECTS.filter((p) => !p.hidden);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel) => document.querySelector(sel);
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const parse = (d) => (d ? new Date(d + "T00:00:00") : null);
  const fmtMonth = (d) => `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  const KIND = { production: "Producing", development: "Building", both: "Producing and building" };

  function dateRange(p) {
    const s = parse(p.start), e = parse(p.end);
    if (!e && p.due) return `${fmtMonth(s)} to ${fmtMonth(parse(p.due))}, in progress`;
    if (!e) return `${fmtMonth(s)} to now`;
    const days = Math.round((e - s) / 864e5) + 1;
    if (days <= 14) return `${days} days, ${fmtMonth(s)}`;
    if (days <= 45) return `${Math.round(days / 7)} weeks, ${fmtMonth(s)}`;
    return `${fmtMonth(s)} to ${fmtMonth(e)}`;
  }

  function thumb(p, alt) {
    const cls = p.coverFit === "contain" ? "thumb contain" : "thumb";
    const pos = p.coverPos ? `object-position:${p.coverPos};` : "";
    return `<div class="${cls}" style="background:${esc(p.coverBg || "#18203a")}"><img src="${esc(p.cover)}" alt="${esc(alt ?? "")}" style="${pos}" loading="lazy"></div>`;
  }

  function linkButtons() {
    const out = [];
    if (S.email) out.push(`<a class="btn btn-primary" href="mailto:${esc(S.email)}">Email me</a>`);
    if (S.resume) out.push(`<a class="btn" href="resume.html">Résumé</a>`);
    const icon = (href, name, key) =>
      `<a class="btn btn-icon" href="${esc(href)}" aria-label="${name}" title="${name}"><span class="icon icon-${key}" aria-hidden="true"></span></a>`;
    if (S.linkedin) out.push(icon(S.linkedin, "LinkedIn", "linkedin"));
    if (S.itch) out.push(icon(S.itch, "itch.io", "itch"));
    if (S.github) out.push(icon(S.github, "GitHub", "github"));
    return out.join("");
  }

  /* ---------- Home ---------- */
  function renderHome() {
    $("#intro").textContent = S.intro;
    $("#headline").textContent = S.headline;
    $("#hero-links").innerHTML = `<a class="btn btn-primary" href="#work">See the work</a>` + linkButtons().replace("btn btn-primary", "btn");
    renderGantt();

    const featured = ALL.filter((p) => p.featured);
    $("#featured").innerHTML = featured
      .map(
        (p) => `<a class="feature" href="project.html?p=${esc(p.slug)}">
          ${thumb(p, `${p.title} cover art`)}
          <h3>${esc(p.title)}</h3>
          <div class="role">${esc(p.role)}, ${esc(p.context)}</div>
          <p>${esc(p.roleSummary)}</p>
        </a>`
      )
      .join("");

    const rest = ALL.filter((p) => !p.featured);
    $("#list").innerHTML = rest
      .map(
        (p) => `<li><a href="project.html?p=${esc(p.slug)}">
          ${thumb(p, "")}
          <div>
            <h3>${esc(p.title)}</h3>
            <div class="meta">${esc(p.role)}. ${esc(p.context)}, ${esc(dateRange(p))}.</div>
            <p>${esc(p.pitch)}</p>
            ${p.awards ? `<span class="award">${esc(p.awards)}</span>` : ""}
          </div>
          <span class="kind"><i class="swatch k-${p.kind}"></i>${KIND[p.kind]}</span>
        </a></li>`
      )
      .join("");

    $("#code").innerHTML = (S.code || [])
      .map((c) => {
        const visual = c.demo
          ? `<div class="code-visual"><iframe src="${esc(c.demo)}" title="${esc(c.title)} live demo" loading="lazy" tabindex="-1" aria-hidden="true"></iframe></div>`
          : `<pre class="code-visual code-snippet" aria-hidden="true">${c.snippet.map(esc).join("\n")}</pre>`;
        return `<article class="code-card">
          ${visual}
          <h3>${esc(c.title)}</h3>
          <div class="meta">${esc(c.lang)}</div>
          <p>${esc(c.text)}</p>
          <div class="code-links">
            ${c.demo ? `<a href="${esc(c.demo)}">Run the live demo</a>` : ""}
            <a href="${esc(c.code)}">Read the code on GitHub</a>
          </div>
        </article>`;
      })
      .join("");

    const ab = S.about;
    if (ab && $("#about-body")) {
      $("#about-body").innerHTML = `
        <img class="about-photo" src="${esc(ab.photo)}" alt="${esc(ab.alt)}" width="800" height="1000" loading="lazy">
        <div class="about-text">
          ${ab.paragraphs.map((t) => `<p>${esc(t)}</p>`).join("")}
          <dl class="about-facts">${ab.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        </div>`;
    }

    const ph = S.photography;
    if (ph) {
      $("#photo").innerHTML = `
        <div class="photo-strip">${ph.photos.map((p) => `<img src="${esc(p)}" alt="Landscape photograph by Davis Mesmer">`).join("")}</div>
        <div><h3>${esc(ph.title)}</h3><p>${esc(ph.text)}</p></div>`;
    }

    $("#skills-prod").innerHTML = S.skills.production.map((s) => `<li>${esc(s)}</li>`).join("");
    $("#skills-dev").innerHTML = S.skills.development.map((s) => `<li>${esc(s)}</li>`).join("");
    $("#contact-links").innerHTML = linkButtons();
    $("#year").textContent = new Date().getFullYear();
  }

  function renderGantt() {
    const today = new Date();
    const items = [...ALL].sort((a, b) => parse(a.start) - parse(b.start));
    const first = parse(items[0].start);
    const min = new Date(first.getFullYear(), first.getMonth(), 1);
    const lastEnd = new Date(Math.max(today, ...items.map((p) => parse(p.end) || parse(p.due) || today)));
    const max = new Date(lastEnd.getFullYear(), lastEnd.getMonth() + 2, 1);
    const span = max - min;
    const pct = (d) => ((d - min) / span) * 100;

    // X axis: a tick every quarter, with the year on the first tick and on each January.
    let ticks = "", grid = "", firstTick = true;
    for (let d = new Date(min); d < max; d = new Date(d.getFullYear(), d.getMonth() + 1, 1)) {
      if (d.getMonth() % 3 !== 0) continue;
      const x = pct(d).toFixed(3);
      const label = firstTick || d.getMonth() === 0 ? `${MONTHS[d.getMonth()]} ${d.getFullYear()}` : MONTHS[d.getMonth()];
      ticks += `<span style="left:${x}%"${d.getMonth() === 0 ? ' class="year"' : ""}>${label}</span>`;
      grid += `<i style="left:${x}%"${d.getMonth() === 0 ? ' class="year"' : ""}></i>`;
      firstTick = false;
    }

    // Y axis: one row per project, oldest first.
    const yLabels = items
      .map(
        (p) => `<a class="gantt-ylabel" href="project.html?p=${esc(p.slug)}">
          <strong>${esc(p.title)}</strong><span>${esc(p.role)}, ${esc(dateRange(p))}</span>
        </a>`
      )
      .join("");

    const bars = items
      .map((p, i) => {
        const s = parse(p.start);
        const e = parse(p.end) || parse(p.due) || today;
        const left = pct(s), width = Math.max(pct(e) - left, 0.6);
        return `<div class="gantt-row">
          <a class="gantt-bar k-${p.kind}${p.end ? "" : " ongoing"}" style="left:${left}%;width:${width}%;--i:${i}" href="project.html?p=${esc(p.slug)}" title="${esc(`${p.title}: ${dateRange(p)}`)}" tabindex="-1" aria-hidden="true"></a>
        </div>`;
      })
      .join("");

    $("#gantt").innerHTML = `
      <div class="gantt-ytitle">Project</div>
      <div aria-hidden="true"></div>
      <div class="gantt-ylabels">${yLabels}</div>
      <div class="gantt-plot">
        <div class="gantt-grid" aria-hidden="true">${grid}</div>
        <div class="gantt-today" style="left:${pct(today)}%" aria-hidden="true"><b>Today</b></div>
        ${bars}
      </div>
      <div class="gantt-corner" aria-hidden="true"></div>
      <div class="gantt-axis" aria-hidden="true">${ticks}</div>
      <div class="gantt-corner" aria-hidden="true"></div>
      <div class="gantt-xtitle">Time</div>`;
  }

  /* ---------- Project page ---------- */
  function renderProject() {
    const slug = new URLSearchParams(location.search).get("p");
    const i = ALL.findIndex((p) => p.slug === slug);
    const root = $("#project");
    if (i < 0) {
      root.innerHTML = `<div class="wrap notfound"><h1>That project isn't here.</h1><p style="margin-top:12px"><a href="index.html">Go back to all projects</a></p></div>`;
      return;
    }
    const p = ALL[i];
    const next = ALL[(i + 1) % ALL.length];
    const dev = p.kind === "development";
    document.title = `${p.title} | ${S.name}`;

    const facts = [
      ["Role", p.role],
      ["Context", p.context],
      ["Timeline", dateRange(p)],
      ["Team", p.teamSize === 1 ? "Solo" : `${p.teamSize} people`],
      ["Engine", `${p.engine}, ${p.language}`],
    ];
    if (p.platform) facts.push(["Platform", p.platform]);

    const sections = [];
    sections.push(`<section><h2>${p.due && !p.end ? "What I do" : "What I did"}</h2><p class="lead">${esc(p.roleSummary)}</p>
      <ul class="did${dev ? " dev" : ""}" style="margin-top:16px">${p.did.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></section>`);

    if (p.milestones && p.milestones.length) {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const nextIdx = p.milestones.findIndex(([d]) => parse(d) >= now);
      const fmtDay = (d) => `${MONTHS[d.getMonth()]} ${d.getDate()}`;
      sections.push(`<section><h2>Milestones</h2><ol class="milestones" style="--n:${p.milestones.length}">${p.milestones
        .map(([d, label], k) => {
          const date = parse(d);
          const state = k < nextIdx || nextIdx < 0 ? "done" : k === nextIdx ? "next" : "later";
          const tag = state === "done" ? "Done" : state === "next" ? "Up next" : "";
          return `<li class="ms-${state}"><time datetime="${esc(d)}">${fmtDay(date)}</time><span>${esc(label)}</span>${tag ? `<em>${tag}</em>` : ""}</li>`;
        })
        .join("")}</ol></section>`);
    }

    if (p.playEmbed) {
      const r = p.playEmbed;
      sections.push(`<section><h2>Play it</h2>
        <div class="embed"><iframe src="https://itch.io/embed-upload/${esc(r.id)}?color=18203a" allowfullscreen loading="lazy" style="aspect-ratio:${r.width}/${r.height}" title="Play ${esc(p.title)}"></iframe></div>
        <p class="small-note">Runs in the browser. Full screen is recommended${p.itch ? `, or <a href="${esc(p.itch)}">download it on itch.io</a>` : ""}.</p></section>`);
    }
    if (p.video) {
      sections.push(`<section><h2>Watch it</h2>
        <div class="embed video"><iframe src="https://www.youtube-nocookie.com/embed/${esc(p.video)}" allowfullscreen loading="lazy" title="${esc(p.title)} video"></iframe></div></section>`);
    }

    if (p.production) sections.push(productionSection(p.production));

    if (p.goals && p.goals.length)
      sections.push(`<section><h2>Design goals</h2><div class="goals">${p.goals
        .map(([t, d]) => `<div><strong>${esc(t)}</strong><span>${esc(d)}</span></div>`)
        .join("")}</div></section>`);

    sections.push(`<section><h2>How it came together</h2><p>${esc(p.process)}</p></section>`);

    if (p.shots.length)
      sections.push(`<section><h2>Screenshots</h2><div class="gallery${p.shots.length % 2 ? " odd" : ""}">${p.shots
        .map((s, k) => `<button type="button" data-full="${esc(s)}" aria-label="Enlarge screenshot ${k + 1}"><img src="${esc(s)}" alt="${esc(p.title)} screenshot ${k + 1}" loading="lazy"></button>`)
        .join("")}</div></section>`);

    (p.galleries || []).forEach((g) =>
      sections.push(`<section><h2>${esc(g.title)}</h2><div class="gallery fixed" style="--cols:${g.cols || 2};--ratio:${g.ratio || "16 / 10"}">${g.items
        .map(([s, cap]) => `<button type="button" data-full="${esc(s)}" aria-label="Enlarge: ${esc(cap)}"><img src="${esc(s)}" alt="${esc(`${p.title}: ${cap}`)}" loading="lazy"></button>`)
        .join("")}</div></section>`)
    );

    sections.push(`<section><h2>${esc(p.lessonsTitle || "What I learned")}</h2>${p.reflection ? `<p>${esc(p.reflection)}</p>` : ""}
      <ul class="did${dev ? " dev" : ""}" style="margin-top:12px">${p.lessons.map((l) => `<li>${esc(l)}</li>`).join("")}</ul></section>`);

    const links = [];
    if (p.itch) links.push(`<a class="btn btn-primary" href="${esc(p.itch)}">${p.playEmbed ? "Play on itch.io" : "View on itch.io"}</a>`);
    if (p.github) links.push(`<a class="btn" href="${esc(p.github)}">Source on GitHub</a>`);

    root.innerHTML = `
      <div class="wrap p-hero">
        <a class="back" href="index.html#work">All projects</a>
        <div class="p-head">
          <div>
            <h1>${esc(p.title)}</h1>
            <div class="p-role${dev ? " dev" : ""}">${esc(p.role)}</div>
            <p class="p-pitch">${esc(p.pitch)}</p>
            ${p.awards ? `<div class="award-callout">${esc(p.awards)}</div>` : ""}
          </div>
          ${thumb(p, `${p.title} cover art`)}
        </div>
        <dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        <div class="p-body">
          <div class="p-main">${sections.join("")}</div>
          <aside class="p-side">
            ${links.length ? `<div class="side-block side-links">${links.join("")}</div>` : ""}
            ${p.team.length ? `<div class="side-block"><h2>Team</h2><ul class="team">${p.team
              .map(([n, r]) => `<li${n === S.name || n === p.teamMe ? ' class="me"' : ""}>${esc(n)}<span>${esc(r)}</span></li>`)
              .join("")}</ul></div>` : ""}
          </aside>
        </div>
        <div class="next"><a href="project.html?p=${esc(next.slug)}"><span>Next project</span><strong>${esc(next.title)}</strong></a></div>
      </div>`;

    // Lightbox
    const box = $("#lightbox");
    root.querySelectorAll("[data-full]").forEach((b) =>
      b.addEventListener("click", () => {
        box.querySelector("img").src = b.dataset.full;
        box.querySelector("img").alt = b.querySelector("img").alt;
        box.showModal();
      })
    );
    box.addEventListener("click", (e) => { if (e.target === box || e.target.tagName === "BUTTON") box.close(); });
  }

  function productionSection(c) {
    const list = (a) => `<ul>${a.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
    const miro = (c.miro || [])
      .map(([t, u]) => `<div class="artifact"><h3>${esc(t)} (Miro)</h3><iframe src="${esc(u)}" loading="lazy" allowfullscreen title="${esc(t)}"></iframe></div>`)
      .join("");
    const plan = c.plan ? `<div class="artifact"><h3>Project plan</h3><iframe src="${esc(c.plan)}" loading="lazy" title="Project plan"></iframe></div>` : "";
    const linkList = [...(c.trello ? [["Open the Trello board", c.trello]] : []), ...(c.links || [])];
    const trello = linkList.length
      ? `<div class="artifact-links">${linkList.map(([t, u]) => `<a class="btn" href="${esc(u)}"${/^https?:/.test(u) ? ' target="_blank" rel="noopener"' : ""}>${esc(t)}</a>`).join("")}</div>`
      : "";
    const embeds = (c.embeds || [])
      .map(([t, u]) => `<div class="artifact"><h3>${esc(t)}</h3><iframe src="${esc(u)}" loading="lazy" title="${esc(t)}"></iframe></div>`)
      .join("");
    return `<section><h2>How I ran the team</h2>
      <div class="prod">
        ${c.approach.map((a) => `<p>${esc(a)}</p>`).join("")}
        <div class="prod-grid">
          ${c.challenges ? `<div><h3>The challenge</h3><p>${esc(c.challenges)}</p></div>` : ""}
          ${c.strengths ? `<div><h3>What we had going for us</h3><p>${esc(c.strengths)}</p></div>` : ""}
          <div><h3>Tools</h3><ul class="tags">${c.tools.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>
          <div><h3>Takeaways</h3>${list(c.lessons)}</div>
        </div>
        ${trello}
        ${embeds ? `<div class="artifacts">${embeds}</div>` : ""}
        ${(c.images || []).map(([src, cap]) => `<figure class="prod-figure"><button type="button" data-full="${esc(src)}" aria-label="Enlarge: ${esc(cap)}"><img src="${esc(src)}" alt="${esc(cap)}" loading="lazy"></button><figcaption>${esc(cap)}</figcaption></figure>`).join("")}
        ${c.raci ? raciTable(c.raci) : ""}
        ${c.aiPolicy ? aiPolicyBlock(c.aiPolicy) : ""}
        ${c.skill ? skillBlock(c.skill) : ""}
        ${c.contract ? `<div class="contract"><h3>The team social contract</h3><dl>${c.contract.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl></div>` : ""}
        ${miro || plan ? `<details class="artifacts-wrap"><summary>Show the ${[plan && "project plan", miro && "Miro boards"].filter(Boolean).join(" and ")}</summary><div class="artifacts">${plan}${miro}</div></details>` : ""}
      </div></section>`;
  }

  function aiPolicyBlock(a) {
    const lv = (n) => `<b class="ai-lv ai-lv-${n}">${n}</b>`;
    return `<div class="ai-policy"><h3>AI Assessment chart</h3>
      <p>${esc(a.intro)}</p>
      ${a.branches ? `<p class="ai-branches">${esc(a.branches)}</p>` : ""}
      <ol class="ai-scale">${a.scale.map(([n, name, d]) => `<li>${lv(n)}<div><strong>${esc(name)}</strong><span>${esc(d)}</span></div></li>`).join("")}</ol>
      <div class="ai-groups">${a.groups
        .map(([g, items]) => `<div><h4>${esc(g)}</h4><ul>${items.map(([t, n]) => `<li><span>${esc(t)}</span>${lv(n)}</li>`).join("")}</ul></div>`)
        .join("")}</div>
      <div class="ai-extra">
        <div><h4>Approved tools</h4><p>${a.models.yes.map(esc).join(", ")}. Not approved: ${a.models.no.map(esc).join(", ")}.</p>
          <h4>Art stays private</h4><p>${esc(a.art)}</p></div>
        <div><h4>If someone breaks it</h4><dl>${a.consequences.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl></div>
      </div></div>`;
  }

  function skillBlock(s) {
    const logo = s.logo ? `<span class="icon icon-${esc(s.logo)}" role="img" aria-label="${esc(s.logoLabel || s.logo)}"></span>` : "";
    return `<div class="skill-block"><h3${logo ? ' class="logo-inline"' : ""}>${logo}${esc(s.title)}</h3>
      <p>${esc(s.intro)}</p>
      <ol class="skill-steps">${s.steps.map(([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join("")}</ol>
      <p class="skill-dev">${esc(s.development)}</p></div>`;
  }

  function raciTable(r) {
    const meCol = r.me ? r.roles.indexOf(r.me) : -1;
    const mark = (k) => (k === meCol ? " raci-me" : "");
    const head = `<tr><th scope="col">Deliverable</th>${r.roles.map((x, k) => `<th scope="col" class="${mark(k).trim()}">${esc(x)}${k === meCol ? " (me)" : ""}</th>`).join("")}</tr>`;
    const body = r.groups
      .map(([g, rows]) => `<tr class="raci-group"><th colspan="${r.roles.length + 1}" scope="rowgroup">${esc(g)}</th></tr>` +
        rows.map(([task, ...cells]) => `<tr><th scope="row">${esc(task)}</th>${cells.map((v, k) => `<td class="raci-${(v || "x").toLowerCase()}${mark(k)}">${esc(v)}</td>`).join("")}</tr>`).join(""))
      .join("");
    return `<div class="raci"><h3>RACI chart</h3>
      <p class="raci-key"><b class="raci-r">R</b> Responsible <b class="raci-a">A</b> Accountable <b class="raci-c">C</b> Consulted <b class="raci-i">I</b> Informed</p>
      <div class="raci-scroll"><table><thead>${head}</thead><tbody>${body}</tbody></table></div></div>`;
  }

  /* ---------- Résumé ---------- */
  function renderResume() {
    const pdf = esc(S.resume);
    $("#resume").innerHTML = `
      <div class="wrap resume">
        <div class="resume-side">
          <h1>Résumé</h1>
          <div class="hero-links">
            <a class="btn btn-primary" href="${pdf}" download>Download PDF</a>
            <a class="btn" href="${pdf}" target="_blank" rel="noopener">Open in a new tab</a>
          </div>
          <h2>Highlights</h2>
          <ul class="did">${(S.resumeHighlights || []).map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
        </div>
        <object class="resume-pdf" data="${pdf}#view=FitH" type="application/pdf" aria-label="Résumé PDF">
          <p class="resume-fallback">Your browser can't show the PDF here. <a href="${pdf}">Open the résumé</a>.</p>
        </object>
      </div>`;
  }

  function renderBadges() {
    const creds = $("#creds");
    if (creds && S.badges) {
      creds.innerHTML = S.badges
        .map((b) => `<li><a href="${esc(b.href)}" target="_blank" rel="noopener">
          <img src="${esc(b.img)}" alt="${esc(b.label)}">
          <span><strong>${esc(b.title)}</strong>${esc(b.caption)}</span>
        </a></li>`)
        .join("");
      return; // on the home page the credentials replace the header badges
    }
    const el = $("#badges");
    if (!el || !S.badges) return;
    el.innerHTML = S.badges
      .map((b) => `<a href="${esc(b.href)}" target="_blank" rel="noopener" title="${esc(b.tip)}"><img src="${esc(b.img)}" alt="${esc(b.label)}"></a>`)
      .join("");
  }

  /* ---------- Easter egg: the frozen cube peeks in ----------
     Click the tiny ice cube in the footer. */
  function initCube() {
    const btn = $("#cube-btn");
    if (!btn) return;
    let busy = false;
    const peek = () => {
      if (busy) return;
      busy = true;
      let el = $(".cube-peek");
      if (!el) {
        el = document.createElement("div");
        el.className = "cube-peek";
        el.innerHTML = `<img src="images/frozen-cube.webp" alt="DatFrozenCube, Davis's pixel avatar: an ice cube in a hoodie" width="52" height="140"><span class="cube-bubble" role="status">you found me!</span>`;
        document.body.appendChild(el);
        el.addEventListener("animationend", (e) => {
          if (e.target !== el) return; // ignore the image and bubble animations
          el.classList.remove("go");
          busy = false;
        });
      }
      const img = el.querySelector("img");
      const go = () => {
        void el.offsetWidth; // make sure the animation restarts
        el.classList.add("go");
      };
      img.complete ? go() : img.addEventListener("load", go, { once: true });
    };
    btn.addEventListener("click", peek);
  }

  renderBadges();
  initCube();
  if (document.body.dataset.page === "resume") renderResume();
  if (document.body.dataset.page === "home") renderHome();
  if (document.body.dataset.page === "project") renderProject();
})();

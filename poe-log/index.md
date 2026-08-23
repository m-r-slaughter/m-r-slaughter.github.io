---
layout: default
title: Poe-log - M R Slaughter
---
<section class="listing-page">
    <h2>Poe-log</h2>
    <p class="whisper">Poems and things whispered in the dark.</p>

    <div class="entries">
        {% assign items = site.posts | where: "section", "poetry" %}
        {% for post in items %}
        <article class="entry">
            <div class="entry-date">{% if post.date_display %}{{ post.date_display }}{% else %}{{ post.date | date: "%b &middot; %Y" }}{% endif %}</div>
            <div class="entry-body">
                <h3><a href="{{ post.url }}" class="entry-link">{{ post.title }}</a></h3>
                <p class="entry-preview">{{ post.content | strip_html | truncatewords: 18 }}</p>
            </div>
        </article>
        {% unless forloop.last %}
        <svg class="entry-divider" width="200" height="14" viewBox="0 0 200 14" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
            <path d="M10 7 Q55 3 95 7"/>
            <path d="M190 7 Q145 3 105 7"/>
            <circle cx="100" cy="7" r="2.5" fill="currentColor" stroke="none"/>
        </svg>
        {% endunless %}
        {% endfor %}
        {% if items.size == 0 %}
        <p class="entry-empty">Nothing here yet.</p>
        {% endif %}
    </div>
</section>

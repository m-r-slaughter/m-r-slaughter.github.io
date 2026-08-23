---
layout: default
title: Slashing Stories - M R Slaughter
---
<section class="listing-page">
    <h2>Slashing Stories</h2>
    <p class="whisper">Longer tales. Grim, mostly. Sometimes tender.</p>

    <div class="entries">
        {% assign stories = site.data.stories %}
        {% for story in stories %}
        <article class="entry">
            <div class="entry-body">
                <h3><a href="/slashing-stories/{{ story.slug }}/" class="entry-link">{{ story.title }}</a></h3>
                <p class="entry-preview">{{ story.teaser }}</p>
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
        {% if stories.size == 0 %}
        <p class="entry-empty">Nothing here yet.</p>
        {% endif %}
    </div>
</section>

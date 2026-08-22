---
layout: default
title: Poe-log - M R Slaughter
---
<section>
	<h2>Poe-log</h2>
	<ul class="posts">
		{% assign poems = site.posts | where: "section", "poetry" %}
		{% for post in poems %}
		<li>
		<span>{{ post.date | date_to_string }}</span> &mdash;
		<a href="{{ post.url }}" title="{{ post.title }}" class="paragraph-link">{{ post.title }}</a>
		</li>
		{% endfor %}
		{% if poems.size == 0 %}
		<li>Nothing here yet.</li>
		{% endif %}
	</ul>
</section>

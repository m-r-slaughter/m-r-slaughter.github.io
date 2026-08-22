---
layout: default
title: Slashing Stories - M R Slaughter
---
<section>
	<h2>Slashing Stories</h2>
	<ul class="posts">
		{% assign stories = site.posts | where: "section", "stories" %}
		{% for post in stories %}
		<li>
		<span>{{ post.date | date_to_string }}</span> &mdash;
		<a href="{{ post.url }}" title="{{ post.title }}" class="paragraph-link">{{ post.title }}</a>
		</li>
		{% endfor %}
		{% if stories.size == 0 %}
		<li>Nothing here yet.</li>
		{% endif %}
	</ul>
</section>

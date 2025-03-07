---
layout: default
title: Slashing Stories - M R Slaughter
---
<section>
	<h2>Slashing Stories</h2>
	<ul class="posts">
		{% for post in site.posts %}
		<li>
		<span>{{ post.date | date_to_string }}</span> &mdash;
		<a href="{{ post.url }}" title="{{ post.title }}" class="paragraph-link">{{ post.title }}</a>
		</li>
		{% endfor %}
	</ul>
</section>
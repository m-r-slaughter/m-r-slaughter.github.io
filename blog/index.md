---
layout: default
title: Blog - M R Slaughter
---
<section>
	<h3>Blog</h3>
	<ul class="posts">
		{% for post in site.posts %}
		<li>
		<span>{{ post.date | date_to_string }}</span> &mdash;
		<a href="{{ post.url }}" title="{{ post.title }}" class="paragraph-link">{{ post.title }}</a>
		</li>
		{% endfor %}
	</ul>
</section>
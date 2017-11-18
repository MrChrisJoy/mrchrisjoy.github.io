---
layout: page
title: Notes
permalink: /notes/
tagline: "Cheatsheets, Notes and Other Resources..."
description: School notes, resources etc.
---
<ul class="post-list">
	{% assign cats = site.notes | map: 'categories' | join: ',' | split: ',' | uniq %}
	{% for cat in cats %}
	<div class="postBody {{ cat }}">
		<div class="manual-post">
			<div class="manual manual-title" id="{{ cat }}">
				<i class="fa fa-book fa-lg" aria-hidden="true"></i>
				<strong>{{ cat }}</strong>
			</div>
		</div>
		<br>
		{% assign posts = site.notes | sort:"title" %}
		{% for post in posts %}
			{% if post.categories contains cat and post.published %}
			<li>
				<h3 style="margin-left:25px;font-size:17px; margin-top: -15px;">
					<i class="fa fa-sticky-note-o" aria-hidden="true"></i>
					<a class="post-link-main" style="padding-left:5px;" href="{{ post.url | prepend: site.baseurl }}"> {{ post.title }}</a>
					<span style="float:right;" class="post-meta-main">{{ post.date | date: "%b %-d, %Y" }}</span>
				</h3>
			</li>
			{% endif %}
		{% endfor %}
	</div>
	{% endfor %}
</ul>
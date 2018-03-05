---
layout: page
title: Notes
permalink: notes
tagline: "Cheatsheets, Notes and Other Resources..."
description: School notes, resources etc.
---
<ul class="post-list">
	{% assign cats = site._notes | map: 'categories' | join: ',' | split: ',' | uniq %}
	{% for cat in cats %}
	<div class="postBody {{ cat }}">
		<div class="manual-post">
			<div class="manual manual-title" id="{{ cat }}">
				<i class="fa fa-book fa-lg" aria-hidden="true"></i>
				<strong>{{ cat }}</strong>
			</div>
		</div>
		<div class="row post-list">
			{% assign posts = site._notes | sort:"date" | reverse %}
			{% for post in posts %} {% if post.published %}
			<div class="col-6 col-md-6 col-sm-6 post-card-col">
				<div style="background: url('{{post.image}}'); background-size: cover"
					class="card">
					<div class="row post-card-col post-card-col-btn">
						<div class="col-4 col-md-4">
							<a href="{{post.url}}"><div class="post-card-btn">Read More</div></a>
						</div>
					</div>
					<div class="post-card-contents">
						<h2>{{ post.title }} <span>{{ post.date | date: "%b %-d, %Y" }}</span></h2>
						<p>{{ post.content | strip_html | truncatewords: 30}}</p>
					</div>
				</div>
			</div>
			{% endif %}{% endfor %}
		</div>
	</div>
	{% endfor %}
</ul>
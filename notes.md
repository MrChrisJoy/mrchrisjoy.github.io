---
layout: page
title: Notes
permalink: /notes/
tagline: "Cheatsheets, Summaries and Other Resources for Slackers."
description: Chris's personal notes for UNSW CSE courses, Australian School of Business and the Higher School Certificate.
type: section
---

<hr style="margin-top: 2em; height: 1px; border: 0; border-top: 1px solid #E8E8E8; padding-bottom: 20px"/>
<div style="display:inline;">Categories
{% assign cats =  site.notes | map: 'categories' | join: ','  | split: ',' | uniq %}
{% for cat in cats %}
 <code style="padding:10px; text-transform:uppercase;"><i class="fa fa-book fa-lg" aria-hidden="true"></i><a href="#{{ cat }}"> {{ cat }}</a></code>
{% endfor %}
</div>
<hr style="margin-top: 2em; height: 1px; border: 0; border-top: 1px solid #E8E8E8; padding-bottom: 20px"/>

<ul class="post-list">
	{% assign cats =  site.notes | map: 'categories' | join: ','  | split: ',' | uniq %}
    {% for cat in cats %}

	<div class="manual-post">
		<div class="manual manual-title" id="{{ cat }}">
	  		<i class="fa fa-book fa-lg" aria-hidden="true"></i>
	 		<strong>{{ cat }}</strong>
		</div>
	</div><br>
		{% assign posts = site.notes | sort:"title" %}
	    {% for post in posts%}
	    	{% if post.categories contains cat %}
			<li>
			  <h3 style="margin-left:25px;font-size:17px; margin-top: -15px;">
			    <i class="fa fa-sticky-note-o" aria-hidden="true"></i>
				<a class="post-link-main" style="padding-left:5px;" href="{{ post.url | prepend: site.baseurl }}"> {{ post.title }}</a>
				<span style="float:right;" class="post-meta-main">{{ post.date | date: "%b %-d, %Y" }}</span>
			  </h3>
			</li>
	    	{% endif %}
	    {% endfor %}
    {% endfor %}
</ul>

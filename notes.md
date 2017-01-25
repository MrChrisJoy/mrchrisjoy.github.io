---
layout: page
title: Notes
permalink: /notes/
tagline: "Cheatsheets, Summaries and Other Resources for Slackers."
categories: "notes"
type: section
---


<ul class="post-list" style="padding-top: 30px;">
	{% assign cats =  site.notes | map: 'categories' | join: ','  | split: ',' | uniq %}
    {% for cat in cats %}
		<p style="text-transform: uppercase;">{{ cat }}</p>

	    {% for post in site.notes %}
	     {% if post.categories contains cat %}
	      <li>
	        <h3>
	          <a class="post-link-main" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
	        </h3>
	      </li>
	      {% endif %}
	    {% endfor %}
    {% endfor %}

</ul>

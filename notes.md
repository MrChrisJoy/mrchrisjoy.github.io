---
layout: page
title: Notes
permalink: /notes/
tagline: "Cheatsheets, Summaries and Other Resources for Slackers."
type: section
---


<ul class="post-list" style="padding-top: 30px;">
	{% assign cats =  site.notes | map: 'categories' | join: ','  | split: ',' | uniq %}
    {% for cat in cats %}

	<div class="manual-post">
		<div class="manual manual-title">
	  		<i class="fa fa-book fa-lg" aria-hidden="true"></i>
	 		<strong>{{ cat }}</strong><br>
		</div><br>
	</div>

	    {% for post in site.notes %}
	     {% if post.categories contains cat %}

		    <li>
		      <h3>
		        <i class="fa fa-sticky-note-o" aria-hidden="true"></i>
			    	<a style="margin-left:10px;font-size:20px;" class="post-link-main" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
			  		<span style="float:right;font-size:20px;" class="post-meta-main">{{ post.date | date: "%b %-d, %Y" }}</span>
		      </h3>
		    </li>

	      {% endif %}
	    {% endfor %}

	<br><br><br>
    {% endfor %}

</ul>
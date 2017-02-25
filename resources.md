---
layout: page
title: Resources
permalink: /resources/
tagline: "Cheatsheets, Summaries and Other Resources..."
description: Chris's personal resources for UNSW Courses, Australian School of Business and the Higher School Certificate Exams.
type: section
---

<script>
</script>

<hr><div style="display:inline;">
  <button class="cat-button" onclick="showDiv('postBody');"><i class="fa fa-folder-o fa-lg" aria-hidden="true"></i><a> all</a></button>
  {% assign cats =  site.resources | map: 'categories' | join: ','  | split: ',' | uniq %}
  {% for cat in cats %}
  <button class="cat-button" onclick="toggleDiv('{{ cat }}');jQuery(this).toggleClass('active');"><i class="fa fa-folder-o fa-lg" aria-hidden="true"></i><a> {{ cat }}</a></button>
  {% endfor %}
</div><hr>


<ul class="post-list">
	{% assign cats =  site.resources | map: 'categories' | join: ','  | split: ',' | uniq %}
    {% for cat in cats %}
	    <div class="postBody {{ cat }}">
			<div class="manual-post">
				<div class="manual manual-title" id="{{ cat }}">
			  		<i class="fa fa-book fa-lg" aria-hidden="true"></i>
			 		<strong>{{ cat }}</strong>
				</div>
			</div><br>
			{% assign posts = site.resources | sort:"title" %}
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
		</div>
	{% endfor %}
</ul>

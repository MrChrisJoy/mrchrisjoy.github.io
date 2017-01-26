---
layout: page
title: Thoughts
permalink: /thoughts/
tagline: "Change your thoughts, Change your world."
category: "thoughts"
type: section
---

<ul class="post-list" >
  {% assign posts = site.posts | sort:"date" | reverse %}
  {% for post in posts %}
  <div class="post postContent">
    <div  class="postDate"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%b %-d, %Y" }}</time>
    </div>
    <div class="postTag">
      {{post.tag}}
    </div>
    <br>
    <div class="postTitle">
    <a class='postLink' href="{{site.url}}{{site.baseurl}}{{post.url}}">{{post.title}}</a>
    </div>
    <div class="postExt">
   {{ post.content | strip_html | truncatewords:60}}
    </div>
    <span class="page-link" style="float:right" ><a href="{{site.url}}{{site.baseurl}}{{post.url}}">Read More »</a></span>
  </div>
	{% endfor %}

</ul>

---
layout: page
title: Posts
permalink: /posts/
tagline: "random ideas and observations..."
description: "Random Ideas and Observations."
---
<ul class="post-list">
  {% assign posts = site.posts | sort:"date" | reverse %} {% for post in posts %}{% if post.published %}
  <div class="post postContent {{ post.categories }}">
    <div class="postDate">
      <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%b %-d, %Y" }}</time>
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
    <span class="page-link" style="float:right">
      <a href="{{site.url}}{{site.baseurl}}{{post.url}}">Read More »</a>
    </span>
  </div>
  {% endif %}{% endfor %}
</ul>
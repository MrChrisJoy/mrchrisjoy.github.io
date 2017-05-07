---
layout: page
title: Thoughts
permalink: /thoughts/
tagline: "random ideas, proposals and observations..."
description: "Random Thoughts and Blog Posts."
category: "thoughts"
type: section
---

<script>
 function toggleDiv(divId) {
   $("."+divId).toggle();
 }
 function showDiv(divId) {
   $("."+divId).show();
   $("button").removeClass('active');
 }
</script>

<hr><div style="display:inline;">
<button class="cat-button" onclick="showDiv('postContent');"><i class="fa fa-folder-o fa-lg" aria-hidden="true"></i><a> all</a></button>
{% assign cats =  site.posts | map: 'categories' | join: ','  | split: ',' | uniq %}
{% for cat in cats %}
<button class="cat-button" onclick="toggleDiv('{{ cat }}');jQuery(this).toggleClass('active');"><i class="fa fa-folder-o fa-lg" aria-hidden="true"></i><a> {{ cat }}</a></button>
{% endfor %}
</div><hr>

<ul class="post-list" >
  {% assign posts = site.posts | sort:"date" | reverse %}
  {% for post in posts %}
  <div class="post postContent {{ post.categories }}">
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
     {{ post.content | strip_html | truncatewords:20}}
   </div>
   <span class="page-link" style="float:right" ><a href="{{site.url}}{{site.baseurl}}{{post.url}}">Read More »</a></span>
 </div>
 {% endfor %}

</ul>

---
layout: page
title: Projects
permalink: projects
tagline: "development work, start ups, and a few things I do in my spare time..."
description: My portfolio highlighting a suite of professional and elemetary projects.
---
<div class="row post-list">
    {% assign posts = site._projects | sort:"date" | reverse %}
    {% for post in posts %} {% if post.published %}
    <div class="col-6 col-md-6 col-sm-6 post-card-col">
        <div style="background: url('{{post.cover}}'); background-size: cover"
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
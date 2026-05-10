---
layout: page
title: paper reading
permalink: /paper-reading/
description: Notes and interpretations of research papers.
nav: true
nav_order: 4
---

{% assign readings = site.paper_reading | where_exp: "item", "item.published != false" | sort: "date" | reverse %}

<div class="post">
  <ul class="post-list">
    {% for reading in readings %}
      {% assign read_time = reading.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% assign tags = reading.tags | join: "" %}

      <li>
        <h3>
          <a class="post-title" href="{{ reading.url | relative_url }}">{{ reading.title }}</a>
        </h3>
        {% if reading.description %}
          <p>{{ reading.description }}</p>
        {% endif %}
        <p class="post-meta">
          {{ read_time }} min read &nbsp; &middot; &nbsp;
          {{ reading.date | date: "%B %d, %Y" }}
          {% if reading.paper.venue %}
            &nbsp; &middot; &nbsp; {{ reading.paper.venue }}
          {% endif %}
        </p>
        {% if tags != "" %}
          <p class="post-tags">
            {% for tag in reading.tags %}
              <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
              {% unless forloop.last %}
                &nbsp;
              {% endunless %}
            {% endfor %}
          </p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</div>

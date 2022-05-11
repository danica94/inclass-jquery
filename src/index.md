---
title: home
layout: base.njk
tags: navItem
---

<section class="intro">
  <header>
    <h2>THE <br>FIVE <br> BOROUGHS</h2>
  </header>
  <div class="accordions">
    <div class="accordion">
      <div class="accordion-header">
        <h3>The Bronx</h3>
      </div>
      <div class="accordion-item">
      <p>If each borough were ranked as a city, the Bronx would rank as the ninth-most-populous in the U.S. Of the five boroughs, it has the fourth-largest area, fourth-highest population, and third-highest population density. It is the only borough of New York City not primarily on an island.</p>
      <footer>This text is from the <a href="https://en.wikipedia.org/wiki/The_Bronx">Wikipedia Article on the Bronx.</a></footer>
      </div>
    </div>
    <div class="accordion">
      <div class="accordion-header">
        <h3>Brooklyn</h3>
      </div>
      <div class="accordion-item">
      <p>If each borough were ranked as a city, Brooklyn would rank as the third-most populous in the U.S., after Los Angeles and Chicago.</p>
      <footer>This text is from the <a href="https://en.wikipedia.org/wiki/Brooklyn">Wikipedia Article on Brooklyn.</a></footer>
      </div>
    </div>
    <div class="accordion">
      <div class="accordion-header">
        <h3>Manhattan</h3>
      </div>
      <div class="accordion-item">
      <p>If each borough were ranked as a city, Manhattan would rank as the sixth-most populous in the U.S. Manhattan, known regionally as The City, is the most densely populated and geographically smallest of the five boroughs of New York City.</p>
      <footer>This text is from the <a href="https://en.wikipedia.org/wiki/Manhattan">Wikipedia Article on Manhattan.  </a></footer>
      </div>
    </div>
    <div class="accordion">
      <div class="accordion-header">
        <h3>Queens</h3>
      </div>
      <div class="accordion-item">
      <p>If each borough were ranked as a city, Queens would rank as the fourth-most-populous in the U.S., after Los Angeles, Chicago, and Brooklyn.  Queens is the most linguistically diverse place on Earth and is one of the most ethnically diverse counties in the United States.</p>
      <footer>This text is from the <a href="https://en.wikipedia.org/wiki/Queens">Wikipedia Article on Queens.  </a></footer>
      </div>
    </div>
    <div class="accordion">
      <div class="accordion-header">
        <h3>Staten Island</h3>
      </div>
      <div class="accordion-item">
      <p>If each borough were ranked as a separate city, Staten Island would be the 44th most-populous in the United States. The East Shore is home to the 2.5-mile (4 km) F.D.R. Boardwalk, the fourth-longest boardwalk in the world.</p>
      <footer>This text is from the <a href="https://en.wikipedia.org/wiki/Staten_Island">Wikipedia Article on Staten Island.  </a></footer>
      </div>
    </div>
  </div>
</section>

<section class="filterable">
  <div class="filters">
    <button class="button active" data-type="all">all</button>
    <button class="button" data-type="Bronx">Bx</button>
    <button class="button" data-type="Brooklyn">Bk</button>
    <button class="button" data-type="Manhattan">M</button>
    <button class="button" data-type="Queens">Q</button>
    <button class="button" data-type="Staten Island">S</button>
  </div>
  <div class="showing">
    <p>Showing: <span id="show-text"></span></p>
  </div>

<div class="cards">
{%- for img in photos -%}
  {% include "image-card.njk" %}
{%- endfor -%}

</div>
</section>
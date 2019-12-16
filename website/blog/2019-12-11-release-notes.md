---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.102 Galeria i QR kody
---

## Wersja systemu 0.102.4 z dnia 11 grudnia 2019 roku,

## Galeria

Żeby ułatwić dodawanie zdjęć pomieszczeń, do aplikacji dodaliśmy nowy komponent galeria. Czyli wystarczy wysłać zejęcie do urządzenia a następnie umieścić je na karcie w aplikacji.
Jak to działa opisaliśmy w [Konfiguracja interfejsu użytkownika](/AIS-docs/docs/en/ais_app_ui_config.html#dodanie-własnej-karty)

<div style="text-align: center;">
<img src="/AIS-docs/img/en/blog/201912/galeria.png" alt="AIS Dom"/>
</div>

> <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M16.82,15.19L12.71,11.08C13.12,10.04 12.89,8.82 12.03,7.97C11.13,7.06 9.78,6.88 8.69,7.38L10.63,9.32L9.28,10.68L7.29,8.73C6.75,9.82 7,11.17 7.88,12.08C8.74,12.94 9.96,13.16 11,12.76L15.11,16.86C15.29,17.05 15.56,17.05 15.74,16.86L16.78,15.83C17,15.65 17,15.33 16.82,15.19Z" />
</svg> Od tej wersji do galerii można dodawać łatwo (z aplikacji) zdjęcia i wyświetlać je w interfejsie jako karty dla urządzeń. W kolejnej wersji opiszemy, w jaki sposób dodać automatyzację, która po wystąpieniu zdarzenia (np. dzwonek do drzwi) wykonuje zdjęcie kamerą lub nagrywa krótki filmik i wyświetlić go na telewizorze, lub wysłać powiadomienie.

<div style="text-align: center;">
<img src="/AIS-docs/img/en/blog/201912/galeria2.png" alt="AIS Dom"/>
</div>


## Kreator i skanowanie identyfikatora bramki

W najnowsze wersji naszej aplikacji mobilnej dodaliśmy [konfigurację ustawień aplikacji mobilej przy pomocy kreatora](/AIS-docs/docs/en/ais_app_android_dom.html#konfiguracja-za-pomocą-kreatora).

<img src="/AIS-docs/img/en/frontend/ais_dom_wizard_0_mob_apk.png" alt="AIS Dom" width="40%"/>


Dodaliśmy też możliwość zeskanowania aparatem kodu QR z identyfikatorem bramki. 

> <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z" />
</svg> Jeżeli w parametrach połączenia z bramką, podamy identyfikator bramki (a nie adres URL), to aplikacja sama będzie w stanie sama ustalić możliwe połączenie z bramką (lokalne lub przez tunel). Wyjaśniamy jak takie łączenie działa w [dokumentacji aplikacji AIS dom](/AIS-docs/docs/en/ais_app_android_dom.html).


Skanowanie identyfikatora bramki dodaliśmy też do naszego [Panelu Integratora](https://powiedz.co/ords/f?p=DOM1) co powinno ułatwić dodawanie konta

![Asystent](/AIS-docs/img/en/blog/qr_code_web.png)


## Nowe okno konwersacji w przeglądarce

W aplikacji webowej, z każdego widoku można teraz wywołać konwersację z Asystentem w przeglądarce (wybierając ikonkę chat na górze po prawej stronie).

Ponieważ można komendy mówić lub wpisywać zmieniliśmy ikonkę z mikrofonu na ikonkę chat/pogawędka:
<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    <path fill="#FF9800" d="M15,4V11H5.17L4,12.17V4H15M16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12V3A1,1 0 0,0 16,2M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
</svg>

<div style="text-align: center;">
<img src="/AIS-docs/img/en/blog/201912/new_conversation.png" alt="AIS Dom" width="80%"/>
</div>


## Dostosuj swój interfejs!

Odblokowujemy pierszą stronę (default_view) do edycji bo przecież każdy dom jest unikalny :)
Od wersji 0.102 dostarczamy i aktualizujemy dwa widoki **Audio** i **Jednostki**


* W widoku **Audio** dostarczamy odtwarzacz oraz darmową kolekcję treści audio 
* W widoku **Jednostki** automatycznie wypełniamy karty pozycjami spełniającymi określone kryteria, w ten sposób podpowiadamy jak możesz tworzyć własne karty. Sprawdz konfigurację kart na tym widoku i ją kopiuj do własnych widoków.

W instrukcji wyjaśniamy [jak włączyć tryb konfiguracji](/AIS-docs/docs/en/ais_app_ui_config.html).

![Asystent](/AIS-docs/img/en/blog/201912/lovelace_custom.png)


> <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M16.82,15.19L12.71,11.08C13.12,10.04 12.89,8.82 12.03,7.97C11.13,7.06 9.78,6.88 8.69,7.38L10.63,9.32L9.28,10.68L7.29,8.73C6.75,9.82 7,11.17 7.88,12.08C8.74,12.94 9.96,13.16 11,12.76L15.11,16.86C15.29,17.05 15.56,17.05 15.74,16.86L16.78,15.83C17,15.65 17,15.33 16.82,15.19Z" />
</svg> Pracujemy nad tym, żeby dwa ostatnie nasze widoki **Audio** i **Jednostki** też przenieść do menu aplikacji - docelowo wszystkie widoki będą odblokowane do edycji.


## Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2019/11/20/release-102/" target="_blank">0.102.3</a>

Wraz z nowym edytorem scen dostępnym z aplikacji, dzięki któremu można zapisać bieżący status urządzeń jako scenę, a następnie aktywować ją komendą głosową [Uruchamianie automatyzacji
](/AIS-docs/docs/en/ais_app_assistent_commands.html#uruchamianie-automatyzacji)

```text
'Uruchom {nazwa automatyzacji}'
lub
'Automatyzacja {nazwa automatyzacji}'
```

> <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M13,2V4C17.39,4.54 20.5,8.53 19.96,12.92C19.5,16.56 16.64,19.43 13,19.88V21.88C18.5,21.28 22.45,16.34 21.85,10.85C21.33,6.19 17.66,2.5 13,2M11,2C9.04,2.18 7.19,2.95 5.67,4.2L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.24,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.06,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37H7.06M13,13V7H11V13H13M13,17V15H11V17H13Z" />
</svg> Aby włączyć dodawanie i edycję scen z aplikacji należy postępować wg opisu z dokumentacji [Home Assistant](https://www.home-assistant.io/docs/scene/editor/). Bramki, które będziemy wysyłali z wersją > 0.102 będą miały edytor scen już automatycznie włączony.


![Asystent](/AIS-docs/img/en/blog/201912/scene_editor.png)


## Discourse! 

Na prośbę użytkowników dodamy możliwość komentarzy pod postami i być może powstanie z tego jakieś forum - jeżeli będą chętni, żeby prowadzić na nim dyskusję i pomagać innym. Szczegóły już niebawem.

![Discourse](/AIS-docs/img/en/blog/201912/Discourse.png)


----
Zapraszamy do aktualizacji! I
AI-Speaker 12/2019


<div id='discourse-comments'></div>

<script markdown="0">
  DiscourseEmbed = { discourseUrl: 'https://ai-speaker.discourse.group/',
                     discourseEmbedUrl: 'https://sviete.github.io/AIS-docs/blog/2019/12/11/release-notes.html' };
  (function() {
    var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
    d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
  })();
</script>
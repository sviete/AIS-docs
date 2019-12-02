---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.102 QR kody
---

## Wersja systemu 0.102.x z dnia 11 grudnia 2019 roku,

> Na [kanale beta](/AIS-docs/docs/en/ais_gate_faq_hass_compatibility.html#harmonogram-wydań-asystenta-domowego) pracujemy nad nową wersją systemu, która na kanale stabilnym **zostanie wydana 11 grudnia** 2019 roku 🥳


## Skanowanie identyfikatora bramki

W najnowsze wersji naszej aplikacji mobilnej dodaliśmy konfigurację ustawień za pomocą kreatora oraz skanowanie identyfikatora bramki.

![Asystent](/AIS-docs/img/en/frontend/ais_dom_wizard_2_mob_apk.webp)

Dzięki zeskanowaniu identyfikatora aplikacja sama będzie w stanie sama ustalić możliwe połączenie z bramką (lokalne lub przez tunel), wyjaśniamy jak to działa w [dokumentacji aplikacji AIS dom](/AIS-docs/docs/en/ais_app_android_dom.html).

![Asystent](/AIS-docs/img/en/frontend/apk_connection_diagram.png)


Skanowanie identyfikatora bramki dodaliśmy też do naszego panelu integratora https://powiedz.co/ords/f?p=DOM1 co powinno ułatwić dodawanie konta

![Asystent](/AIS-docs/img/en/blog/qr_code_web.png)


## Nowe okno konwersacji w przeglądarce

Z każdego widoku można teraz wywołać konwersację z Asystentem w przeglądarce (wybirając ikonkę chat na górze po prawej stronie).
Ponieważ można komendy mówić lub wpisywać zmieniliśmy ikonkę z mikrofonu na ikonkę chat/pogawędka:
<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    <path fill="#FF9800" d="M15,4V11H5.17L4,12.17V4H15M16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12V3A1,1 0 0,0 16,2M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
</svg>

![Asystent](/AIS-docs/img/en/blog/201912/new_conversation.png)



## Dostosuj swój interfejs!

Odblokowujemy pierszą stronę (default_view) do edycji bo przecież każdy dom jest unikalny :)
Od wersji 0.102 dostarczamy i aktualizujemy dwa widoki **Audio** i **Jednostki**

W instrukcji wyjaśniamy [jak włączyć tryb konfiguracji](https://sviete.github.io/AIS-docs/docs/en/ais_app_ui_config.html).

![Asystent](/AIS-docs/img/en/blog/201912/lovelace_custom.png)

## Edytor scen

![Asystent](/AIS-docs/img/en/blog/201912/scene_editor.png)


## Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2019/11/20/release-102/" target="_blank">0.102.x</a>




----
Zapraszamy do aktualizacji!
AI-Speaker 12/2019

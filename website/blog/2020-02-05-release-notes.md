---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.104.5 Słucham Cię
---


# Słucham Cię :)

<img src="/AIS-docs/img/en/blog/202002/ai-speaker.png" style="float: left; margin-right: 10px; max-width:50%;"/>

"Słucham Cię" to motto naszego projektu. Chcemy, żeby to nie był tylko slogan, ponieważ staramy się słuchać potrzeb i opinii naszych Klientów.

W tej wersji rozpoczynamy obsługę "słowa klucza" (słowa aktywującego mikrofon) oraz wprowadzamy bardziej zaawansowaną obsługę odtwarzaczy dodanych do Asystenta domowego.

<br><br>

## Wykrywanie słowa kluczowego

Wprowadzamy (na początek do naszej aplikacji na system Android a docelowo do wszystkich naszych aplikacji), **możliwość włączenia wykrywania słowa kluczowego** - mechanizm wyzwalający rejestrowanie polecenia głosowego.

<img src="/AIS-docs/img/en/blog/202002/porcupine.png" style="float: left; margin-right: 10px; max-width:60%;"/>

Po testach zdecydowaliśmy się zastosować bardzo dokładny i lekki silnik aktywujący [Porcupine](https://picovoice.ai/). O wyborze tego rozwiązania zadecydowały jego cechy:
- Użycie do trenowania głębokich sieci neuronowych przeszkolonych w rzeczywistych sytuacjach.
- Kompaktowy i wydajny. Może pracować z tak małą jak 20 KB RAM.
- Międzyplatformowy. Jest zaimplementowany w ANSI C. Producent wspiera wiele platform: Raspberry Pi, Beagle Bone, Android, iOS, watchOS, Linux (x86_64), Mac, Windows, WebAssembly.
- Skalowalny. Może wykrywać wiele poleceń głosowych jednocześnie bez dodatkowego obciążenia procesora / pamięci.
- Częściowo otwarty - mamy do dyspozycji zestaw predefiniowanych "wyrażeń aktywujących" na różne platformy za darmo.



To jest nasza aplikacja testowa do wykrywania słów aktywujących komendę, która działa na urządzeniach z Androidem.

https://github.com/sviete/AIS-hotword


<img src="/AIS-docs/img/en/blog/202002/ais_hot_word.png" style="max-width:80%;"/>


> Rozwiązanie to na początku jest wbudowane w naszą aplikację dostępną w Google Play.
> Aktywacja mikrofonu będzie wymagała świadomego włączenia przez użytkownika. O tym, że mikrofon jest włączony, informujemy stosownym powiadomieniem. **Rozwiązanie jest 100% offline - działa bez połączenia z Internetem - słuchamy Cię, ale nie podsłuchujemy!**



<img src="/AIS-docs/img/en/blog/202002/ais_hot_word_1.png" style="float: left; margin-right: 10px; max-width:30%;"/>

Na początek dostarczymy kilka słów aktywujących do wyboru, są to wytrenowane zwroty dostępne na licencji Apache License 2.0, dzięki czemu możemy ich użyć w naszym projekcie.


Umożliwimy też dostosowanie czułości nasłuchiwania do własnych potrzeb.

Ta funkcjonalność w połączeniu z odtwarzaczem i rozkładem pomieszczeń (floor plan) pozwoli na łatwe zbudowanie panelu do sterowania naszym domem - wystarczy na tablecie zainstalować naszą darmową aplikację :)

[<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    <path fill="#ff9900" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
</svg>](https://play.google.com/store/apps/details?id=pl.sviete.dom&hl=en)

Docelowo mamy ambicję, by zastosować własne słowo aktywujące, które będzie kojarzone z naszą marką. Z tego, co się orientujemy, będzie to pierwszy tego typu projekt w Polsce, który zajmie trochę czasu i zasobów. Na tą chwilę nie podajemy terminów.


Więcej szczegółów jak to działa w dokumentacji [Dotykowy panel sterowania](/AIS-docs/docs/en/ais_app_android_dom_tablet)


![Przekierowanie mediów](/AIS-docs/img/en/frontend/apk_hot_word_options.png)


<br><br><br>

## Odtwarzacze

Dodaliśmy możliwość bardziej zaawansowanej obsługi odtwarzaczy. Poza wbudowanym odtwarzaczem mediów, który dostarczamy na urządzeniu (wraz ze skonfigurowanymi serwisami dostarczającymi media do odtwarzania) mamy teraz możliwość:

- przekierowania mediów na inne odtwarzacze:

![Przekierowanie mediów](/AIS-docs/img/en/frontend/player_redirect.png)


- grupowanie odtwarzaczy:

![Grupowanie odtwarzaczy](/AIS-docs/img/en/frontend/player_grup.png)


- wysyłanie tekstu do przeczytania na grupę głośników (tylko jeżeli głośnik posiada mechanizm TTS)

![Wysyłanie tekstu na grupę głośników](/AIS-docs/img/en/frontend/player_tts.png)



Więcej szczegółów jak to działa w dokumentacji [Odtwarzacze](/AIS-docs/docs/en/ais_app_player.html)


Dodatkowo telefon/tablet/TvBox z systemem Android może być teraz też odtwarzaczem, możesz też wysyłać do niego powiadomienia głosowe. Wystarczy zainstalować naszą darmową aplikację. Z aplikacji możesz też teraz łatwo sterować mediami na bramce z innego urządzenia (telefonu).


[<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    <path fill="#ff9900" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
</svg>](https://play.google.com/store/apps/details?id=pl.sviete.dom&hl=en)


![Sterowanie mediami na bramce z telefonu](/AIS-docs/img/en/frontend/mob_notification_media.png)

Więcej szczegółów jak to działa w dokumentacji [Sterowanie mediami na bramce z telefonu](/AIS-docs/docs/en/ais_app_android_dom.html#sterowanie-odtwarzaczem-na-bramce)


## Nowa wersja naszej aplikacji na zegarki z WearOS

Zmieniliśmy sposób komunikacji z bramką, dzięki czemu otrzymujemy powiadomienia głosowe/tekstowe o wykonaniu akcji nie tylko na bramce, ale też na kliencie, który wysyła komendę.
W skrócie wygląda to teraz tak:


<img src="/AIS-docs/img/en/blog/202002/watch_1.jpg" style="float: left; max-width:50%;"/>
<img src="/AIS-docs/img/en/blog/202002/watch_2.jpg" style="float: right; max-width:50%;"/>

<!--truncate-->


----------------------------------------------

## Zigbee2MQTT

Łatwiejsza zmiana nazwy urządzenia- wystarczy kliknąć węzeł urządzenia na mapie, aktualna nazwa zostanie automatycznie wpisana do formularza zmiany nazwy.

<iframe width="560" height="315"  src="https://www.youtube.com/embed/jYW2V8zgcDI" frameborder="0" allowfullscreen></iframe>


## Generowanie stylów CSS dla kart (floor plan)

Do integracji [Galeria](/AIS-docs/docs/en/next/ais_app_integration_gallery.html) dodaliśmy pierwszą wersję narzędzia ułatwiającego generowanie stylów CSS dla kart (w celu ich rozmieszczenia w rozkładzie pomieszczeń). Celem jest stworzenie narzędzia ułatwiającego tworzenie interaktywnego rzutu pomieszczenia na bazie zdjęcia projektu.

Docelowo planujemy zrobić to bardziej na zasadzie "drag & drop", tak żeby każdy mógł rozmieścić swoje urządzenia na planie i nimi sterować.
Można zapoznać się ze zarysem funkcjonalności zaprezentowanej na forum: https://ai-speaker.discourse.group/t/rzut-podlogi-floor-plan/155

![Floor plan](/AIS-docs/img/en/blog/202002/floor_plan.png)


## Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2020/01/15/release-104/" target="_blank">0.104.3</a>

Bardzo podoba nam się ulepszona obsługa encji i możliwość usuwania niedostępnych pozycji bezpośrednio z interfejsu użytkownika.

![Asystent](/AIS-docs/img/en/blog/202002/ha_entity_del.png)


----
Zapraszamy do aktualizacji i [komentowania na forum :)](https://ai-speaker.discourse.group/)
AI-Speaker 02/2020
----


<div id='discourse-comments' style='height: 600px; overflow-y: scroll;'>
<style>
iframe#discourse-embed-frame {
    height: 700px !important;
}
</style>
</div>

<script markdown="0">
  DiscourseEmbed = { discourseUrl: 'https://ai-speaker.discourse.group/',
                     discourseEmbedUrl: 'https://sviete.github.io/AIS-docs/blog/2020/02/05/release-notes.html' };
  (function() {
    var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
    d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
  })();
</script>

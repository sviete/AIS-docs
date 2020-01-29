---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.103 Hot Word
---

## Wersja systemu 0.104.x z dnia 5 lutego 2020 (do potwierdzenia)

> Na kanale beta prowadzimy pracę nad nową wersję Asystenta domowego, oznaczoną numerem 0.104.x. Wersja ta na kanale stabilnym pojawi się prawdopodobnie 5 lutego 2020 (data do potwierdzenia).
> Jeśli chcesz szybciej uzyskać dostęp do nowych funkcji, **ale nie przejmujesz się ryzykiem wystąpienia okazjonalnego błędu**, możesz w każdej chwili przełączyć się na kanał beta - opcja dostępna jest w [portalu integratora](/AIS-docs/docs/en/ais_dom_cloud_gates.html)



# Słucham Cię :)

Słucham Cię to motto naszego projektu, staramy się, żeby było to nie tylko slogan i staramy się słuchać potrzeb i opinii naszych Klientów.
W tej wersji rozpoczynamy obsługę "słowa klucza" (słowa aktywującego mikrofon) oraz wprowadzamy bardziej zaawansowaną obsługę odtwarzaczy dodanych do Asystenta domowego.


## Wykrywanie słowa kluczowego

Wprowadzamy (na początek do naszej aplikacji na system Android a docelowo do wszystkich naszych aplikacji, **możliwość włączenia wykrywania słowa kluczowego** - mechanizm wyzwalający rejestrowanie polecenia głosowego.

<img src="/AIS-docs/img/en/blog/202002/porcupine.png" style="float: left; margin-right: 10px; max-width:60%;"/>

Po testach zdecydowaliśmy się zastosować bardzo dokładny i lekki silnik aktywujący [Porcupine](https://picovoice.ai/). O wyborze tego rozwiązania zadecydowały jego cechy:
- Użycie do trenowania głębokich sieci neuronowych przeszkolonych w rzeczywistych sytuacjach.
- Kompaktowy i wydajny. Może pracować z tak małą jak 20 KB RAM.
- Międzyplatformowy. Jest zaimplementowany w ANSI C. Producent wspiera wiele platform: Raspberry Pi, Beagle Bone, Android, iOS, watchOS, Linux (x86_64), Mac, Windows, WebAssembly).
- Skalowalny. Może wykrywać wiele poleceń głosowych jednocześnie bez dodatkowego obciążenia procesora / pamięci.
- Częściowo otwarty - mamy do dyspozycji zestaw predefiniowanych wyrażeń "aktywujących" na różne platformach za darmo.



To jest nasza aplikacja testowa do wykrywania słów aktywujących komendę, która działa na urządzeniach z Androidem.

https://github.com/sviete/AIS-hotword


<img src="/AIS-docs/img/en/blog/202002/ais_hot_word.png" style="max-width:80%;"/>


> Rozwiązanie to na początku będzie wbudowane w naszą aplikację dostępną w Google Play.
> Aktywacja mikrofonu będzie wymagała świadomego włączenia przez użytkownika, o tym, że mikrofon jest włączony, informujemy stosownym powiadomieniem. **Rozwiązanie jest 100% offline - działa bez połączenia z Internetem - słuchamy Cię, nie podsłuchujemy!**



<img src="/AIS-docs/img/en/blog/202002/ais_hot_word_1.png" style="float: left; margin-right: 10px; max-width:40%;"/>

Na początek dostarczymy kilka słów aktywujących do wyboru, są to wytrenowane zwroty dostępne na licencji Apache License 2.0, dzięki czemu możemy je użyć w naszym projekcie.


Umożliwymi też dostosowanie czułości nasłuchiwania do własnych potrzeb.

<img src="/AIS-docs/img/en/blog/202002/ais_hot_word_2.png" style="max-width:50%;"/>


----------------------
Docelowo mamy ambicję, by zastosować własne słowo aktywujące, które będzie kojarzone z naszą marką. Z tego, co się orientujemy, będzie to pierwszy tego typu projekt w Polsce, który zajmie trochę czasu i zasobów. Na tą chwilę nie podajemy terminów.


## Odtwarzacze

<img src="/AIS-docs/img/en/blog/202002/ais_hot_word_2.png" style="max-width:60%;"/>



## Generowanie styli dla kart (floor plan)


<!--truncate-->

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

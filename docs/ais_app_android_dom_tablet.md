---
title: "Dotykowy panel sterowania"
sidebar_label: Panel sterowania
---


## Wprowadzenie

Po zainstalowaniu naszej aplikacji na tablet z systemem Android możesz otrzymać funkcjonalność "Dotykowego panelu / Smart panel" do sterowania automatyką domową i multimediami.
Aplikacja jest czymś w rodzaju ramki/przeglądarki/interfejsu do [aplikacji internetowej](/AIS-docs/docs/en/ais_app_index.html) działającej na bramce.


## Instalacja

Aplikacja dostępna jest za darmo (bez reklam, mikropłatności itp) w sklepie [Google Play](https://play.google.com/store/apps/details?id=pl.sviete.dom) pod nazwą AIS dom. Możesz zeskanować telefonem poniższy kod, by przejść do instalacji aplikacji w Google Play:

![Google Play](/AIS-docs/img/en/frontend/barcode_go_to_apk_in_google_play.png)


Kod źródłowy aplikacji dostępny jest w naszym [publicznie dostępnym repozytorium](https://github.com/sviete/AIS-dom)
Podpisane wersje publikujemy też na naszym [serwisie ze składowymi systemu](https://powiedz.co/ota/)



## Konfiguracja za pomocą kreatora

Analogicznie jak w [Aplikacji na telefon](AIS-docs/docs/en/ais_app_android_dom.html#konfiguracja-za-pomocą-kreatora)


## Konfiguracja ustawień aplikacji związanych z panelem

W każdej chwili możemy przejść do ustawień aplikacji nasiskając przycisk z trzema kropkami po lewej stronie na dolnej belce w aplikacji <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
</svg>


![Smart glass ustawienia](/AIS-docs/img/en/frontend/app_smart_glass_go_to_settings.png)


![Smart glass ustawienia](/AIS-docs/img/en/frontend/app_smart_glass_go_to_settings_1.png)

W ustawieniach związanych z "Dotykowym panelem sterowania" mamy następujące opcje:

### Odtwarzacz audio 

Ta ocpcja pozwala na uruchomienie na urządzeniu usługi odtwarzacza audio, dzięki czemu można przesyłać treści audio z bramki do "Panelu sterowania" oraz zdalnie sterować odtwarzaczem na bramce z poziomu ekranu powiadomień na "Panelu sterowania".
Po włączeniu tej opcji na "Panelu sterowania" pojawi nam się powiadomienie o działającym serwisie:

![Smart glass ustawienia](/AIS-docs/img/en/frontend/app_smart_glass_go_to_settings_2.png)


W aplikacji działającej na bramce w zakładce **Audio** automatycznie doda się nowy odtwarzacz (nasz panel sterowania), do którego możemy wysyłać treści audio oraz tekst do przeczytania:

![Smart glass ustawienia](/AIS-docs/img/en/frontend/app_smart_glass_go_to_settings_3.png)

> Uwaga. "Panel sterowania" będzie otrzymywał powiadomienia o odtwarzanych treściach na bramce tylko w naszej sieci lokalnej - gdy będzie połączony do tej samej sieci co bramka. Działa to podobnie jak sterowanie ChromeCast.

### Powiększenie aplikacji

Ta opcja pozwala dostosować/wyskalować wielkość [aplikacji internetowej Asystent domowy](/AIS-docs/docs/en/ais_app_index.html) w naszym panelu sterowania.  
Działa to analogicznie jak funkcjonalność powiększania stron w przeglądarce Internetowej (bo nasza aplikacja działa na zasadzie takiej przeglądarki internetowej). Celem tej funkcjonalności jest lepsze wyświetlanie planu mieszkania w aplikacji.

![Smart glass ustawienia](/AIS-docs/img/en/frontend/app_smart_glass_go_to_settings_4.png)


### Nasłuchiwanie wyrażenia aktywującego

![Smart glass ustawienia](/AIS-docs/img/en/frontend/app_smart_glass_go_to_settings_5.png)

Jeśli włączysz tą opcję to uruchomisz w "Panelu sterowania" usługę mikrofonu nasłuchującego wybrane wyrażenie (domyślnie słowo Avokado). Jest to tak zwane wyrażenie aktywujące rejestrowanie i przetwarzanie komendy, zwane też "key word" lub "trigger word". Możesz też dostosować czułość nasłuchiwania wyrażenia aktywującego. Do wykrywania wyrażeń aktywujących używamy bardzo dokładnego i lekkiego silnika Porcupine. 

>  **Uwaga:** Parametr czułości nasłuchiwania. Wyższa wartość czułości obniża wskaźnik pominięć **ale kosztem wzrostu częstości fałszywych alarmów**. Aby uzyskać więcej informacji dotyczących tego jak to działa warto odwiedzić stronę firmy, która dostarcza to rozwiązanie: https://picovoice.ai/

Zmodyfikowaliśmy zasadę działania Asystenta domowego, w przypadku gdy komenda pochodzi z urządzenia z włączonym nasłuchiwaniem słowa aktywującego to staramy się być bardziej dosłownym "mniej się domyślać" o co chodziło użytkownikowi. Ma to na celu zminimalizowanie wykonywania niepotrzebnych komend w przypadku omyłkowego włączenia nasłuchiwania komendy. Jednak rozwiązanie jest jeszcze na bardzo wczesnym etapie, dlatego zalecamy stosować tę usługę pod kontrolą (wyłączać tę usługę na noc), żeby uniknąć niepotrzebnych wykonań komend i niespodziewanego uruchomienia odtwarzacza audio czy innych domowych urządzeń.

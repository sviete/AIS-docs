---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.103 Zigbee
---

## Wersja systemu 0.103.x z dnia 15 stycznia 2020 (do potwierdzenia),

> Na kanale beta **prowadzimy pracę nad wersją 0.103**. 🧰 🧩 Wersja ta ukaże się na kanale stabilnym prawdopodobnie dnia 15 stycznia 2020 roku 🧨🧨🧨 🥳.


## Zigbee

> Opis w przygotowaniu

<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M4.06,6.15C3.97,6.17 3.88,6.22 3.8,6.28C2.66,7.9 2,9.87 2,12A10,10 0 0,0 12,22C15,22 17.68,20.68 19.5,18.6L17,18.85C14.25,19.15 11.45,19.19 8.66,18.96C7.95,18.94 7.24,18.76 6.59,18.45C5.73,18.06 5.15,17.23 5.07,16.29C5.06,16.13 5.12,16 5.23,15.87L7.42,13.6L15.03,5.7V5.6H10.84C8.57,5.64 6.31,5.82 4.06,6.15M20.17,17.5C20.26,17.47 20.35,17.44 20.43,17.39C21.42,15.83 22,14 22,12A10,10 0 0,0 12,2C9.22,2 6.7,3.13 4.89,4.97H5.17C8.28,4.57 11.43,4.47 14.56,4.65C15.5,4.64 16.45,4.82 17.33,5.17C18.25,5.53 18.89,6.38 19,7.37C19,7.53 18.93,7.7 18.82,7.82L9.71,17.19L9,17.95V18.06H13.14C15.5,18 17.84,17.81 20.17,17.5Z" />
</svg>


## Społecznościowe forum AI-Speaker!

Na prośbę użytkowników dodajemy możliwość komentarzy pod postami i być może powstanie z tego forum -jeżeli będą chętni, żeby prowadzić na nim dyskusję i pomagać innym użytkownikom.
Niebawem zaprosimy wszystkich do dodawania konta i zachęcimy do brania udziału w dyskusjach, już teraz można zapoznać się z zasadami, które zaproponowaliśmy na początek: https://ai-speaker.discourse.group/t/witamy-na-spolecznosciowym-forum-ai-speaker/28

Chcemy pomóc zbudować to miejsce i oddać je społeczności - użytkownicy, którzy zaangażują się i będą publikować, zostaną automatycznie promowani na moderatorów / administratorów.

Jeśli masz projekt związany z Asystentem domowym, który wykonałeś i masz ochotę go opisać dla innych to będziemy bardzo wdzięczni 🥰
Wszystkich którzy mają ochotę opublikować swój projekt zapraszamy do sekcji **Projekty** https://ai-speaker.discourse.group/c/projekty im więcej ciekawych rzeczy opublikujemy tym większa szansa, że to miejsce będzie żyło i się rozwijało.



![Discourse](/AIS-docs/img/en/blog/202001/discourse_manifest.png)


<!--truncate-->

## Standaryzacja portów

Usługi działające na bramce będą dostepne na tych samych portach co dotychczas a dodatkowo na standardowych (dobrze znanych) portach.
Jak to dokładnie działa wyjaśniamy [na forum](https://ai-speaker.discourse.group/t/dlaczego-porty-uslug-dzialajacych-na-bramce-sa-niestandardowe/57)

Nazwa      | Protokół | Porty | Komenda/URL                                               | Opis
----       | ----     | ------- | -------                                                | -----------
 Aplikacja | http     | **80** / `8180`  | [http://ais-dom.local](http://ais-dom.local) | serwer http
 FTP       | ftp      | **21** / `1024`  | [ftp://ais-dom.local](ftp://ais-dom.local)   | serwer ftp
 SSH       | ssh      | **22** / `8022`  | ```ssh ais-dom```         | serwer ssh
 MQTT      | mqtt     | **1883**  | ```mosquitto_sub -h ais-dom.local -t '#'```     | serwer mqtt

## Kopia zapasowa ustawień

W konfiguracji oprogramowania bramki dodaliśmy opcję wykonywania i przywracania [kopii zapsowej konfiguracji bramki](/AIS-docs/docs/en/next/ais_bramka_configuration_software.html#kopia-zapasowa-konfiguracji)

W tym miejscu możesz, sprawdzić poprawność ustawień bramki, wykonać jej kopię i przesłać ją do portalu integratora. Ponieważ konfiguracja może zawierać hasła i tokeny dostępu do usług, zalecamy zaszyfrować ją hasłem. Gdy kopia jest zabezpieczona hasłem, to można ją otworzyć/przywrócić tylko po podaniu hasła.

![Oprogramowanie bramki](/AIS-docs/img/en/bramka/config_ais_dom_section1_2.png)


## Audio w osobnym panelu

Widok audio przenieśliśmy do osobnego panelu w aplikacji.

![Audio panel](/AIS-docs/img/en/blog/202001/audio_new_tab.png)

Od tej wersji będziemy dostarczali/blokowali tylko jeden widok na którym prezentujemy przykładowe karty.

![Audio panel](/AIS-docs/img/en/blog/202001/default_view.png)


## Rozpoznwanie urządzeń USB

Na bramce dostarczamy działającą w tle usługę USB, której celem jest wykrywanie zmian stanu urządzeń USB (połączenie i rozłączanie). Usługa monitoruje zdarzenia za pomocą mechanizmu inotify dostępnego w systemie Linux, następnie zmienia je w format zrozumiały dla Asystenta domowego. Dzięki temu Asystent domowy powiadamia komunikatem głosowym o tym, jakie urządzenie zostało dodane i jeżeli obsługa danego urządzenia jest wspierana, to Asystent wykona dalsze akcje związane z obsługą danego urządzenia, takie jak:
- dodanie dysków
- uruchomienie karty audio
- uruchmienie serwsisu do obsługi Zigbee

Więcej w dokumentacji [USB rozpoznawanie urządzeń](/AIS-docs/docs/en/ais_app_integration_usb.html)

![HID USB](/AIS-docs/img/en/bramka/usb_integration_zigbee.png)


## Dodawanie zdalnych dysków FTP

W odpowiedzi na pomysł obsługi dysków sieciowych zgłoszony na forum [Integracja z dyskiem sieciowym w sieci lokalnej](https://ai-speaker.discourse.group/t/integracja-z-dyskiem-sieciowym-w-sieci-lokalnej/94) dodaliśmy obsługę FTP i opisaliśmy technicznie jak działa Rclone które dostarczamy na bramce do obsługi dysków zdalnych [Dyski sieciowe - Rclone](https://ai-speaker.discourse.group/t/dyski-sieciowe-rclone/97)

![FTP1](/AIS-docs/img/en/blog/202001/rclone_ftp.png)
![FTP2](/AIS-docs/img/en/blog/202001/rclone_ftp2.png)

## Autentykacja PIN w aplikacji

W przypadku systemu Wear OS najłatwiej wykonać konfigurację z bramką za pomocą jednorazowego kodu PIN.

Proces jest bardzo prosty, wystarczy w sekcji **Szyfrowany tunel** wybrać opcję **GENERUJ KOD PIN**

![Automatyzacje](/AIS-docs/img/en/frontend/ais_dom_wizard_4_wear_apk.png)

następnie kod który się pojawi przepisać w aplikacji Wear (masz na to 2 minuty)

![Automatyzacje](/AIS-docs/img/en/frontend/ais_dom_wizard_5_wear_apk.png)

Całość opisana jest w [AIS dom Wear OS](/AIS-docs/docs/en/ais_app_android_dom_wear.html)


## Rozbudowa nawigacji pilotem

Do pozycji menu **Dom** dodaliśmy grupę **Sceny**, w której znajdują się wszystkie zdefiniowane sceny w systemie i można je uruchamiać pilotem.

Oraz grupę **Urządzenia**, w tej grupie mamy teraz następujące pozycje:
- Przełączniki
- Światła
- Czujniki
- Termostaty
- Zasłony
- Odkurzacze
- Zamki
- Kamery
- Wntylatory


## Home Assistant

Najnowszy (stabilny) Home Assistant <a href="https://www.home-assistant.io/blog/2019/12/11/release-103/" target="_blank">0.103.0</a>

Z ciekawych rzeczy, które bardzo nam się przydadzą, to możliwość definiowania/edycji automatyzacji z aplikacji w formacie YAML. Każdy pojedynczy wyzwalacz, warunek lub akcję można edytować jak YAML. Umożliwia to definiowanie bardzo skomplikowanych automatyzacji w edytorze automatyki i umożliwia szybkie kopiowanie części automatyzacji.


![Asystent](/AIS-docs/img/en/blog/202001/automatuon_yaml_editor.png)


----
Zapraszamy do aktualizacji i komentowania :)
AI-Speaker 01/2020
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
                     discourseEmbedUrl: 'https://sviete.github.io/AIS-docs/blog/2020/01/15/release-notes.html' };
  (function() {
    var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
    d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
  })();
</script>

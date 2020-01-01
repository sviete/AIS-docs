---
author: Jola AI-Speaker
authorURL: https://github.com/sviete
authorImageURL: https://avatars3.githubusercontent.com/u/43966761?s=460&v=4
title: Wersja systemu 0.103 Audio
---

## Wersja systemu 0.103.x z dnia 15 stycznia 2020 (do potwierdzenia),

> Na kanale beta **prowadzimy pracę nad wersją 0.103**. 🧰 🧩 Wersja ta ukaże się na kanale stabilnym prawdopodobnie dnia 15 stycznia 2020 roku 🧨🧨🧨 🥳.


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


## Kopia zapasowa ustawień

W konfiguracji oprogramowania bramki dodaliśmy opcję wykonywania i przywracania [kopii zapsowej konfiguracji bramki](/AIS-docs/docs/en/next/ais_bramka_configuration_software.html#kopia-zapasowa-konfiguracji)

W tym miejscu możesz, sprawdzić poprawność ustawień bramki, wykonać jej kopię i przesłać ją do portalu integratora. Ponieważ konfiguracja może zawierać hasła i tokeny dostępu do usług, zalecamy zaszyfrować ją hasłem. Gdy kopia jest zabezpieczona hasłem, to można ją otworzyć/przywrócić tylko po podaniu hasła.

![Oprogramowanie bramki](/AIS-docs/img/en/bramka/config_ais_dom_section1_2.png)


## Audio w osobnym panelu

Przenosimy widok audio do osobnego panelu w aplikacji...
> TODO - opis do uzupełniania

## Rozpoznwanie urządzeń USB

> TODO - opis do uzupełniania


## Dodawanie zdalnych dysków FTP

> TODO - opis do uzupełniania


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

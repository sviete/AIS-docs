---
author: Andrzej Raczkowski
authorURL: https://github.com/sviete
authorFBID: 1546384510
title: Monitorowanie instalacji fotowoltaicznej - Znaj swoją moc!
---

## Instalacja fotowoltaiczna z optymalizatorami


Przeszło 2 lata temu, pod koniec roku 2016 zdecydowaliśmy się na montarz instalacji fotowoltaicznej. Wcześniej czytałem o tym jak działa instalacja PV i dowiedziałem się, że w klasycznej instalacji moduły są połączone w szeregu z innymi modułami dlatego spadek prądu na jednym (np na skutek zacienienia) module przekłada się na spadek prądu na całym szeregu modułów. Ze wgledu na skomplikowaną połać dachową uznałem, że może to mieć znaczenie i w ramach obejścia tego problemu zastosowaliśmy panele fotowoltaiczne z optymalizatorami mocy.

> Optymalizator mocy ma za zadanie obciążyć moduł w sposób optymalny, czyli taki, w który w danych warunkach oświetlenia zapewni na wyjściu największą możliwą moc niezależnie do tego, jaki prąd i napięcie generują pozostałe moduły w szeregu.

Tak wyglądał dach w trakcie montarzu, jak widać nie jest to prosta powierzchnia.


![Aplikacja asystent domowy ogrzewanie](/AIS-docs/img/en/blog/201901/pv2.jpg)

Panele z optymaizatorami są droższe od tych bez optymalizatorów, koszt optymalizatora w moim przypadku wyniusł około 180zł na panel. 180 x 28 = 5040 zł więcej. Od początku zadawałem sobie pytnie czy taki wydatek się kiedykolwiek zwróci? Producent zapewnia, że to ma sens... ale ja postanowiłem monitorować pracę instalacji oraz produkję prądu z każdego panela żeby to sprawdzić :)

## Komponent PVOutput i czujniki w systemie Asystent domowy

Z pomocą przyszło mi API producenta oraz **Asystent domowy**. Podłączyłem się do API za pomocą własnego komponentu, w tej chwili można to już zrobić za pomocą oficjanlej integracji, szczegóły dla zainteresowanych pod tym adresem: <a href="https://www.home-assistant.io/components/sensor.pvoutput/" target="_blank">PVOutput Sensor</a>  
Integracja pozwala uzyskać szczegółowe informacje z instalacji fotowoltaicznej w systemie Asystent domowy. Monitorowane parametry instalacji dostępne są w systeie w formie czujników, w ten sposób możemy mieć łatwy wgląd w bieżącą produkcję, produkcję z ostatniego dnia, tygodnia, miesiąca, roku oraz całkowitą produkcję od początku działania instalacji.


![Asystent domowy PV Ikony](/AIS-docs/img/en/blog/201901/pv_icons.png)


## Pytanie o status czujników - Znaj swoją moc!

Oczywiście w naszym systemie **Asystent domowy** o status każdego czujnika możemy też zapytać i asystentka odpowie nam jaka jest jego wartość. Czyli tak samo jak o temperaturę w pokoju możemy zapytać o to jaka jest produkcja prądu, szczegółowo jest to opisane w dokumentacji [Komendy - status czujników](/AIS-docs/docs/en/ais_app_assistent_commands.html#status-czujnikow). Przykładowo możemy zapytać:


```text
 "Jaka jest aktualna produkcja prądu?"
 ```

 ![Asystent domowy PV 6](/AIS-docs/img/en/blog/201901/pv6.png)


Informacje o statusie każdego czujnika są też logowane w bazie danych na urządzeniu, dzięki czemu łatwo możemy sprawdzić na wykresie jak kształtowała się produkcja w czasie. Wystarczy nacisnąć w aplikacji na czujnik żeby zobaczyć wykres jego wartości w czasie:

![Aplikacja asystent domowy PV](/AIS-docs/img/en/blog/201901/pv8.png)



## Czas na matematykę
Na koniec czas na matematykę i sprawdzenie czy wydane 5040zł na optymalizatory ma szanse się zwrócić?


![Aplikacja asystent domowy PV](/AIS-docs/img/en/blog/201901/pv4.png)

Z rysunku rozkładu paneli na dachu widać, że **cała instalacja wyprodukowała dotychczas 14.86 MWh**, najmocniejszy panel wyprodukował 601 KWh a najsłabszy 456 KWh.
Dla uproszczenia założę, że gdyby nie optymalizatory każdy panel wyprodukował by tyle samo co najsłabszy, czyli 456 KWh.

```text
456 KWh * 28 paneli = 12.77 MWh
12.77 MWh - tyle  wyprodukowała by instalacja bez optymalizacji

14.86 MWh - 12.77 MWh = 2.09 MWh
2.09 MWh - tyle mamy więcej prądu dzięki optymalizacji

2.09 MWh = 2090 KWh * 0.55zł = 1149.5 zł
1149.5 zł - tyle zaoszczędziliśmy pieniędzy dzięki optymalizacji w ciągu 2 lat

5040 / 1149.5 * 2 = 8.7 lat
8.7 lat - czas zwrotu inwestycji w optymalizatory
 ```

 ## Czy to się opłaca?
Każdy z nas ma swoją ekonomię i nie da się jednoznacznie odpowiedzieć na to pytanie. Słyszałem, że są firmy które nie robią inwestycji jeżeli nie zwrócą się one po 2 latach. Inwestycja w fotowoltaikę to na pewno inwestycja z myślą o dużo dalszej przyszłości :)

Z pewnością opłaca się monitorować i kontrolować pracę urządzeń w naszym domu, szczególnie gdy kupi się panele od niemieckiego producenta z 25 letnią gwarancją mocy ;)
Zadanie monitorowaia i kontorlowania chętnie ułatwi system Asystent domowy.
Samych słonecznych dni w 2019 roku :)





![Aplikacja asystent domowy ogrzewanie](/AIS-docs/img/en/blog/201901/pv1.jpg)

![Asystent domowy PV 7](/AIS-docs/img/en/blog/201901/pv7.png)

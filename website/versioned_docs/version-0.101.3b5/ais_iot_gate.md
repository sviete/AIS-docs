---
title: Wprowadzenie
sidebar_label: Wprowadzenie
id: version-0.101.3b5-ais_iot_gate
original_id: ais_iot_gate
---

Urządzenia z oprogramowaniem **AIS dom** w bardzo łatwy sposób można zintegrować z bramką **AIS dom**. Taka integracja umożliwia [łatwą konfigurację urządzenia]() oraz wykorzystanie [pełnych możliwości urządzenia](#możliwości-urządzenia-po-dodaniu-do-bramki).

## Dostęp do urządzeń AIS dom z aplikacji

Ustawienia Twoich urządzeń z oprogramowaniem AIS dom dostępne są po wybraniu z menu po lewej stronie opcji **Konfiguracja** a następnie drugiej opcji na liście **Konfiguracja urządzeń AIS dom**. Tak jak to pokazano na zdjęciu poniżej.

![Menu Konfiguracja urządzeń AIS dom](/AIS-docs/img/en/iot/iot_ais_dom_devices_menu.png)

### Producent AI-Speaker

W tabeli z urządzeniami AIS dom wyświetlamy wszystkie urządzenia działające na naszym [darmowym oprogramowaniu](/AIS-docs/docs/en/ais_iot_firmware_index.html) producentem jest **AI-Speaker**.


![Tabela z urządzeniami AIS dom](/AIS-docs/img/en/iot/iot_ais_dom_devices_table.png)


### Konfiguracja urządzenia

Po wybraniu urządzenia możemy je konfigurować. Dostępne opcje zależą od typu urządzenia, w przypadku Bramki RF 433 na tej stronie możemy nauczyć Asystenta kodów pilota radiowego (lub innego urządzenia wysyłającego kody radiowe o częstotliwości 433) i łatwo dodać przyciski wysyłające nauczone kody do aplikacji. Więcej w sekcji [Bramka RF 433](ais_iot_gate_device_rf433).


![RF 433](/AIS-docs/img/en/iot/iot_ais_dom_device_config.png)



## Możliwości urządzenia po dodaniu do bramki

Po dodaniu do bramki można:

- sterować urządzeniem głosowo:
wystarczy nazwać urządzenie np. "światło w sypialni" lub "podlewanie trawnika" a następnie powiedzieć "włącz światło w sypialni" lub "włącz podlewanie trawnika". Więcej w sekcji [Wbudowane komendy](/AIS-docs/docs/en/ais_app_assistent_commands.html).

- automatyzować sterowanie:
w aplikacji można w prosty sposób stworzyć reguły włączenia bądź wyłączenia urządzeń w zależności od obecności, pozycji słońca czy statusu innych urządzeń. Więcej w sekcji [Automatyzacja Asystenta domowego](/AIS-docs/docs/en/ais_bramka_automation.html)

- tworzyć sceny:
Sceny to definicja stanu, w których chcesz, aby były Twoje urządzenia. Na przykład w scenie, którą nazwiemy "romantyczna kolacja" można określić, że światło główne powinno być włączone, kinkiety powinny być przyciemnione i ma być odtwarzana romantyczna playlista ze Spotify. Podobnie możemy dodać scenę oglądanie filmu, w której rolety są zasłonięte światło główne wyłączone a telewizor odtwarza film z Netflix-a. 


- logować i analizować historię statusu urządzeń. W interfejsie użytkownika wyświetlamy wykresy pozwalające na sprawdzenie stanu urządzeń w czasie. Dzięki temu możemy monitorować np. zmiany temperatury w pokojach, historię odtwarzania audio oraz status wszystkich innych urządzeń zintegrowanych z bramką.

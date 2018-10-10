---
title: Widoki
sidebar_label: Widoki
id: version-0.79.5-ais_app_views
original_id: ais_app_views
---

Aby ułatwić nawigowanie po aplikacji karty(grupy elementów) w interfejsie użytkownika pogrupowane są w widokach.

## Domyślne widoki

Domyślnie w interfejsie użytkownika dostępnym z aplikacji mamy 7 widoków:

- Twój Dom
- Pogoda
- Wiadomości
- Audio
- Ustawienia
- Pomoc
- System (w tym widoku są dostępne zaawansowane ustawienia i informacje, docelowo widok ten nie będzie potrzebny/wyświetlany)

![Aplikacja asystent domowy](/AIS-docs/img/en/frontend/frontend-views.png)


## Tworzenie własnych widoków

>**Jeśli chcesz możesz sam tworzyć i zmieniać widoki** (zakładki w aplikacji), które mogą np. mieć nazwy "Pokój dzienny", "Łazienka", "Sypialnia" i zawierać pogrupowane urządzenia w poszczególnych pomieszczeniach znajdujących się w domu.



Widoki definiuje się w pliku konfiguracyjnym systemu.

Więcej technicznych informacji dostępnych jest na stronie projektu platformy Home Assistant, w zakładce [Komponenty -> Grupy: ](https://www.home-assistant.io/components/group/) https://www.home-assistant.io/components/group/



Przykład domyślnej konfiguracji Asystenta domowego:

`main_ais_groups.yaml`:

```yaml
group:
  default_view:
    name: Dom
    view: yes
    icon: mdi:home-outline
  pogoda:
    name: Pogoda
    view: yes
    icon: mdi:weather-partlycloudy
  news:
    name: Wiadomości
    view: yes
    icon: mdi:newspaper
  audio:
    name: Audio
    view: yes
    icon:  mdi:music
  settings:
    name: Ustawienia
    view: yes
    icon:  mdi:settings
  pomoc:
      name: Pomoc
      view: yes
      icon: mdi:help
  system:
      name: System
      view: yes
      icon: mdi:console
```

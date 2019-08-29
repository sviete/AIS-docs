---
title: "Automatyzacja Asystenta domowego"
sidebar_label: Automatyzacja
---

## Wprowadzenie

Po podłączeniu i skonfigurowaniu urządzeń nadszedł czas, aby dodać pierwszą automatyzację. W tym przewodniku pokazujemy jak stworzyć prostą regułę automatyzacji, która włącza oświetlenie, gdy zachodzi słońce.


## Przejście do automatyzacji

W aplikacji Asystent domowy otwórz menu (klikając ikonę w lewym górnym rogu) a następnie kliknij w konfigurację.

![Ekran z listą automatyzacji](/AIS-docs/img/en/bramka/automation1.png)

## Ekran z listą automatyzacji
Teraz kliknij na automatyzację. Jest to ekran z listą automatyzacji, z którego można zarządzać wszystkimi automatyzacjami w systemie.

![Przejście do automatyzacji](/AIS-docs/img/en/bramka/automation2.png)

## Definicja automatyzacji

Kliknij pomarańczowy przycisk w prawym dolnym rogu, aby utworzyć nową automatyzację. Zostanie wyświetlony ekran do konfiguracji automatyzacji.

![Dodanie nowej automatyzacji](/AIS-docs/img/en/bramka/automation3.png)

### Ustawienie nazwy automatyzacji

Pierwszą rzeczą, jaką zrobimy, jest ustawienie nazwy. Wprowadź „Włącz oświetlenie bramy wjazdowej po zachodzie słońca”.

![Ustawienie nazwy automatyzacji](/AIS-docs/img/en/bramka/automation4.png)

### Wyzwalacze automatyzacji

Drugim krokiem jest określenie, co powinno uruchomić naszą automatyzację. W tym przypadku chcemy użyć zdarzenia **zachód słońca**, aby ją uruchomić. Możemy dodać też przesunięcie czasowe tak, żeby włączyć oświetlenie np. na 15 minut przed zachodem (ponieważ po zachodzie jest już dość ciemno).

W sekcji wyzwalacza kliknij rozwijaną listę i zmień typ wyzwalacza na **Słońce**. Następnie wybierz **zachód słońca**. Ponieważ chcemy, aby nasza automatyzacja była uruchamiana 15 minut przed faktycznym zachodem słońca, dlatego dodajmy -0:15 do przesunięcia. Oznacza to, że uruchomimy ją 15 minut przed faktycznym zachodem słońca.

![Dodanie nowej automatyzacji](/AIS-docs/img/en/bramka/automation5.png)

### Akcje automatyzacji

Po zdefiniowaniu naszego wyzwalacza przejdź w dół do sekcji Akcje (pomijając opcjonalną sekcję Warunki).

Upewnij się, że typ akcji jest ustawiony na **Wywołanie usługi** i zmień usługę na **light.turn_on**.
W przypadku tej automatyzacji włączymy światła, które nazwaliśmy "Lampy zewnętrzne", więc w Danych usługi podajemy identyfikator urządzenia **{"entity_id": "light.lampy_zewnetrzne"}** - oczywiście w Twoim przypadku może być inaczej i identyfikator urządzenia sprawdzisz w rejestrze encji.

![Dodanie nowej automatyzacji](/AIS-docs/img/en/bramka/automation6.png)

Kliknij pomarańczowy przycisk w prawym dolnym rogu, aby zapisać automatyzację.

### Edycja i zarządzanie

**Gratulacje! Dodałeś pierwszą automatyzację :)**

Możesz wrócić do ekranu z listą automatyzacji, z którego można zarządzać i edytować wszystkie automatyzacje w systemie.

![Dodanie nowej automatyzacji](/AIS-docs/img/en/bramka/automation8.png)

Z tego miejsca możesz też wypróbować działanie swojej nowej automatyzacji uruchamiając ją ręcznie

![Dodanie nowej automatyzacji](/AIS-docs/img/en/bramka/automation9.png)

## Sprawdzenie unikalnego identyfikatora urządzenia
Każde urządzenie w naszym domu zintegrowane z systemem posiada unikalny identyfikator, który możemy sprawdzić (lub zmienić) w rejestrze encji

![Dodanie nowej automatyzacji](/AIS-docs/img/en/bramka/automation7.png)

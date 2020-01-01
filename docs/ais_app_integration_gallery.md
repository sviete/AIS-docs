---
title: "Galeria"
sidebar_label: Galeria
---

## Wprowadzenie

Integracja pozwala dodawać zdjęcia do urządzenia oraz zarządzać nagraniami i zdjęciami z kamer na urządzeniu. Dodane zdjęcia mogą być następnie używane jako tło kart (widok pomieszczenia), rzut pomieszczenia itp.

![Galeria](/AIS-docs/img/en/frontend/gallery_1.png)


## Dodawanie zdjęć

Zdjęcia można dodawać po wybraniu przycisku plus <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
</svg> na stronie z galerią. Zdjęcie można wybrać z dysku, przeciągnąć i upuścić lub dodać bezpośrednio z aparatu telefonu (w przypadku gdy używamy aplikacji z telefonu).

![Galeria](/AIS-docs/img/en/frontend/gallery_2.png)


## Wyświetlanie zdjęć na karcie

Zdjęcia dodane do galerii przechowywane są na urządzeniu w lokalizacji dostępnej z aplikacji pod adresem **/local/img/<nazwa_zdjęcia>**


Żeby zastosować wybrane zdjęcie jako okładkę do karty w aplikacji, wystarczy:
- skopiować jego adres z galerii,
![Galeria](/AIS-docs/img/en/frontend/gallery_3.png)

- w wybranym widoku utworzyć kartę typu **Obraz**
![Galeria](/AIS-docs/img/en/frontend/gallery_4.png)

- w parametrach karty podać pozycję, która ma reprezentować obraz oraz (1.) adres obrazu w galerii (2.). Dodatkowo można wybrać co ma się dziać po naciśnięciu obrazu - np. przełączenie (3.)

![Galeria](/AIS-docs/img/en/frontend/gallery_5.png)

W efekcie otrzymamy kartę, która będzie nam pokazywała stan naszego urządzenia. Klikając kartę, możemy sterować urządzeniem (przełączać).

![Galeria](/AIS-docs/img/en/frontend/gallery_6.png)

Więcej o konfiguracji interfejsu użytkownika jest w sekcji [Konfiguracja interfejsu użytkownika](http://localhost:3000/AIS-docs/docs/en/next/ais_app_ui_config.html)


## Nagranie wideo z aplikacji

Jeżeli mamy zintegrowane kamery wideo to możemy zautomatyzować nagrywanie obrazu z tych kamer (np. po wykryciu ruchu lub po naciśnięciu dzwonka do drzwi).

![Galeria](/AIS-docs/img/en/frontend/gallery_7.png)

Tu pokażemy jak ręcznie (bez automatyzacji) wywołać usługę nagrywania do galerii, takie samo wywołanie usługi nagrywania można dodać do automatyzacji.

Jeżeli chcemy zapisać nagranie w galerii, to należy podać pełną ścieżkę do folderu na bramce, w którym znajduje się nasza galeria (ta ścieżka to /data/data/pl.sviete.dom/files/home/AIS/www/img) oraz nazwę naszego nagrania, np.:

**/data/data/pl.sviete.dom/files/home/AIS/www/img/rec1.mp4**

![Galeria](/AIS-docs/img/en/frontend/gallery_8.png)

Żeby odświeżyć galerię (nie czekając, aż zrobi to system) wywołujemy jeszcze usługę, **ais_files.refresh_files**

![Galeria](/AIS-docs/img/en/frontend/gallery_9.png)

Teraz możemy już przejść do galerii i zobaczyć nasze nagranie z kamery.

![Galeria](/AIS-docs/img/en/frontend/gallery_10.png)



## Dodanie interaktywnego rzutu pomieszczenia

> Opis w przygotowaniu

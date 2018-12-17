---
title: API systemu
sidebar_label: Wprowadzenie
id: version-0.83.7-ais_bramka_api_index
original_id: ais_bramka_api_index
---


## RESTful API

RESTful API pozwala na interakcję z bramką z innych systemów lub aplikacji.

Asystent Domowy udostępnia serwer WWW na porcie 8123 (https) oraz 8180 (http)

* http://ais-dom.local:8180/ tu znajduje się aplikacja do kontrolowania systemu
* http://ais-dom.local:8180/api/ tu znajduje się RESTful API


> Interfejs API akceptuje i zwraca tylko obiekty zakodowane w JSON.



## Wywoływanie/testowanie usług w apllikacji

> Aby sprawdzić dostępne usługi, w aplikacji przejdz do "Narzędzia deweloperskie" ->
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M12,0C8.96,0 6.21,1.23 4.22,3.22L5.63,4.63C7.26,3 9.5,2 12,2C14.5,2 16.74,3 18.36,4.64L19.77,3.23C17.79,1.23 15.04,0 12,0M7.05,6.05L8.46,7.46C9.37,6.56 10.62,6 12,6C13.38,6 14.63,6.56 15.54,7.46L16.95,6.05C15.68,4.78 13.93,4 12,4C10.07,4 8.32,4.78 7.05,6.05M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M15,9H9A1,1 0 0,0 8,10V22A1,1 0 0,0 9,23H15A1,1 0 0,0 16,22V10A1,1 0 0,0 15,9Z" />
</svg> z tego miejsca możesz wywoływać/testować dowolne usług dostępne na bramce.


W celu wywołania usługi:
1. usługę do wywołania wybieramy z listy,
2. podajemy parametry do przekazania w formacie JSON, np
przykładowy parametr w formacie JSON:
```JSON
{"text": "Cześć, jak się masz?"}
```
3. naciskamy przycisk "CALL SERVICE".

Każda usługa ma:
- a) opis
- b) wylistowane parametry (parametr, opis i przykładowa wartość parametru)

![Ustawienia sieci](/AIS-docs/img/en/bramka/services_1.png)



## Wywoływanie usług z curl


### GET /api/


Przykład komedny `curl`:

```bash
$ curl -X GET -H "Authorization: Bearer ABCDEFGH" \
       -H "Content-Type: application/json" http://ais-dom.local:8180/api/
```


Zwraca następującą odpowiedz jeżeli API działa:

```json
{
  "message": "API running."
}
```


### POST /api/services/&lt;domain>/&lt;service>

Komponenty dostępne na bramce uodstępniają swoje usługi. Najczęstszym przypadkiem wywołania usługi komponentu jest automatyczne wywołanie jej w systemie po wystąpieniu okreśonego zdarzenia.
Dodatkowo usługę można również wywołać z zewnętrznego systemu za pomocą API.

Przykład komedny `curl` wywołującej czytanie tekstu przez bramkę:

```bash
$ curl -X POST -H "Authorization: Bearer ABCDEFGH" \
       -H "Content-Type: application/json" \
       -d '{"text": "Cześć! Jak się masz?"}' \
       http://ais-dom.local:8180/api/services/ais_ai_service/say_it
```

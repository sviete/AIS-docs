---
title: API systemu
sidebar_label: API systemu
id: version-0.97.5-ais_bramka_api_index
original_id: ais_bramka_api_index
---


## RESTful API

RESTful API pozwala na interakcję z bramką z innych systemów lub aplikacji.

Asystent Domowy udostępnia serwer WWW na porcie 8123 (https) oraz 8180 (http)

* http://ais-dom.local:8180/ tu znajduje się aplikacja do kontrolowania systemu
* http://ais-dom.local:8180/api/ tu znajduje się RESTful API


> Interfejs API akceptuje i zwraca tylko obiekty zakodowane w JSON.



## Wywoływanie/testowanie usług w apllikacji

> Aby sprawdzić dostępne usługi w aplikacji, z głównego menu przejdź do "Narzędzia deweloperskie" ->
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M16,5L19,8L18.5,8.5C19.5,9.5 20,10 20.5,9.5L22,11C22,12 20.5,13.5 19.5,13.5L18,12C18.5,11.5 18,11 17,10L16,11L13,8C14.5,6 13,4 9,5C10,4 11,3 12,3C12.5,3 14,3 16,5M2,20L4,22L14,12L12,10L2,20Z" />
</svg> z tego miejsca możesz wywoływać/testować dowolne usługi dostępne na bramce.


W celu wywołania usługi:
1. usługę do wywołania wybieramy z listy,
2. podajemy parametry do przekazania w formacie JSON, np.
przykładowy parametr w formacie JSON:
```JSON
{"text": "Cześć, jak się masz?"}
```
3. naciskamy przycisk "CALL SERVICE".

Każda usługa ma:
- a) opis
- b) wylistowane parametry (parametr, opis i przykładowa wartość parametru)

![Ustawienia sieci](/AIS-docs/img/en/frontend/services_1.png)



## Wywoływanie usług z curl


### GET /api/


Przykład komedny `curl`:

```bash
$ curl -X GET -H "Authorization: Bearer ABCDEFGH" \
       -H "Content-Type: application/json" http://ais-dom.local:8180/api/
```


Zwraca następującą odpowiedź, jeżeli API działa:

```json
{
  "message": "API running."
}
```


### POST /api/services/&lt;domain>/&lt;service>

Komponenty dostępne na bramce udostępniają swoje usługi. Najczęstszym przypadkiem wywołania usługi komponentu jest automatyczne wywołanie jej w systemie po wystąpieniu okreśonego zdarzenia.
Dodatkowo usługę można również wywołać z zewnętrznego systemu za pomocą API.

Przykład komedny `curl` wywołującej czytanie tekstu przez bramkę:

```bash
$ curl -X POST -H "Authorization: Bearer ABCDEFGH" \
       -H "Content-Type: application/json" \
       -d '{"text": "Cześć! Jak się masz?"}' \
       http://ais-dom.local:8180/api/services/ais_ai_service/say_it
```

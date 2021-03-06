---
title: Usunięcie urządzenia z bramki
sidebar_label: Usunięcie urządzenia z bramki
id: version-0.102.4-ais_iot_gate_remove_device
original_id: ais_iot_gate_remove_device
---


Jeśli chcesz usunąć swoje urządzenie AIS dom z bramki AIS to należy to zrobić w 2 krokach opisanych poniżej.

## 1. Odłączenie urządzenia z sieci

Urządzenia AIS dom są automatycznie wykrywane przez bramkę (za pomocą mechanizmu [MQTT discovery](https://www.home-assistant.io/docs/mqtt/discovery/)) dlatego przed usunięciem urządzenia z aplikacji usuń je fizycznie z sieci WiFi lub wyłącz z prądu. W ten sposób będziesz miał pewność, że urządzenie nie opublikuje swojej aktualizacji do Asystenta domowego i tym samy nie pojawi się ponownie w aplikacji Asystent domowy.


## 2. Usunięcia urządzenia z systemu Asystent domowy

W aplikacji Asystent domowy przejdz do [Konfiguracja Urządzeń AIS dom](/AIS-docs/docs/en/ais_iot_gate.html#dostęp-do-urządzeń-ais-dom-z-aplikacji), następnie w tabeli urządzeń kliknij urządzenie, które chcesz usunąć, aby przejść do widoku [Konfiguracji urządzenia](/AIS-docs/docs/en/ais_iot_gate.html#konfiguracja-urządzenia). Aby usunąć urządzenie, kliknij ikonkę <svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="#000000" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /> </svg>  po prawej stronie na górze, a następnie potwierdź operację usuwania.

![Usunięcie urządzenia z bramki](/AIS-docs/img/en/frontend/remove_ais_dom_device.png)


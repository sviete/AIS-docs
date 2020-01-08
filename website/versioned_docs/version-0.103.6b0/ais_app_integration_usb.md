---
title: USB rozpoznawanie urządzeń
sidebar_label: USB
id: version-0.103.6b0-ais_app_integration_usb
original_id: ais_app_integration_usb
---

## Wprowadzenie

Na bramce dostarczamy działającą w tle usługę USB, której celem jest wykrywanie zmian stanu urządzeń USB (połączenie i rozłączanie). Usługa monitoruje zdarzenia za pomocą mechanizmu inotify dostępnego w systemie Linux, następnie zmienia je w format zrozumiały dla Asystenta domowego. Dzięki temu Asystent domowy powiadamia komunikatem głosowym o tym, jakie urządzenie zostało dodane i jeżeli obsługa danego urządzenia jest wspierana, to Asystent wykona dalsze akcje związane z obsługą danego urządzenia, takie jak:
- dodanie dysków
- uruchomienie karty audio
- uruchmienie serwsisu do obsługi Zigbee


## Pamięć USB

Gdy dysk flash USB, karta pamięci SD, lub urządzenie z obsługujące MTP (mp aparat czy telefon komórkowy) jest podłączone do bramki AIS dom, to bramka odsługuje takie urządzenie w trybie hosta USB.
W tym trybie bramka zapewnia napięcie 5V na linii VBUS portu USB dla dołączonego urządzenia, pamięć flash jest rejestrowana jako nowy dysk zewnętrzny dostępny dla użytkownika.
Asystent domowy informuje że rozpoznał dysk komunikatem "Dysk zewnętrzny podłączony" i można już przeglądać dysk i odtwarzać z niego audio.

![Audio panel](/AIS-docs/img/en/bramka/usb_integration_drive.png)


## USB Audio

Na bramce dostępna jest karta audio posiadająca 3 wbudowane interfejsy do przesyłania audio:
- av
- hdmi
- spdif

```
cat /proc/asound/cards
0 [AMLM8AUDIO     ]: AML-M8AUDIO - AML-M8AUDIO
                     AML-M8AUDIO
```

Dodatkowo każde urządzenie audio zgodne ze specyfikacją USB działające w trybie akcesoriów USB może obsługiwać dźwięk (jako interfejs USB przesyłający audio).
Po włożeniu urządzenia USB(zgodnego ze specyfikacją USB dla urządzeń audio) do bramki, Asystent domowy rozpozna je i poinformuje głosowo, że urządzenie zostało dodane i automatycznie użyje nowo dodane urządzenie do odtwarzania audio.

![Audio panel](/AIS-docs/img/en/bramka/usb_integration_audio.png)

```
$ cat /proc/asound/cards
 0 [AMLM8AUDIO     ]: AML-M8AUDIO - AML-M8AUDIO
                      AML-M8AUDIO
 1 [AUDIO          ]: USB-Audio - USB  AUDIO
                      USB  AUDIO at usb-xhci-hcd.0.auto-1.2, full speed
```

Istnieje też możliwość kontroli urządzeń audio z poziomu konsoli, ale ten temat dotyczy użytkowników, którzy chcieliby sami konfigurować i programować audio na urządzeniu i zostanie opisany szerzej na forum projektu Asystenta domowego.

```
$ su -c "tinymix -D 0"
Mixer name: 'AML-M8AUDIO'
Number of controls: 10
ctl	type	num	name                                     value
0	INT	2	DAC Digital Playback Volume              251 251
1	ENUM	1	DAC Extra Digital Gain                   0dB
2	BOOL	1	Audio i2s mute                           Off
3	ENUM	1	Output Swap                             
4	BOOL	1	Audio spdif mute                         Off
5	BOOL	1	Ext Spk Switch                           Off
6	ENUM	1	Lineout right N switch                   LORN_SEL_DACR_INV
7	ENUM	1	Lineout right P switch                   LORP_SEL_DACR
8	ENUM	1	Lineout left N switch                    LOLN_SEL_DACL_INV
9	ENUM	1	Lineout left P switch                    LOLP_SEL_DACL
```

## Akcesoria USB HID

Urządzenia USB HID (Human Interface Devices) to urządzenia używane głównie do kontrowania działanie systemu. Typowe przykłady urządzeń klasy HID to kontrolery takie jak:
- pilot radiowy AI-Speaker,
- klawiatury,
- myszy,
- joysticki,
- czytniki kodów kreskowych

Definicja USB HID (Human Interface Device) określa standardowy sposób komunikacji HID z hostem obsługującym urządzenia tego typu.
Jeżeli urządzenie spełnia standard USB HID to powinno być automatycznie rozpoznane i dodane przez Asystenta domowego, co zostanie zakomunikowane głosowo przez asystenta:

![HID USB](/AIS-docs/img/en/bramka/usb_integration_hid.png)


## Biblioteka libusb

Na bramce dostarczamy [libusb](https://libusb.info/). Jest to biblioteka C, która zapewnia ogólny dostęp do urządzeń USB.
Biblioteka ta umożliwia aplikacją (działającym na bramce) na komunikowanie się ze sprzętem USB. Obsługiwane są wszystkie wersje protokołu USB, od 1.0 do 3.1(najnowsza).

### Zigbee USB sniffer


> <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="M4.06,6.15C3.97,6.17 3.88,6.22 3.8,6.28C2.66,7.9 2,9.87 2,12A10,10 0 0,0 12,22C15,22 17.68,20.68 19.5,18.6L17,18.85C14.25,19.15 11.45,19.19 8.66,18.96C7.95,18.94 7.24,18.76 6.59,18.45C5.73,18.06 5.15,17.23 5.07,16.29C5.06,16.13 5.12,16 5.23,15.87L7.42,13.6L15.03,5.7V5.6H10.84C8.57,5.64 6.31,5.82 4.06,6.15M20.17,17.5C20.26,17.47 20.35,17.44 20.43,17.39C21.42,15.83 22,14 22,12A10,10 0 0,0 12,2C9.22,2 6.7,3.13 4.89,4.97H5.17C8.28,4.57 11.43,4.47 14.56,4.65C15.5,4.64 16.45,4.82 17.33,5.17C18.25,5.53 18.89,6.38 19,7.37C19,7.53 18.93,7.7 18.82,7.82L9.71,17.19L9,17.95V18.06H13.14C15.5,18 17.84,17.81 20.17,17.5Z" />
</svg> Od wersji 0.103.7 automatycznie obsługujemy na bramce Zigbee USB CC2531, **zaprogramowane specjalnym oprogramowaniem**. Szczegóły dostępne są na stronie projektu [Zigbee2Mqtt](https://www.zigbee2mqtt.io/).
> Dla osób, które nabyły bramki z wcześniejszą wersją oprogramowania, udostępnimy na forum oraz na [osobnej stronie dokumentacji](/AIS-docs/docs/en/next/ais_app_integration_zigbee.html) informację techniczne jak dodać obsługę Zigbee.


Po dodaniu urządzenia Zigbee USB CC2531 do portu USB bramki, Asysten domowy poinforuje o tym głosowo, oraz automatycznie doda nową opcję w aplikacji:

![HID USB](/AIS-docs/img/en/bramka/usb_integration_zigbee.png)

---
description: |
  Instructions to iOS developers to get their Pebble apps whitelisted.
order: 4
---

# iOS App Whitelisting

Pebble is part of the Made For iPhone program, a requirement that hardware
accessories must meet to interact with iOS apps. If an iOS app uses PebbleKit
iOS, it must be whitelisted **before** it can be submitted to the Apple App
Store for approval.


## Requirements

* The iOS companion app must only start communication with a Pebble watch on
  an explicit action in the UI. It cannot auto­start upon connection and it must
  stop whenever the user stops using it. Refer to the
  {% guide_link communication/using-pebblekit-ios %} guide for details.

* `com.getpebble.public` is the only external accessory protocol that can be
  used by 3rd party apps. Make sure this is listed in the `Info.plist` in the
  `UISupportedExternalAccessoryProtocols` array.

* Pebble may request a build of the iOS application. If this happens, the
  developer will be supplied with UDIDs to add to the provisioning profile.
  TestFlight/HockeyApp is the recommended way to share builds with Pebble.

<RblButton
  href="https://dev-portal.rebble.io/whitelist"
  text="Whitelist a New App"
  theme="alt"
/>

After whitelisting of the new app has been confirmed, add the following
information to the "Review Notes" section of the app's Apple app submission:

<div style="text-align: center;">
  <strong>MFI PPID 126683­-0003</strong>
</div>

> Note: An iOS app does not need to be re-whitelisted every time a new update is
> released. However, Pebble reserves the right to remove an application from the
> whitelist if it appears that the app no longer meets these requirements.

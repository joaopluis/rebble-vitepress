---
title: Download
order: 1
---

# Pebble SDK Download

## Get the Latest Pebble Tool

The `pebble` tool allows you to quickly switch between different SDK versions.
The instructions to obtain the tool vary depending on your platform. All
specific instructions are shown on this page.


## Mac OS X

The Pebble SDK can be installed automatically using Homebrew, or manually if
preferred. If you already use at least version 4.0 of the `pebble` tool, you can
install the latest SDK by running the following command:

```bash
$ pebble sdk install latest
```


### With Homebrew

If you previously used Homebrew to install older Pebble SDKs, run:

```bash
$ brew update && brew upgrade pebble-sdk
```

If you've never used Homebrew to install the Pebble SDK, run:

```bash
$ brew update && brew install pebble/pebble-sdk/pebble-sdk
```


### Without Homebrew

If you would prefer to not use Homebrew and would like to manually install the
Pebble SDK:

1. Download the
   <a :href="`${$PEBBLETOOL_ROOT}pebble-sdk-${$PEBBLETOOL_VERSION}-mac.tar.bz2`">SDK package</a>.
2. Follow the [Mac manual installation instructions](/sdk/install/mac/).


## Linux

Linux users should install the SDK manually using the instructions below:

1. Download the relevant package:
   <a :href="`${$PEBBLETOOL_ROOT}pebble-sdk-${$PEBBLETOOL_VERSION}-linux32.tar.bz2`">Linux (32-bit)</a> |
   <a :href="`${$PEBBLETOOL_ROOT}pebble-sdk-${$PEBBLETOOL_VERSION}-linux64.tar.bz2`">Linux (64-bit)</a>.
2. Install the SDK by following the
   [manual installation instructions](/sdk/install/linux/).


## Windows

Installing the Pebble SDK on Windows is not officially supported at this time.
However, you can choose from alternative strategies to develop watchfaces and
watchapps on Windows, which are detailed below.


### Use CloudPebble

[CloudPebble]({{$CLOUDPEBBLE_URL}}) is the official online development
environment for writing Pebble apps. It allows you to create, edit, build and
distribute applications in your web browser without installing anything on your
computer.

**Pebble strongly recommends [CloudPebble]({{$CLOUDPEBBLE_URL}}) for
Windows users.**


### Use a Virtual Machine

You can also download and run the Pebble SDK in a virtual machine.

 1. Install a virtual machine manager such as
   [VirtualBox](http://www.virtualbox.org) (free) or
   [VMWare Workstation](http://www.vmware.com/products/workstation/).
 2. Install [Ubuntu Linux](http://www.ubuntu.com/) in a virtual machine.
 3. Follow the standard [Linux installation instructions](/sdk/install/linux/).


## Testing Beta SDKs

Beta SDKs are released in the run up to stable SDK releases, and give interested
developers a chance to test out new features and APIs and provide feedback.

You can opt-in to the beta channel to receive beta SDKs. Once the beta period ends,
you will be notified of the update to the final stable version.

:::warning IMPORTANT
Apps built with a beta SDK **must not** be uploaded to the developer portal, as
users not yet on the new firmware version will be unable to install them.
:::

Once you have the latest `pebble` tool, you can easily access and try out new
beta SDKs we release from time to time by switching to the 'beta' sdk channel:

```bash
$ pebble sdk set-channel beta
```

Install the latest beta SDK:

```bash
$ pebble sdk install latest
```

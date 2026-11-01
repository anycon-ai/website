---
updated: '2026-11-01'
---

This policy explains what personal data the public Anycon hub at **hub.anycon.ai** (the "Service") and this website (**anycon.ai**) handle, why, and for how long.

## Who we are

The Service is run by an individual developer based in the People's Republic of China ("we", "us"), who is responsible for the personal data described here. Contact: [contact@anycon.ai](mailto:contact@anycon.ai). Security vulnerabilities: [security@anycon.ai](mailto:security@anycon.ai).

Anycon is open-source software. This policy does not cover:

- hubs run by anyone else, including a hub you host yourself. The operator of that hub is responsible for it.
- the Anycon software on your own machines (the daemon, CLI, and SDK). It keeps its data on those machines and sends us no telemetry.
- services you choose to use alongside Anycon, such as the AI agents on your machine and their model providers.

## How the Service works, and what the hub sees

The Anycon daemon on your machine connects out to the hub. Your browsers, terminals, and scripts connect to the hub as clients. The hub relays messages between the devices you have paired.

Session content (prompts, agent replies, code, files, and attachments) is end-to-end encrypted with the Noise protocol between the daemon and each client. The hub forwards ciphertext and sees metadata: which device talks to which, when, and how many bytes. Session history is stored on your machine, not on the hub. The public hub keeps no offline queue, so it does not hold messages for devices that are offline, encrypted or not. Pairing codes are generated on the daemon and never sent to the hub.

**The Web UI's code is served by the hub.** A malicious or compromised hub could serve modified JavaScript and read keys and plaintext in your browser. Using the Web UI at hub.anycon.ai therefore means trusting us, and the network providers that deliver the page, not to serve modified code. The same applies to the loader for dev server previews. For sensitive work, host your own hub, or use the CLI or SDK with the public hub: you install their code yourself, and the hub does not serve it.

## What the hub stores

The hub's database holds the following:

- **Your account**: an account ID, a display name, and an email address if the account has one. At sign-up, the display name is taken from your GitHub or Google profile name, or your GitHub username, or the part of your email address before the "@". You can change it in Account settings. The email address is one you signed in with or added in settings, or one that GitHub or Google reported as verified.
- **Linked sign-in accounts**: for each linked GitHub or Google account, the provider and its stable user ID. We do not store usernames, avatars, or access tokens from these providers.
- **Your devices**: for each device on your account (a daemon, browser, CLI, or SDK client), a device ID, its name, the platform it reports (operating system, architecture, and client version), the address a browser used to open the hub, a hash of the device's access token, and when it was created, last seen, and revoked. Browser device names default to something like "Chrome · macOS · hub.anycon.ai". The hub also records which of your devices are paired with each other.
- **Browser sign-in sessions**: a hash of the session token, the browser's user agent, an IP address prefix, and when the session was created, last used, and expires. An IP prefix is the first three numbers of an IPv4 address or the first 48 bits of an IPv6 address. The database never stores full IP addresses.
- **Security records**: successful and failed sign-ins (method, IP prefix, and user agent), account creation, changes to your email and sign-in methods, devices paired, enrolled, or revoked, device token rotations (with IP prefix), and administrator changes.
- **Push notification subscriptions**: for each browser that turned on push notifications, the push service address and the keys your browser provided.
- **Notification preferences.**
- **Short-lived records**: email sign-in codes (stored as a hash, with the email address, valid for 10 minutes), sign-in state for GitHub and Google (10 minutes), and dev server preview tokens (stored as a hash, valid for 24 hours), along with the preview names linked to your node.

Counters for plan limits and rate limits are kept in memory only.

The hub does not store session content, project files, or attachments. Session content reaches the hub only as ciphertext, and pairing codes do not reach it at all.

## Server logs

The hub's logs record connections and disconnections with device IDs, request routes without their parameters, status codes and timings, rate-limit and plan-limit events, and whether each email and push notification was delivered. Email addresses appear in the logs only as a short hash. The logs never contain message content, tokens, or sign-in codes. The proxy and network providers in front of the hub may log full IP addresses, user agents, and request times.

## Emails and push notifications

- Sign-in emails contain the sign-in code.
- Notification emails tell you that a session on one of your nodes needs approval or ran into an error, that a device asked to join a node, or that something happened that affects your account's security. They use fixed templates with the node's name and a link, and contain no session content. You can turn each kind on or off in Account settings → Notifications.
- Push notifications are encrypted for your browser and contain only the kind of event, the node ID, and a random session ID. Your browser vendor's push service (for example Google, Mozilla, Apple, or Microsoft) delivers them.

## Cookies and browser storage

hub.anycon.ai sets a cookie to keep you signed in and a short-lived cookie during GitHub or Google sign-in. It sets no analytics, advertising, or tracking cookies.

The Web UI keeps its keys and a cache of your sessions in your browser's storage (IndexedDB) on your device. This data is not sent to us. Dev server previews keep their access token in the preview site's browser storage and set no cookies of ours.

anycon.ai is a static website. It sets no cookies and uses no analytics. Its hosting provider may keep standard access logs.

## Why we use your data

- **To provide the Service**: signing you in, routing messages between your devices, sending the notifications you ask for, and applying plan limits.
- **To keep the Service and your account secure**: rate limits, security records, and detecting and stopping abuse.
- **To comply with the law.**

We do not sell personal data, and we do not use it for advertising or profiling. We do not use any data from the Service to train AI models.

## Who else processes your data

- **Alibaba Cloud**: server hosting in Hong Kong, and delivery of our emails.
- **Cloudflare**: network delivery and protection for hub.anycon.ai and the preview domain. Cloudflare terminates TLS, so it sees request metadata and the Web UI code it delivers. Session content stays end-to-end encrypted.
- **GitHub and Google**, only if you sign in with them. Your sign-in goes through them under their own privacy policies.
- **Browser push services**, only if you turn on push notifications.

We may disclose data when the law requires it. We can only disclose what we hold, which is the account data and metadata described above.

## Where your data is stored

The Service's servers are in Hong Kong SAR. If you use the Service from anywhere else, including mainland China, your data is transferred to Hong Kong. The providers listed above may process data in other countries.

## How long we keep it

- Account data, devices, linked accounts, and notification settings: until you delete them or your account.
- Browser sign-in sessions: until you sign out, or 30 days after they were last used.
- Security records: 90 days.
- Sign-in codes, sign-in state, and preview tokens: deleted once they expire, between 10 minutes and 24 hours.
- Server logs: up to 30 days.
- Backups: up to 30 days.

You can delete your account in Account settings → Profile. The hub immediately disconnects your devices and deletes the data tied to your account, including devices, pairings, sign-in methods, push subscriptions, and security records. It keeps one record that an account was deleted, with no IP address or user agent, which is removed after 90 days like other security records. Copies in logs and backups expire on the schedule above. Session history on your machines is not affected.

## Your rights

You can see and change your display name, email, sign-in methods, and devices in Account settings, and you can delete your account at any time. Depending on where you live, for example under the EU or UK GDPR or China's Personal Information Protection Law, you may also have the right to get a copy of your data, to have it corrected or deleted, to restrict how we process it, and to object to processing. To exercise these rights, email [contact@anycon.ai](mailto:contact@anycon.ai). We reply within 30 days. You can also complain to your local data protection authority.

## Children

The Service is not intended for anyone under 16, and we do not knowingly collect their data. If you believe someone under 16 has an account, contact us and we will delete it.

## Security

The hub stores device tokens, sign-in session tokens, and sign-in codes only as hashes. Connections to the hub use TLS, and session content is end-to-end encrypted between your devices. The threat model and known limitations are described in [SECURITY.md](https://github.com/anycon-ai/anycon/blob/main/SECURITY.md).

## Changes

We will post changes to this policy on this page and update the date at the top. For material changes, we will notify you by email (if your account has one) or on this website at least 30 days before they take effect.

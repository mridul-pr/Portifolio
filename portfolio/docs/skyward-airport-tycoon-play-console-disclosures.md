# Skyward Airport Tycoon — Play Console disclosure answer sheet

Use this alongside the live Privacy Policy:

- Policy: `https://portifolio-mridul-ps-projects.vercel.app/skyward-airport-tycoon/privacy-policy`
- Policy source: `public/skyward-airport-tycoon/privacy-policy/index.html`
- App: Skyward Airport Tycoon
- Developer: Mridul Pramod
- Contact: `mridulpramod8@gmail.com`
- Policy version: 1.1 (effective 30 October 2026)

> **Current release status:** the App does **not** yet include the Google Mobile
> Ads SDK and does **not** show third-party ads. Answer the ads declaration as
> **No** for a build without ads. Switch to **Yes** only when the production
> release actually contains AdMob. The Data safety answers below describe the
> release once AdMob is integrated.

### Current build vs production build

| Play Console item | Current build (no AdMob) | Production build with AdMob |
| --- | --- | --- |
| Ads declaration | **No** | **Yes** |
| Data safety — collection | **No required data types collected or shared** | Approximate location, App interactions, Diagnostics, Device or other IDs |
| Data safety — encryption in transit | Not applicable if nothing is collected | **Yes** |
| Data safety — deletion request | Answer according to the flow you offer | **Yes**, using the policy URL/contact (section 4) |
| Privacy policy URL | Required | Required |

Do not leave the current build's "no collection" answers in place after AdMob is
added, and do not publish the AdMob build with the old ads declaration.

Google references:

- AdMob Play data disclosure:
  https://developers.google.com/admob/android/privacy/play-data-disclosure
- Play Data safety guidance:
  https://support.google.com/googleplay/android-developer/answer/10787469
- Play ads declaration:
  https://support.google.com/googleplay/android-developer/answer/9859455
- Account deletion requirement:
  https://support.google.com/googleplay/android-developer/answer/13327111

---

## 1. Ads declaration

Play Console → **App content** → **Ads**.

| Release state | Answer |
| --- | --- |
| Current build, no AdMob SDK, no ads | **No, my app does not contain ads** |
| Production build that contains AdMob or any other ad SDK | **Yes, my app contains ads** |

Notes:

- Answer **Yes** even if ads are limited to test ads, rewarded ads, banners, or
  interstitials.
- An inaccurate ads declaration is a policy misrepresentation and can lead to
  enforcement, including suspension.
- If you add or remove advertising later, update this declaration with the
  release.
- The store listing should not describe the app as ad-free if the release
  contains ads.

---

## 2. Data safety — collection and sharing summary

Play Console → **App content** → **Data safety**.

For a release that contains the Google Mobile Ads SDK (AdMob), use the
following. The SDK collects data automatically; the developer does not need to
write custom code for these categories.

| Play data type | Collected | Shared | Purposes | Optional? | Processed ephemerally? |
| --- | --- | --- | --- | --- | --- |
| Location → Approximate location | Yes | Yes | Advertising or marketing; Analytics; Fraud prevention, security, and compliance | No | No |
| App activity → App interactions | Yes | Yes | Advertising or marketing; Analytics; Fraud prevention, security, and compliance | No | No |
| App info and performance → Diagnostics | Yes | Yes | Advertising or marketing; Analytics; Fraud prevention, security, and compliance | No | No |
| Device or other IDs | Yes | Yes | Advertising or marketing; Analytics; Fraud prevention, security, and compliance | No | No |

### What each row represents

- **Approximate location** — the device IP address may be used to estimate
  general location. The app does not request precise GPS location.
- **App interactions** — product interactions such as app launches, taps, and
  video views.
- **Diagnostics** — app and SDK performance information such as launch time,
  hang rate, and energy usage.
- **Device or other IDs** — Android advertising ID, app set ID, and, where
  applicable, identifiers related to signed-in accounts on the device.

### Security answers

- **Is data encrypted in transit?** Yes. Google states that Mobile Ads SDK data
  is encrypted in transit using TLS.
- **Do you provide a way for users to request data deletion?** See section 4
  below before answering.

### Important accuracy points

- Do **not** answer "No data collected". The SDK transmits data off the device.
- Do **not** mark the data as "optional". Advertising data collection is not a
  user-facing optional feature in this configuration.
- Do **not** claim the data is processed only on-device or ephemerally.
- If mediation, additional ad networks, analytics SDKs, crash reporting, or
  login/cloud features are added, update the Data safety form before release.

---

## 3. Data safety — other form sections

| Section | Answer for this app |
| --- | --- |
| Does your app collect or share any of the required user data types? | **Yes**, once AdMob is included |
| Is all of the user data collected by your app encrypted in transit? | **Yes** |
| Do you provide a way for users to request that their data is deleted? | **Yes** — use the policy URL/contact (see section 4) |
| Does your app collect data for advertising or marketing? | **Yes** |
| Does your app share data with third parties? | **Yes** — Google and its advertising partners |
| Does your app use data for analytics? | **Yes** — SDK analytics |
| Does your app use data for fraud prevention, security, or compliance? | **Yes** |

Do not add categories the app does not actually use, such as:

- Precise location
- Contacts
- Calendar
- Photos or videos
- Files and docs
- Health and fitness
- Financial info
- Messages
- Audio
- Web browsing
- Installed apps
- User account credentials

The App has no login, cloud save, payments, or developer-operated analytics
backend.

---

## 4. Data deletion answer

The Data safety form asks: **“Do you provide a way for users to request that
their data is deleted?”**

The App does **not** create user accounts and the Developer does **not** operate
a server-side profile or database containing game progress. Local data can be
deleted by the user through Android settings or by uninstalling the App.

### Recommended answer

Answer **Yes** and use the Privacy Policy URL as the deletion-request link:

`https://portifolio-mridul-ps-projects.vercel.app/skyward-airport-tycoon/privacy-policy`

This is consistent with the policy because Sections 7 and 11 explain how to
delete local data and how to contact the Developer about a deletion request.
Only choose **Yes** if you will actually respond to requests sent to
`mridulpramod8@gmail.com`.

When a request arrives:

1. Confirm that the Developer holds no server-side account or game data.
2. Explain how to clear local storage or uninstall the App.
3. Direct the user to Google's privacy controls and advertising ID controls for
   data held by Google.
4. Keep a record of the request and your response.

### When to answer No instead

Answer **No** only if you do not offer any deletion-request channel at all and
intend to rely entirely on the user deleting local data and on Google's
controls. If you choose No, remove the deletion-request wording from the
policy so the two remain consistent.

### Account deletion requirement

The separate Play **account deletion requirement** applies to apps that allow
users to create an account. This App does not, so there is no developer-held
account to delete. If you later add accounts, cloud saves, or a backend, you
must provide an in-app account deletion path and a web deletion request URL,
and update both the policy and the Data safety form.

---

## 5. Target audience, content, and child-directed settings

Play Console → **App content** → **Target audience and content**.

- Choose the actual target age groups. Do not include children unless the game
  is genuinely designed for them.
- If the app is directed to children or appears in the Families programme:
  - Configure AdMob for child-directed treatment.
  - Disable personalised advertising.
  - Use an appropriate maximum ad content rating.
  - Keep the Play target audience, ads declaration, and Data safety answers
    consistent.
- If the app is for a general audience, do not mark it as child-directed merely
  to avoid disclosures. The declarations must match the actual configuration.

---

## 6. Before enabling production ads — checklist

- [ ] AdMob account and app are set up; production ad unit IDs are used.
- [ ] Google Mobile Ads SDK is added to the release build.
- [ ] UMP consent flow is implemented and tested in EEA, UK, and Switzerland.
- [ ] Consent choices are honoured before ads are requested.
- [ ] Android advertising ID permissions and manifest entries are correct.
- [ ] Privacy Policy URL in Play Console is
      `https://portifolio-mridul-ps-projects.vercel.app/skyward-airport-tycoon/privacy-policy`.
- [ ] Policy Section 3 is updated with the actual SDK version, ad formats, and
      any mediation partners.
- [ ] Policy Section 6 matches the consent tool and opt-out controls actually
      shipped.
- [ ] Ads declaration is set to **Yes**.
- [ ] Data safety answers match the release build.
- [ ] Target audience and content rating are complete and accurate.
- [ ] Store listing does not contradict the policy or the ads declaration.
- [ ] Policy effective date and version are bumped if the text changed.
- [ ] A test build is reviewed end-to-end before rollout.

---

## 7. After any material change

Update the policy and the Play declarations together when:

- the SDK version or ad formats change;
- mediation or additional ad networks are added;
- analytics, crash reporting, login, cloud save, or payments are added;
- the target audience or child-directed status changes;
- Google updates its data disclosure or Data safety definitions.

Keep the policy as the single source of truth and make sure the Play Console
answers never claim less collection or sharing than the SDK actually performs.

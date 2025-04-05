# Localisation Reflection

## How does react-i18next handle translations?

react-i18next manages translations by mapping keys (like "welcome") to language-specific values stored in JSON files. It detects the device’s language (or a stored preference), loads the appropriate file, and uses hooks like `useTranslation()` to retrieve the text.

## What challenges arise when localising a React Native app?

- Managing and updating translation files for many languages.
- Right-to-left (RTL) layout support.
- Handling language switching without reloading the app.
- Translations in nested components or dynamic text.
- Storing user preferences across sessions.

## How would you test localisation support in an app?

- Manually change device language and verify correct text is displayed.
- Use unit tests to check `t()` returns expected output.
- Automate UI snapshots for each language (via Detox or Appium).
- Test switching languages dynamically and persisting choice.

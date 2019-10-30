export interface Shortcode {
  key: string;
  defaultValue: string;
  value?: string;
}

export const extractShortcodes = (string: string): Shortcode[] => {
  return string.match(/\[(.*?)\]/g).map(shortcode => ({
    key: shortcode,
    defaultValue: shortcode,
  }));
};

export const generateShortcodesMarkup = (string: string): string => {
  const shortcodes = extractShortcodes(string).map(shortcode => ({
    ...shortcode,
    value: '<span class="shortcode">' + shortcode.defaultValue + '</span>',
  }));

  return replaceShortCodes(string, shortcodes);
};

export const replaceShortCode = (string: string, shortcode: Shortcode): string => {
  return string.replace(
    shortcode.key,
    shortcode.value && shortcode.value.trim() !== '' ? shortcode.value : shortcode.defaultValue
  );
};

export const replaceShortCodes = (string: string, shortcodes: Shortcode[]): string => {
  return shortcodes.reduce((accumulator: string, currentValue: Shortcode) => {
    return replaceShortCode(accumulator, currentValue);
  }, string);
};

export const getPrettyShortcodeKey = (shortcode: Shortcode): string => {
  return (
    shortcode.key
      .slice(1)
      .charAt(0)
      .toUpperCase() + shortcode.key.slice(2, shortcode.key.length - 1)
  );
};

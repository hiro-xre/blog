export const useTheme = () => {
  const colorMode = useColorMode();

  const isDark = computed({
    get() {
      return colorMode.value === 'dark';
    },
    set(newValue) {
      colorMode.value = newValue ? 'dark' : 'light';
    },
  });

  return {
    isDark,
    colorMode,
  };
};

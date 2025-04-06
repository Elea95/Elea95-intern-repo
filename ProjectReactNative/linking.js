const linking = {
    prefixes: ['focusbear://', 'https://focusbear.app'], // URL schemes
    config: {
      screens: {
        Home: 'home',
        Details: 'details/:id', // dynamic params
        Profile: 'settings/profile',
      },
    },
  };
  
  export default linking;
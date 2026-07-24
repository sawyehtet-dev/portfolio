import '@testing-library/jest-dom';

// Nothing else to stub. The site touches no matchMedia, AudioContext, or Web
// Storage, and jsdom covers what the components do use. (Mocks for all three
// lived here for the removed desktop simulation.)

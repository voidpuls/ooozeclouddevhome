'use client';

import { colorsTuple, createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    Paper: {
      classNames: {
        root: 'paper'
      },
      defaultProps: {
        radius: 20
      }
    },
    Image: {
      defaultProps: {
        radius: 15
      }
    },
    Container: {
      defaultProps: {
        size: 1200
      }
    },
    Anchor: {
      defaultProps: {
        td: "none"
      }
    },
    HoverCard: {
      defaultProps: {
        radius: 15
      }
    },
    Button: {
      classNames: {
        root: 'button'
      },
      defaultProps: {
        radius: 15
      }
    },
    Title: {
      defaultProps: {
        fw: 500,
        c: "bright"
      }
    },
    ActionIcon: {
      classNames: {
        root: 'action-icon'
      }
    },
    SegmentedControl: {
      classNames: {
        root: 'segmented-tabs__root',
        control: 'segmented-tabs__control',
        label: 'segmented-tabs__label',
        indicator: 'segmented-tabs__indicator'
      }
    },
    Drawer: {
      styles: {
        content: {
          borderRadius: 0
        },
        header: {
          padding: "1rem 2rem"
        }
      }
    },
    Input: {
      classNames: {
        input: "input"
      }
    },
    Alert: {
      classNames: {
        root: 'alert'
      }
    },
    Accordion: {
      classNames: {
        item: 'accordion-item'
      }
    },
    Pagination: {
      classNames: {
        control: 'pagination-control'
      }
    }
  },
  primaryColor: "primary",
  colors: {
    primary: colorsTuple("#A369F9")
  }
});

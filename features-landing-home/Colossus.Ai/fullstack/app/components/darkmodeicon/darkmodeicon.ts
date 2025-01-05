export type ThemeProperties = {
    circle: {
      r: number;
    };
    mask: {
      cx: string;
      cy: string;
    };
    svg: {
      transform: string;
    };
    lines: {
      opacity: number;
    };
  };
  
  export type DefaultProperties = {
    dark: ThemeProperties;
    light: ThemeProperties;
    springConfig: {
      mass: number;
      tension: number;
      friction: number;
    };
  };
  
  export const defaultProperties: DefaultProperties = {
    dark: {
      circle: {
        r: 9,
      },
      mask: {
        cx: '50%',
        cy: '23%',
      },
      svg: {
        transform: 'rotate(40deg)',
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: '100%',
        cy: '0%',
      },
      svg: {
        transform: 'rotate(90deg)',
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };
  
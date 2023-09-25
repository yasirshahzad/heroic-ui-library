/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export const isDev = process.env.NODE_ENV === 'development';
export const baseUrl = isDev ? 'https://mainbackend.woogiu.com/woogi/0.1/actor/cgi.php' : '/woogi/0.1/actor/cgi.php';
export const top = (window as any).top;

export const addKeyDownListener = (handleOnKeyDown: (ev: KeyboardEvent) => void, dev = false) => {
  if (dev) {
    window.addEventListener('keydown', handleOnKeyDown);
  } else if (!isDev && top?.getCanvas && typeof top.getCanvas == 'function') {
    top.getCanvas?.().addEventListener('keydown', handleOnKeyDown);
  }
};

export const removeKeyDownListener = (handleOnKeyDown: (ev: KeyboardEvent) => void, dev = false) => {
  if (dev) {
    window.removeEventListener('keydown', handleOnKeyDown);
  } else if (!isDev && top?.getCanvas && typeof top.getCanvas == 'function') {
    top.getCanvas?.().removeEventListener('keydown', handleOnKeyDown);
  }
};

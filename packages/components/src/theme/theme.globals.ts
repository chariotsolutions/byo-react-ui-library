import { css } from "@linaria/core";

export const globals = css`
  :global() {
    :root {
      --font-size: 16px;
      --font-family: "'Open Sans' sans-serif";

      --color-primary: #20a4f3;
      --color-secondary: #59f8e8;
    }
  }
`;

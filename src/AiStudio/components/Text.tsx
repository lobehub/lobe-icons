'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 181 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M172.721 19.07c-1.172 0-2.221-.266-3.149-.798a5.779 5.779 0 01-2.169-2.237c-.517-.943-.775-1.993-.775-3.15 0-1.155.258-2.205.775-3.149a5.619 5.619 0 012.169-2.213c.928-.548 1.977-.822 3.149-.822 1.171 0 2.221.274 3.149.822a5.777 5.777 0 012.168 2.236c.518.944.776 1.986.776 3.127 0 1.156-.258 2.206-.776 3.15a5.776 5.776 0 01-2.168 2.236c-.928.532-1.978.799-3.149.799zm0-2.304c.639 0 1.232-.153 1.78-.457.548-.32.981-.768 1.301-1.346.335-.594.502-1.286.502-2.077 0-.791-.167-1.476-.502-2.054a3.304 3.304 0 00-1.301-1.324 3.472 3.472 0 00-1.78-.479c-.639 0-1.232.16-1.78.48a3.458 3.458 0 00-1.324 1.323c-.319.578-.479 1.263-.479 2.054 0 .791.16 1.483.479 2.077a3.629 3.629 0 001.324 1.346 3.606 3.606 0 001.78.457zM162.999 5.378a1.69 1.69 0 01-1.21-.48 1.69 1.69 0 01-.479-1.21c0-.47.16-.866.479-1.186a1.65 1.65 0 011.21-.502c.471 0 .867.167 1.186.502.335.32.503.715.503 1.187 0 .471-.168.875-.503 1.21a1.61 1.61 0 01-1.186.479zm-1.255 1.688h2.51v11.64h-2.51V7.066zM152.429 19.07c-1.05 0-2.001-.266-2.853-.798-.852-.533-1.529-1.263-2.031-2.191-.487-.944-.73-2.008-.73-3.195 0-1.187.243-2.244.73-3.172.502-.944 1.179-1.682 2.031-2.214.852-.533 1.803-.799 2.853-.799.821 0 1.559.183 2.213.548.655.365 1.149.814 1.484 1.346h.114l-.114-1.643V2.365h2.51v16.34h-2.396V17.2h-.114c-.335.517-.829.959-1.484 1.324-.654.365-1.392.547-2.213.547zm.365-2.305c.608 0 1.171-.16 1.689-.479.532-.32.958-.776 1.278-1.37.319-.592.479-1.27.479-2.03 0-.76-.16-1.43-.479-2.008-.32-.594-.746-1.05-1.278-1.37a3.158 3.158 0 00-1.689-.48c-.609 0-1.179.16-1.712.48-.532.32-.958.776-1.278 1.37-.319.578-.479 1.247-.479 2.008 0 .76.16 1.438.479 2.03.32.594.746 1.05 1.278 1.37.533.32 1.103.48 1.712.48zM138.527 19.07c-1.415 0-2.495-.418-3.241-1.255-.73-.852-1.095-2.03-1.095-3.537V7.066h2.51v6.87c0 .943.221 1.65.662 2.122.456.472 1.05.707 1.78.707.593 0 1.118-.152 1.575-.456.456-.32.806-.738 1.049-1.255a3.856 3.856 0 00.366-1.666V7.066h2.51v11.64h-2.373v-1.507h-.137c-.32.548-.814.997-1.484 1.346a4.517 4.517 0 01-2.122.525zM130.115 18.888a4.208 4.208 0 01-1.461-.251c-.457-.167-.829-.388-1.118-.662-.655-.654-.982-1.544-.982-2.67V9.28h-2.031V7.066h2.031V3.78h2.511v3.286h2.83V9.28h-2.83v5.477c0 .624.121 1.065.365 1.324.228.304.624.456 1.187.456.258 0 .486-.03.684-.09.198-.077.411-.191.639-.343v2.442c-.502.228-1.11.342-1.825.342zM117.888 19.07a6.03 6.03 0 01-3.652-1.186c-1.08-.791-1.825-1.902-2.236-3.332l2.419-.981c.243.897.669 1.635 1.278 2.213.624.563 1.369.845 2.236.845.807 0 1.491-.206 2.054-.617.563-.426.845-1.004.845-1.734 0-.67-.251-1.217-.753-1.643-.487-.441-1.347-.883-2.579-1.324l-1.027-.365c-1.096-.38-2.016-.928-2.762-1.643-.745-.715-1.118-1.658-1.118-2.83 0-.806.221-1.552.662-2.236.441-.685 1.05-1.225 1.826-1.62.791-.412 1.681-.617 2.67-.617 1.43 0 2.571.35 3.423 1.05.852.684 1.423 1.46 1.712 2.328l-2.305.981c-.168-.517-.487-.974-.959-1.37-.471-.395-1.08-.593-1.826-.593-.745 0-1.376.19-1.894.57-.502.381-.753.868-.753 1.461 0 .563.228 1.027.685 1.393.456.365 1.171.715 2.145 1.05l1.027.342c1.4.487 2.48 1.126 3.241 1.917.776.776 1.164 1.818 1.164 3.126 0 1.065-.274 1.963-.822 2.693a4.978 4.978 0 01-2.1 1.598 6.677 6.677 0 01-2.601.525zM102.221 2.365h2.556v16.34h-2.556V2.365zM90.94 2.365h2.922L100 18.705h-2.83l-1.46-4.176h-6.596l-1.484 4.176h-2.83l6.14-16.34zm3.903 9.79l-1.734-4.86-.64-1.895h-.136l-.64 1.894-1.734 4.862h4.884zM73.43 19.07c-1.141 0-2.168-.266-3.081-.798a5.758 5.758 0 01-2.123-2.191c-.502-.943-.753-2-.753-3.172 0-1.111.244-2.138.73-3.081a5.898 5.898 0 012.078-2.282c.882-.563 1.886-.845 3.012-.845 1.171 0 2.183.259 3.035.776A4.985 4.985 0 0178.291 9.6c.456.897.684 1.909.684 3.035 0 .213-.022.48-.068.799h-8.923c.091 1.08.471 1.917 1.14 2.51a3.57 3.57 0 002.374.867c.715 0 1.332-.16 1.849-.48a3.745 3.745 0 001.278-1.345l2.122 1.004c-.547.958-1.263 1.711-2.145 2.259-.882.548-1.94.822-3.172.822zm2.99-7.553a2.82 2.82 0 00-.389-1.21c-.228-.41-.578-.753-1.05-1.027-.456-.274-1.019-.41-1.688-.41-.806 0-1.491.243-2.054.73-.548.471-.928 1.11-1.141 1.917h6.322zM62.763 2.365h2.51v16.34h-2.51V2.365zM54.016 24c-1.43 0-2.616-.327-3.56-.981-.928-.654-1.552-1.43-1.871-2.328l2.35-.981a3.148 3.148 0 001.164 1.46c.548.38 1.187.57 1.917.57 1.065 0 1.895-.319 2.488-.958.609-.624.913-1.506.913-2.647v-1.073h-.137c-.38.548-.89.982-1.53 1.301-.623.304-1.346.457-2.167.457a5.185 5.185 0 01-2.716-.754c-.837-.502-1.506-1.21-2.008-2.122-.487-.928-.73-1.986-.73-3.172 0-1.187.243-2.237.73-3.15.502-.928 1.171-1.643 2.008-2.145a5.07 5.07 0 012.716-.776c.806 0 1.529.16 2.168.48.639.319 1.149.753 1.529 1.3h.137V7.066h2.396v11c0 1.263-.243 2.336-.73 3.218a4.81 4.81 0 01-2.054 2.031c-.867.457-1.872.685-3.013.685zm.023-7.463c.609 0 1.172-.144 1.69-.433a3.281 3.281 0 001.231-1.301c.305-.578.457-1.255.457-2.031 0-1.187-.327-2.107-.982-2.762-.639-.67-1.437-1.004-2.396-1.004-.623 0-1.194.152-1.711.457-.518.289-.928.715-1.233 1.278-.304.563-.456 1.24-.456 2.03 0 .792.152 1.469.456 2.032a3.28 3.28 0 001.233 1.3c.517.29 1.087.434 1.711.434zM40.36 19.07c-1.172 0-2.222-.266-3.15-.798a5.778 5.778 0 01-2.168-2.237c-.517-.943-.776-1.993-.776-3.15 0-1.155.259-2.205.776-3.149a5.618 5.618 0 012.168-2.213c.928-.548 1.978-.822 3.15-.822 1.17 0 2.22.274 3.149.822a5.778 5.778 0 012.168 2.236c.517.944.776 1.986.776 3.127 0 1.156-.259 2.206-.776 3.15a5.778 5.778 0 01-2.168 2.236c-.928.532-1.978.799-3.15.799zm0-2.304c.638 0 1.232-.153 1.78-.457.547-.32.98-.768 1.3-1.346.335-.594.502-1.286.502-2.077 0-.791-.167-1.476-.502-2.054a3.303 3.303 0 00-1.3-1.324 3.472 3.472 0 00-1.78-.479c-.64 0-1.233.16-1.78.48a3.458 3.458 0 00-1.324 1.323c-.32.578-.48 1.263-.48 2.054 0 .791.16 1.483.48 2.077a3.629 3.629 0 001.323 1.346 3.606 3.606 0 001.78.457zM26.497 19.07c-1.172 0-2.221-.266-3.15-.798a5.778 5.778 0 01-2.168-2.237c-.517-.943-.775-1.993-.775-3.15 0-1.155.258-2.205.776-3.149a5.618 5.618 0 012.168-2.213c.928-.548 1.977-.822 3.149-.822s2.221.274 3.15.822a5.779 5.779 0 012.167 2.236c.518.944.776 1.986.776 3.127 0 1.156-.258 2.206-.776 3.15a5.778 5.778 0 01-2.168 2.236c-.928.532-1.977.799-3.149.799zm0-2.304c.639 0 1.232-.153 1.78-.457.548-.32.981-.768 1.3-1.346.336-.594.503-1.286.503-2.077 0-.791-.167-1.476-.502-2.054a3.303 3.303 0 00-1.3-1.324 3.472 3.472 0 00-1.781-.479c-.639 0-1.232.16-1.78.48a3.456 3.456 0 00-1.324 1.323c-.32.578-.479 1.263-.479 2.054 0 .791.16 1.483.48 2.077a3.627 3.627 0 001.323 1.346 3.606 3.606 0 001.78.457zM10.558 19.07c-1.552 0-2.982-.372-4.29-1.118a8.49 8.49 0 01-3.127-3.058C2.381 13.586 2 12.133 2 10.535c0-1.597.38-3.043 1.141-4.336a8.435 8.435 0 013.127-3.08C7.576 2.372 9.006 2 10.558 2c1.232 0 2.381.22 3.446.662 1.065.441 1.955 1.057 2.67 1.848l-1.78 1.78a5.401 5.401 0 00-1.917-1.369c-.73-.32-1.544-.48-2.442-.48-1.05 0-2.03.252-2.944.754a5.702 5.702 0 00-2.19 2.145c-.548.928-.822 1.993-.822 3.195 0 1.202.274 2.267.821 3.195a5.702 5.702 0 002.191 2.146 6.057 6.057 0 002.967.753c.974 0 1.788-.145 2.442-.434a6.2 6.2 0 001.757-1.164c.335-.335.617-.753.845-1.255.243-.502.403-1.05.479-1.643h-5.546V9.85H18.5c.076.426.114.867.114 1.323 0 1.035-.16 2.032-.479 2.99a6.294 6.294 0 01-1.53 2.465c-1.536 1.628-3.552 2.442-6.047 2.442z" />
    </svg>
  );
});

export default Icon;

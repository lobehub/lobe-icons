'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 90 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M44.439 12.506h7.437l2.819.017c.872.017 1.029.05 1.15.115l.03.018c.135.082.307.254.39.389l.044.086c.063.15.088.41.099 1.428l.006 2.37v4.249h-3.293v-1.196h2.096l-.006-4.98c-.01-.877-.035-1.062-.103-1.146l-.026-.027c-.11-.096-.376-.12-2.297-.126h-4.23V22h-1.197l-.015-4.126-.023-4.134-1.437-.023-1.444-.015v-1.196zm-4.267-.284c.18.292.195.658.038.95-.026.056-.182.228-.41.46l-.21.211c-.189.187-.406.396-.63.607l-.719.677c-.266.255-.44.43-.449.452-.014.035.827.063 1.968.067h2.433v1.196h-4.94v5.008h-4.266v-1.196h3.069v-3.812h-6.961v-1.196h6.826l1.748-1.629c.54-.513.854-.845.842-.905l-.01-.018c-.072-.089-.614-.103-3.778-.124l-3.757-.015v-1.196l6.776.004c2.192.017 2.21.094 2.43.46zm23.405-4.051c.187.082.382.246.472.388l.035.062c.07.136.097.312.108.975l.006 1.412v2.694h-1.646v1.645h1.646v1.196h-1.646l.003 1.9c.007.548.027.94.057.94l.059-.01a26.6 26.6 0 00.655-.165l.895-.243c.093-.03.119.004.125.337l.002.881-2.828.733-2.935.77V20.43l.673-.164v-5.667h1.198v5.323l.27-.052c.15-.023.351-.075.449-.113l.18-.074v-5.98h-2.321V8.02l3.146.003c.989.01 1.175.041 1.397.147zm3.466-.225h1.197l-.001.5-.383 11.567c-.01.234-.016.385-.02.432-.067.882-.516 1.174-1.819 1.181h-.846V20.43h.48c.583 0 .845-.09.943-.314l.006-.044c.003-.038.008-.098.012-.178l.084-1.746.257-6.673c.048-1.4.082-2.56.089-3.07v-.459zm3.293 0l.015 6.227.022 6.22 1.984.045v1.188h-3.219V7.946h1.198zm13.9.023c-.023.052-.06.329-.09.598l-.053.5 2.153.003c1.064.01 1.233.071 1.512.39l.242.295v11.796h-3.293v-1.196h2.095l-.006-8.235c-.011-1.514-.043-1.654-.128-1.73-.113-.104-.31-.124-1.26-.126l-.82.005c-.418.008-.705.024-.705.04l-1.467 10.816-.045.277h-1.264l.061-.352 1.48-10.577.038-.21h-1.422V9.069h1.564l.045-.24c.022-.134.067-.396.097-.583l.06-.336.878-.028c.284 0 .351.022.327.088zm-3.571 4.089v1.196h-4.027l-.062.349-.71 4.91a80.2 80.2 0 00-.216 1.588c0 .09.277.105 1.564.105l.94-.005c.543-.01.665-.039.786-.127l.228-.175v-2.608h1.198l-.003 2.472c-.007.741-.032.93-.11 1.087l-.094.156c-.24.363-.473.393-2.73.396l-2.04-.004c-.97-.007-1.143-.032-1.16-.108l-.001-.015c0-.138 1.042-7.205 1.153-7.814l.018-.1c.007-.099-.082-.107-.644-.107h-.976v-1.196h6.886zm-14.647 1.724c.247.01.351.04.351.092l-.202 2.392-.21 2.295h-1.16v-.239c0-.084.032-.507.082-1.079l.292-3.294c0-.15.026-.17.468-.172l.379.005zm4.76-.005h1.197l.05.348c.06.531.276 2.817.367 3.85l.04.504c0 .046-.16.075-.462.08l-.137.002c-.33 0-.599-.022-.599-.045l-.412-4.38-.044-.359zm-10.546-4.56l.002 2.1c.007.642.026 1.119.05 1.137.022.03.651.052 1.385.052H63v-2.104c-.004-.867-.022-.96-.138-1.047l-.027-.018c-.115-.084-.33-.112-1.006-.118l-1.598-.002zm5.314-.15l.247.005c.247.01.351.04.351.093l.132 1.226c.07.622.152 1.313.193 1.634l.057.407H65.33l-.064-.413c-.09-.666-.318-2.691-.318-2.832 0-.097.097-.12.599-.12zm6.81.12l-.032.37c-.067.649-.216 1.953-.286 2.462l-.063.413h-1.19l.105-.804c.078-.634.186-1.589.239-2.092l.03-.334c0-.109.068-.13.469-.134h.13c.502 0 .599.022.599.12zm-24.923-1.24v.822h5.987v-.823h1.198v.823h2.77v1.196h-2.77v1.719h-1.19l-.045-1.682-2.972-.022-2.978-.015v1.719h-1.19l-.045-1.682-2.358-.045V8.77h2.395v-.823h1.198zm-11.153 0v.814l4.164.039c1.121.018 1.263.049 1.442.155.399.238.516.507.53 1.326l.002 1.03H41.22v-.554c0-.444-.018-.555-.125-.644l-.04-.029c-.127-.09-.615-.113-3.66-.118l-7.103-.001v1.345h-1.197V8.77h5.988v-.823h1.197zm43.711.298v1.196h-5.538V8.245h5.538zM38.526.77v.822h.262c.198 0 .246.005.258.144l.004.155-.004.156c-.012.139-.06.143-.258.143h-.262v1.466c.006.834.049.852.381.852.105 0 .135.04.141.245l.002.45-.42-.052a2.322 2.322 0 01-.56-.12c-.204-.112-.283-.5-.292-1.522V2.19h-.869l-.936 2.13-.928 2.131h-.71l.141-.351c.083-.202.217-.523.3-.718l.157-.366-1.4-3.327c-.03-.074.075-.097.367-.097h.404l.773 1.94c.217.53.275.619.321.533l.545-1.344.45-1.091 1.384-.045V.77h.749zm20.126 1.106c.09.068.068.12-.112.33l-.225.253-.329-.179c-.599-.314-1.168-.12-1.437.486-.172.381-.15.83.052 1.226.27.508.98.673 1.482.336l.262-.18.195.203c.105.112.195.231.195.276 0 .187-1.026.606-1.34.546l-.307-.06a1.7 1.7 0 01-1.228-.994c-.074-.165-.12-.5-.12-.83 0-.486.03-.59.248-.95.531-.889 1.744-1.098 2.664-.463zM41.856 1.6c.614.164 1.16.957 1.16 1.667v.269l-2.106.002c-.872.012-.833.076-.61.446.366.62 1.332.688 1.946.135.172-.157.344-.12.546.127.082.097.067.15-.112.336-.382.397-1.228.666-1.722.546-.666-.157-1.063-.44-1.332-.95-.225-.425-.217-1.3.007-1.741.397-.763 1.28-1.099 2.223-.837zm18.967-.083c1.055 0 1.751.606 1.856 1.615l.045.404h-2.867v.194c0 .127.09.284.262.449.45.426 1.093.433 1.67.03l.321-.225.225.15c.12.09.217.187.217.217s-.09.142-.202.254c-.412.389-1.243.62-1.82.508-.86-.172-1.421-.882-1.421-1.809 0-1.017.74-1.779 1.714-1.787zm-9.985.27l.162.107c.149.094.171.078.174-.052v-.063c0-.144.024-.179.21-.185l.39-.002v3.439h-.337c-.249 0-.32-.017-.334-.107l-.003-.043c0-.186-.037-.186-.352.008-.404.254-1.085.269-1.564.045-.711-.344-1.063-.994-.98-1.847.052-.575.321-1.054.748-1.3.584-.344 1.377-.344 1.886 0zM29.843 5.038V0l1.437.062c.602.032.779.074 1.026.207.733.374.92 1.338.374 1.914-.105.112-.142.194-.09.21.382.126.764.74.771 1.218 0 .396-.284.897-.658 1.158l-.33.225-2.53.044zm25.246-2.99c.203.272.269.636.277 1.655v1.328h-.673v-.987l-.006-.412c-.032-1.204-.198-1.48-.788-1.48-.292 0-.374.038-.561.248l-.217.239V5.03h-.674V1.592h.337c.218 0 .31.022.332.085l.005.035c0 .067.022.105.06.09.838-.434 1.452-.352 1.908.246zM44.424.022c2.432 0 3.458.823 3.368 2.699-.075 1.6-.996 2.31-2.987 2.31h-.89V.022h.509zm4.992 2.273c-.494.329-.659 1.189-.314 1.697.336.508 1.07.658 1.542.314.673-.509.643-1.585-.068-1.996-.307-.18-.89-.187-1.16-.015zm-18.824.553v1.525l1.2-.044c.392-.02.433-.061.604-.255.134-.15.217-.321.217-.463 0-.142-.083-.314-.217-.464l-.083-.091c-.152-.156-.254-.159-.928-.178l-.793-.03zM44.588.673v3.7l.659-.03c.472-.022.734-.075.958-.194.599-.307.853-.785.853-1.585 0-.628-.127-.972-.479-1.308-.32-.313-.602-.434-1.241-.51l-.75-.073zm-3.6 1.48c-.344.06-.816.47-.816.71l.005.05c.023.08.14.096.717.099h1.382l-.045-.164c-.143-.463-.711-.785-1.243-.695zm19.543.03c-.314.09-.674.456-.674.688 0 .117.052.138.717.141h1.372l-.075-.224c-.172-.493-.794-.77-1.34-.605zM30.59.673V2.19h.487c.27 0 .6-.045.734-.097.337-.142.449-.306.449-.658 0-.231-.052-.351-.195-.5-.137-.132-.227-.178-.545-.206l-.93-.056z"
          fill="#325AB4"
          fillRule="nonzero"
        ></path>
        <path
          d="M15.046 18.06l-1.594-.418v-7.64l1.706-.434c.936-.239 1.722-.433 1.76-.426.03 0 .052 2.1.052 4.672v4.673l-.165-.008c-.097 0-.89-.194-1.759-.419z"
          fill="#00C8D2"
          fillRule="nonzero"
        ></path>
        <path
          d="M7.614 16.14c0-2.572.022-4.68.06-4.68.03-.008.815.187 1.758.426l1.7.433-.016 3.805-.022 3.805-1.527.397c-.838.216-1.624.418-1.736.44l-.217.053v-4.68z"
          fill="#3C8CFF"
          fillRule="nonzero"
        ></path>
        <path
          d="M19.065 12.32c0-8.485.008-8.941.135-8.904.067.023.734.195 1.474.381.741.195 1.475.382 1.632.42l.277.074-.015 8.043-.022 8.051-1.52.389c-.83.217-1.616.411-1.736.441l-.225.052V12.32z"
          fill="#78E6DC"
          fillRule="nonzero"
        ></path>
        <path
          d="M2 12.35c0-4.396.022-7.992.06-7.992.03 0 .816.194 1.751.426l1.707.434v7.124c0 3.91-.015 7.116-.03 7.116-.023 0-.816.202-1.759.441L2 20.34v-7.99z"
          fill="#325AB4"
        ></path>
      </g>
    </svg>
  );
});

export default Icon;

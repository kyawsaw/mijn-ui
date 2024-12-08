import { IconSvgProps } from "@/types";

function Logo(props: IconSvgProps) {
  return (
    <svg
      viewBox="0 0 65 69"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M29.59 5.973a5.818 5.818 0 01-1.703 4.114l-4.966 4.966c-1.833 1.833-4.966.535-4.966-2.057v-2.203c0-1.543.613-3.023 1.704-4.114l4.966-4.966C26.457-.12 29.59 1.178 29.59 3.77v2.203zM.5 28.248c0-1.543.613-3.023 1.704-4.114l4.966-4.967c1.833-1.832 4.966-.534 4.966 2.057v6.92c0 1.296 1.567 1.945 2.483 1.029l10.006-10.006c1.832-1.832 4.966-.534 4.966 2.057v17.102c0 .76.918 1.14 1.454.603.537-.537 1.455-.157 1.455.602v.109c0 .476-.189.932-.526 1.269l-9.053 9.053c-1.833 1.833-4.966.535-4.966-2.057V32.258c0-1.296-1.567-1.945-2.483-1.028l-2.484 2.483a2.91 2.91 0 00-.852 2.057v5.112a5.818 5.818 0 01-1.704 4.114l-4.966 4.966C3.634 51.795.5 50.497.5 47.905V28.248z" />
      <path d="M64.5 21.224c0-2.591-3.133-3.89-4.966-2.057L49.529 29.173c-.917.916-2.484.267-2.484-1.029v-6.92c0-2.591-3.133-3.89-4.966-2.057l-9.053 9.054a1.794 1.794 0 00-.526 1.269v.109c0 .759.918 1.14 1.455.602.536-.537 1.454-.156 1.454.603V52.02l-3.761 3.76c-.76.76-2.057.222-2.057-.851 0-2.148-2.596-3.223-4.114-1.705l-5.818 5.819a5.818 5.818 0 00-1.704 4.114v2.203c0 2.592 3.133 3.89 4.966 2.057l22.42-22.42a5.818 5.818 0 001.704-4.115V35.77c0-.772.307-1.512.852-2.057l2.484-2.483c.916-.916 2.483-.268 2.483 1.028v15.647c0 2.592 3.133 3.89 4.966 2.057l4.966-4.966a5.818 5.818 0 001.704-4.114V21.225zM35.41 12.996c0 2.592 3.133 3.89 4.965 2.057l4.966-4.966a5.818 5.818 0 001.704-4.114V3.77c0-2.592-3.133-3.89-4.966-2.057l-4.966 4.966a5.818 5.818 0 00-1.704 4.114v2.203z" />
    </svg>
  );
}

export default Logo;

type buttonProps = {
     type: "button";
     customStyles?: string;
     text: string;
     icon?: JSX.Element | string;
     key?: any;
     onClick?: () => void
}
const PrimaryButton = ({type,customStyles,text,icon,key,onClick} : buttonProps) => {
    const baseStyle = 'outline-none lg:bg-primary text-white px-3 py-1'
  return (
      <button key={key} onClick={onClick} type={type} className={`${customStyles} ${baseStyle}`}>
              {text} {icon}
      </button>
  )
}

export  {PrimaryButton}
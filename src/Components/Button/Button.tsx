type buttonProps = {
     type: "button";
     customStyles?: string;
     text: string;
     icon?: JSX.Element;
     key?: any;
     onClick?: () => void
}
const PrimaryButton = ({type,customStyles,text,icon,key,onClick} : buttonProps) => {
    const baseStyle = 'rounded-xl outline-none text-xl font-semibold bg-primary text-white px-7 py-3'
  return (
      <button key={key} onClick={onClick} type={type} className={`${customStyles} ${baseStyle}`}>
              {text} {icon}
      </button>
  )
}

export  {PrimaryButton}
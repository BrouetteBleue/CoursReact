export function Chiffre(props) {

    const classeBase = "flex flex-row rounded-full p-8 px-10 text-center item-center text-white text-4xl font-bold "
    let classC = "";

    if(props.color === undefined){
        classC = classeBase+" bg-slate-900";
    }else{
         classC = classeBase+" "+props.color;
    }

  return (
    <div className={classC}>
        {props.text}
    </div>
  );
}
;
import "./myLabel.css";

export interface MyLabelProps {
    label: string
        /**
   * tamano del label
   */
    size: "normal" | "h1" | "h2"
          /**
   * Si quiere todo en mayus
   */
    allCaps: boolean
              /**
   * Colores basicos del boton
   */
    color? : "primary" | "secondary" | "tertiary" 

}

export const MyLabel = ({ label = "No Label", size = "normal", allCaps= false, color = "primary", ...props }: MyLabelProps) => {
    return (
        <span {...props} className={` label ${size} ${color}`}>
          { allCaps ? label.toUpperCase() : label}
      </span>
  )
}

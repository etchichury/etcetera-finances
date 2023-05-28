import { ReactNode, forwardRef } from "react"
import { DialogModal } from "./styles"

type BaseModalProps = {
  children: ReactNode
  show?: boolean
}

const BaseModal = forwardRef<HTMLDialogElement, BaseModalProps>(
  (props, ref) => {
    return (
      <DialogModal open={props.show} ref={ref} {...props}>
        {props.children}
      </DialogModal>
    )
  }
)

export default BaseModal

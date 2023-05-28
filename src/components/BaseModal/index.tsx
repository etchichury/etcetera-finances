import { ReactNode, forwardRef } from "react"
import { DialogModal } from "./styles"

type BaseModalProps = {
  children: ReactNode
}

const BaseModal = forwardRef<HTMLDialogElement, BaseModalProps>(
  (props, ref) => {
    return (
      <DialogModal ref={ref} {...props}>
        {props.children}
      </DialogModal>
    )
  }
)

export default BaseModal

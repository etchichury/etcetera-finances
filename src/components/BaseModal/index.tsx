import { ReactNode, useRef } from "react"
import useOutsideClick from "src/hooks/useOutsideClick"

type BaseModalProps = {
  children: ReactNode
  setShow: (value: boolean) => void
}

const BaseModal = ({ children, setShow }: BaseModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  useOutsideClick(modalRef, () => {
    setShow(false)
  })

  return <div>{children}</div>
}

export default BaseModal

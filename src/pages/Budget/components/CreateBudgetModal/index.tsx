import BaseModal from "src/components/BaseModal"
import Checkbox from "src/components/Checkbox"
import TextInput from "src/components/TextInput"

type CreateBudgetModalProps = {
  setShow: (value: boolean) => void
}

export const CreateBudgetModal = ({ setShow }: CreateBudgetModalProps) => {
  return (
    <BaseModal setShow={setShow}>
      <form>
        <TextInput />
        <Checkbox checkboxId='test' label='Test checkbox' />
      </form>
    </BaseModal>
  )
}

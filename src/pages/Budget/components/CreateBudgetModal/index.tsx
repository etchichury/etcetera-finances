import { useState } from "react"
import BaseModal from "src/components/BaseModal"
import Checkbox from "src/components/Checkbox"
import TextInput from "src/components/TextInput"

type CreateBudgetModalProps = {
  setShow: (value: boolean) => void
}

export const CreateBudgetModal = ({ setShow }: CreateBudgetModalProps) => {
  const [budgetName, setBudgetName] = useState<string>("")

  return (
    <BaseModal setShow={setShow}>
      <form>
        <TextInput
          placeholder='Budget name'
          value={budgetName}
          onChange={(event) => {
            setBudgetName(event.target.value)
          }}
        />
        <Checkbox checkboxId='test' label='Test checkbox' />
      </form>
    </BaseModal>
  )
}

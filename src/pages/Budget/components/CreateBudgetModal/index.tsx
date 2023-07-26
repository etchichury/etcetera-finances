import { forwardRef, useState } from "react"
import BaseModal from "components/BaseModal"
import Button from "components/Button"
import Checkbox from "components/Checkbox"
import TextInput from "components/TextInput"
import useInputMask from "hooks/useInputMask"
import { BudgetForm, FormButtonsContainer, FormInputsContainer } from "./styles"

export const CreateBudgetModal = forwardRef<HTMLDialogElement>(
  (_props, ref) => {
    const [budgetName, setBudgetName] = useState("")
    const [hasNoLimit, setHasNoLimtit] = useState(false)

    const { value: budgetLimit, setValue: setBudgetLimit } = useInputMask(
      "currency",
      ""
    )

    const cleanFormState = () => {
      setBudgetName("")
      setHasNoLimtit(false)
      setBudgetLimit("")
    }

    return (
      <BaseModal ref={ref} aria-label='create budget category'>
        <BudgetForm>
          <h1>Create budget category</h1>
          <FormInputsContainer>
            <TextInput
              label='Category name'
              id='categoryName'
              value={budgetName}
              onChange={(event) => {
                setBudgetName(event.target.value)
              }}
            />
            <TextInput
              label='Budget limit'
              id='budgetLimti'
              value={budgetLimit}
              disabled={hasNoLimit}
              onChange={(event) => setBudgetLimit(event.target.value)}
            />
            <Checkbox
              id='noLimit'
              label='No limit'
              checked={hasNoLimit}
              onChange={(e) => {
                setBudgetLimit("")
                setHasNoLimtit(e.target.checked)
              }}
            />
          </FormInputsContainer>
          <FormButtonsContainer>
            <Button appearance='primary' onClick={() => {}}>
              Create
            </Button>
            <Button
              appearance='secondary'
              formMethod='dialog'
              onClick={cleanFormState}
            >
              Cancel
            </Button>
          </FormButtonsContainer>
        </BudgetForm>
      </BaseModal>
    )
  }
)

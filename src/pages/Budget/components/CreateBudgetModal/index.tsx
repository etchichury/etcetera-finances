import { forwardRef, useState } from "react"
import BaseModal from "src/components/BaseModal"
import Button from "src/components/Button"
import Checkbox from "src/components/Checkbox"
import TextInput from "src/components/TextInput"
import { BudgetForm, FormButtonsContainer, FormInputsContainer } from "./styles"
import useInputMask from "src/hooks/useInputMask/"

export const CreateBudgetModal = forwardRef<HTMLDialogElement>(
  (_props, ref) => {
    const [budgetName, setBudgetName] = useState("")
    const [hasNoLimit, setHasNoLimtit] = useState(false)

    const { value: budgetLimit, onChangeValue: onChangeBudgetLimit } =
      useInputMask("currency", "0")

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
              onChange={(event) => onChangeBudgetLimit(event)}
            />
            <Checkbox
              id='noLimit'
              label='No limit'
              checked={hasNoLimit}
              onChange={(e) => setHasNoLimtit(e.target.checked)}
            />
          </FormInputsContainer>
          <FormButtonsContainer>
            <Button appearance='primary' onClick={() => {}}>
              Create
            </Button>
            <Button appearance='secondary' formMethod='dialog'>
              Cancel
            </Button>
          </FormButtonsContainer>
        </BudgetForm>
      </BaseModal>
    )
  }
)

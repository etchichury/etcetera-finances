import { useState } from "react"
import { ChevronCompactDown, ChevronCompactUp } from "@styled-icons/bootstrap"
import { BudgetCardContainer, Header } from "./styles"
import Button, { ButtonStyle } from "../Button"

type BudgetCardProps = {
  budgetName: string
}

const BudgetCard = ({ budgetName }: BudgetCardProps) => {
  const [showMenu, setShowMenu] = useState(false)

  // TODO: Use tertiary style once it's created
  const MoreInfoButton = () => (
    <Button
      style={ButtonStyle.Secondary}
      onClick={() => setShowMenu(!showMenu)}
    >
      {showMenu ? (
        <ChevronCompactDown size={28} />
      ) : (
        <ChevronCompactUp size={28} />
      )}
    </Button>
  )

  return (
    <BudgetCardContainer>
      <Header>
        {budgetName}
        <MoreInfoButton />
      </Header>
    </BudgetCardContainer>
  )
}

export default BudgetCard

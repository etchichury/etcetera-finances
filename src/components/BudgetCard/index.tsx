import { useState } from "react"
import { ChevronCompactDown, ChevronCompactUp } from "@styled-icons/bootstrap"
import { BudgetCardContainer, Header, RealProgressBar } from "./styles"
import Button, { ButtonStyle } from "../Button"

type BudgetCardProps = {
  budgetName: string
  currentProgress: number
}

const BudgetCard = ({ budgetName, currentProgress }: BudgetCardProps) => {
  const [showMenu, setShowMenu] = useState(false)

  const MoreInfoButton = () => (
    <Button style={ButtonStyle.Tertiary} onClick={() => setShowMenu(!showMenu)}>
      {showMenu ? (
        <ChevronCompactDown size={40} />
      ) : (
        <ChevronCompactUp size={40} />
      )}
    </Button>
  )

  return (
    <BudgetCardContainer>
      <Header>
        {budgetName}
        <MoreInfoButton />
      </Header>
      <RealProgressBar max={100} value={currentProgress} />
    </BudgetCardContainer>
  )
}

export default BudgetCard

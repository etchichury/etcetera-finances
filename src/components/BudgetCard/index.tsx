import { useState } from "react"
import { ChevronCompactDown, ChevronCompactUp } from "@styled-icons/bootstrap"
import {
  BudgetCardContainer,
  Header,
  ProgressBarContainer,
  Progress,
} from "./styles"
import Button, { ButtonStyle } from "../Button"

type BudgetCardProps = {
  budgetName: string
}

export type ProgressBarProps = {
  progressPercentage: number
}

const ProgressBar = ({ progressPercentage }: ProgressBarProps) => {
  return (
    <ProgressBarContainer>
      <Progress progressPercentage={progressPercentage} />
    </ProgressBarContainer>
  )
}

const BudgetCard = ({ budgetName }: BudgetCardProps) => {
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
      <ProgressBar progressPercentage={35} />
    </BudgetCardContainer>
  )
}

export default BudgetCard

import { MouseEvent, useRef, useState } from "react"
import { ChevronCompactDown, Plus } from "@styled-icons/bootstrap"
import {
  BudgetCardContainer,
  Header,
  ProgressBar,
  BudgetActions,
  AddExpanseButton,
  ClearAllButton,
  Table,
  ShowMoreButton,
  ContextualMenuContainer,
} from "./styles"
import { ButtonAppearance } from "src/components/Button"
import useOutsideClick from "src/hooks/useOutsideClick"

type BudgetCardProps = {
  budgetName: string
  budgetLimit: number
  currentProgress: number
}

type BudgetEntry = {
  description: string
  value: number
}

type TableProps = {
  entries: BudgetEntry[]
}

const BudgetCard = ({
  budgetName,
  budgetLimit,
  currentProgress,
}: BudgetCardProps) => {
  const [showMore, setshowMore] = useState(false)
  const [showEntryContextualMenu, setShowEntryContextualMenu] = useState(false)
  const [contextualMenuPos, setContextualMenuPos] = useState({ x: 0, y: 0 })

  const contextualMenuRef = useRef<HTMLDivElement>(null)

  const budgetEntries: BudgetEntry[] = [
    { description: "Almoço 06/08", value: 123.34 },
    { description: "Mercado 17/12", value: 800.34 },
  ]

  const handleOutsideClick = (_event: Event) => {
    setShowEntryContextualMenu(false)
  }

  useOutsideClick<HTMLDivElement>(contextualMenuRef, handleOutsideClick)

  const handleEntryRightClick = (event: MouseEvent<HTMLTableRowElement>) => {
    event.preventDefault()
    setContextualMenuPos({ x: event.clientX, y: event.clientY })
    setShowEntryContextualMenu(!showEntryContextualMenu)
  }

  const EntryContextualMenu = () => (
    <ContextualMenuContainer
      x={contextualMenuPos.x}
      y={contextualMenuPos.y}
      onBlur={() => setShowEntryContextualMenu(false)}
      ref={contextualMenuRef}
    >
      <div>Edit</div>
      <div>Delete</div>
    </ContextualMenuContainer>
  )

  const ExpensesTable = ({ entries }: TableProps) => (
    <Table>
      <tbody>
        {entries.map((entry) => (
          <tr
            onContextMenu={handleEntryRightClick}
            key={`${entry.description}-tr`}
          >
            <td>{entry.description}</td>
            <td>R$ {entry.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )

  return (
    <BudgetCardContainer>
      <Header>
        <h3>{budgetName}</h3>
        <ShowMoreButton
          appearance={ButtonAppearance.Tertiary}
          showMore={showMore}
          onClick={() => setshowMore((prevState) => !prevState)}
        >
          <ChevronCompactDown size={40} />
        </ShowMoreButton>
      </Header>
      <ProgressBar
        aria-label='current budget'
        max={budgetLimit}
        value={currentProgress}
      />
      {showMore && (
        <>
          <hr />
          <BudgetActions>
            <ClearAllButton
              appearance={ButtonAppearance.Secondary}
              onClick={() => {}}
            >
              Clear All
            </ClearAllButton>
            <AddExpanseButton
              appearance={ButtonAppearance.Secondary}
              onClick={() => {}}
            >
              <Plus size={36} />
            </AddExpanseButton>
          </BudgetActions>
          <ExpensesTable entries={budgetEntries} />
        </>
      )}
      {showEntryContextualMenu && <EntryContextualMenu />}
    </BudgetCardContainer>
  )
}

export default BudgetCard

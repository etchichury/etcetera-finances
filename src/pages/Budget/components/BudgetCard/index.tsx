import { MouseEvent, useRef, useState } from "react"
import {
  ChevronCompactDown,
  Plus,
  PencilFill,
  TrashFill,
} from "@styled-icons/bootstrap"
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
  BudgetTextualProgress,
  NoExpensesWarningContainer,
} from "./styles"
import useOutsideClick from "src/hooks/useOutsideClick"

type BudgetEntry = {
  id: number
  description: string
  value: number
}

type BudgetCardProps = {
  budgetName: string
  budgetLimit: number
  currentProgress?: number
  expenses?: BudgetEntry[]
}

const BudgetCard = ({
  budgetName,
  budgetLimit,
  currentProgress,
  expenses,
}: BudgetCardProps) => {
  const [showMore, setshowMore] = useState(false)
  const [showEntryContextualMenu, setShowEntryContextualMenu] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState<BudgetEntry>()
  const [contextualMenuPos, setContextualMenuPos] = useState({ x: 0, y: 0 })

  const contextualMenuRef = useRef<HTMLDivElement>(null)
  useOutsideClick<HTMLDivElement>(contextualMenuRef, () => {
    setContextualMenuPos({ x: 0, y: 0 })
    setShowEntryContextualMenu(false)
  })

  const handleEntryRightClick = (
    event: MouseEvent<HTMLTableRowElement>,
    entry: BudgetEntry
  ) => {
    event.preventDefault()

    const xPositionOffset = window.innerWidth < 1100 ? 90 : 350
    setContextualMenuPos({
      x: event.clientX - xPositionOffset,
      y: event.clientY,
    })

    setShowEntryContextualMenu(true)
    setSelectedEntry(entry)
  }

  const EntryContextualMenu = () => {
    const handleMenuItemClick = (action: string) => {
      setShowEntryContextualMenu(false)
      switch (action) {
        case "edit":
          return selectedEntry
        case "delete":
          return selectedEntry
      }
    }

    return (
      <ContextualMenuContainer
        x={contextualMenuPos.x}
        y={contextualMenuPos.y}
        onBlur={() => setShowEntryContextualMenu(false)}
        ref={contextualMenuRef}
        role='menu'
      >
        <div
          role='menuitem'
          tabIndex={0}
          onClick={() => handleMenuItemClick("edit")}
          onKeyDown={() => handleMenuItemClick("edit")}
        >
          <PencilFill size={20} /> Edit
        </div>
        <div
          role='menuitem'
          tabIndex={0}
          onClick={() => handleMenuItemClick("delete")}
          onKeyDown={() => handleMenuItemClick("delete")}
        >
          <TrashFill size={20} /> Delete
        </div>
      </ContextualMenuContainer>
    )
  }

  const ExpensesTable = () => (
    <Table>
      <tbody>
        {expenses!.map((entry) => (
          <tr
            onContextMenu={(event) => handleEntryRightClick(event, entry)}
            key={`${entry.description}-tr`}
          >
            <td>{entry.description}</td>
            <td>R$ {entry.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )

  //TODO: style warning
  const NoExpensesWarning = () => (
    <NoExpensesWarningContainer>
      <h5>No expenses for this Budget</h5>
    </NoExpensesWarningContainer>
  )

  return (
    <BudgetCardContainer>
      <Header>
        <h3>{budgetName}</h3>
        <ShowMoreButton
          appearance='tertiary'
          showMore={showMore}
          onClick={() => setshowMore((prevState) => !prevState)}
          aria-label={`${showMore ? "collapse" : "expand"} content`}
        >
          <ChevronCompactDown size={40} />
        </ShowMoreButton>
      </Header>
      <BudgetTextualProgress currentProgress={!!currentProgress}>
        {currentProgress && <h4>R$ {currentProgress}</h4>}
        <h4>R$ {budgetLimit}</h4>
      </BudgetTextualProgress>
      <ProgressBar
        aria-label='current budget'
        max={budgetLimit}
        value={currentProgress}
      />
      {showMore && (
        <>
          <hr />
          <BudgetActions>
            <ClearAllButton appearance='secondary' onClick={() => {}}>
              Clear All
            </ClearAllButton>
            <AddExpanseButton
              appearance='secondary'
              onClick={() => {}}
              aria-label='add entry'
            >
              <Plus size={36} />
            </AddExpanseButton>
          </BudgetActions>
          {expenses?.length ? <ExpensesTable /> : <NoExpensesWarning />}
        </>
      )}
      {showEntryContextualMenu && <EntryContextualMenu />}
    </BudgetCardContainer>
  )
}

export default BudgetCard

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
} from "./styles"
import { ButtonAppearance } from "src/components/Button"
import useOutsideClick from "src/hooks/useOutsideClick"

type BudgetCardProps = {
  budgetName: string
  budgetLimit: number
  currentProgress: number
}

type BudgetEntry = {
  id: number
  description: string
  value: number
}

  currentProgress?: number
}

const BudgetCard = ({
  budgetName,
  budgetLimit,
  currentProgress,
}: BudgetCardProps) => {
  const [showMore, setshowMore] = useState(false)
  const [showEntryContextualMenu, setShowEntryContextualMenu] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState<number>()
  const [contextualMenuPos, setContextualMenuPos] = useState({ x: 0, y: 0 })

  const contextualMenuRef = useRef<HTMLDivElement>(null)

  const budgetEntries: BudgetEntry[] = [
    { id: 1, description: "Almoço 06/08", value: 123.34 },
    { id: 2, description: "Mercado 17/12", value: 800.34 },
  ]

  const handleOutsideClick = (_event: Event) => {
    setShowEntryContextualMenu(false)
  }

  useOutsideClick<HTMLDivElement>(contextualMenuRef, handleOutsideClick)

  const handleEntryRightClick = (
    event: MouseEvent<HTMLTableRowElement>,
    entryId: number
  ) => {
    event.preventDefault()
    setContextualMenuPos({ x: event.clientX, y: event.clientY })
    setShowEntryContextualMenu(!showEntryContextualMenu)
    setSelectedEntry(entryId)
  }

  const EntryContextualMenu = () => {
    const handleMenuItemClick = (action: string) => {
      setShowEntryContextualMenu(false)
      if (action === "edit") {
      }
      if (action === "delete") {
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

  const ExpensesTable = ({ entries }: TableProps) => (
    <Table>
      <tbody>
        {entries.map((entry) => (
          <tr
            onContextMenu={(event) => handleEntryRightClick(event, entry.id)}
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
          ariaLabel={`${showMore ? "collapse" : "expand"} content`}
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
            <ClearAllButton
              appearance={ButtonAppearance.Secondary}
              onClick={() => {}}
            >
              Clear All
            </ClearAllButton>
            <AddExpanseButton
              appearance={ButtonAppearance.Secondary}
              onClick={() => {}}
              ariaLabel='add entry'
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

import { createMachine } from "@zag-js/core"
import { useMachine } from "@zag-js/react"

const toggleMachine = createMachine({
  // initial state
  id: "toggle",
  initial: "active",
  // the finite states
  states: {
    active: {
      on: {
        CLICK: {
          // go to inactive
          target: "inactive",
        },
      },
    },
    inactive: {
      on: {
        CLICK: {
          // go to active
          target: "active",
        },
      },
    },
  },
})

function connect(state: any, send: any) {
  const active = state.matches("active")
  return {
    active,
    buttonProps: {
      type: "button",
      role: "switch",
      "aria-checked": active,
      onClick() {
        send("CLICK")
      },
    },
  }
}

function Toggle() {
  const [state, send] = useMachine(toggleMachine)
  const api = connect(state, send)

  return (
    // @ts-ignore
    <button
      {...api.buttonProps}
      style={{
        width: "40px",
        height: "24px",
        borderRadius: "999px",
        background: api.active ? "green" : "gray",
      }}
    >
      {api.active ? "ON" : "OFF"}
    </button>
  )
}

export default Toggle
# ghostwheel

Features:

## Primitives

### What are primitives?

A primitive is a unique piece of rendered behavior. These can have state and can render components. The goal here is a set of components that pivot off of a single behavior or orchestration of behaviors. Like a `behaviorSubject`, but it extends to component behaviors and not just states.

### What is Rendered behavior?

A rendered behavior is the synthesis of a component render and an optional state. For example, both Button and Form are primitives but one has no state at all beyond its inputs and the Form has state and describes a complex behavior

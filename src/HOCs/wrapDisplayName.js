function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component"
}

export function wrapDisplayName(WrappedComponent, EnhancedComponent) {
  EnhancedComponent.displayName = `${getDisplayName(
    EnhancedComponent
  )}(${getDisplayName(WrappedComponent)})`

  return EnhancedComponent
}

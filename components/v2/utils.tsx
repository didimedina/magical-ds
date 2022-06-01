
// Factory function that produces headless components with the right HTML data-* attribute
function buildComponentWithDataType(dataType: string, elementTag: string){ 
    const Tag = elementTag
    const Comp = (props: any) => <Tag {...{[`data-magical-${dataType.toLowerCase()}`]: "", ...props}} />;        
    Comp.displayName = `${dataType}`;
    return Comp;
}

export { buildComponentWithDataType }
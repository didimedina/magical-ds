import { styled, theme } from '../../stitches.config';

type ComponentDataTypes = "Root" | "Item"

function buildComponentWithDataType(dataType: ComponentDataTypes, elementTag: string){ 
    const Tag = elementTag
    const Comp = (props: any) => <Tag {...{[`data-magical-stack-${dataType.toLowerCase()}`]: "", ...props}} />;        
    Comp.displayName = `${dataType}`;
    return Comp;
}

const BaseRoot = buildComponentWithDataType("Root", "div")
const BaseItem = buildComponentWithDataType("Root", "div")

const StyledRoot = styled(BaseRoot,{
    // Why Grid isn't suitable for this situation:
    // grid isn't the right tool if you want to set fr on the child,
    // since grid assumes multiple axis grid ie 3x3 you can only tell
    // the child how many columns or rows to span. to emulate the fr's on children
    // effect you can set the parent to gri/rowAutoFlow and on the child if
    // span 2 then it will automatically create 2 rows or columns each with 1fr
    // making span 2 offer the same result as 2fr set on child. However,
    // the span value needs to be set to the child on either gridRow or gridColumn
    // and if you set span 2 to gridRow and the parent is set to column you get and extra culomn
    // you don't expect and theres no way to prevent this. This is inherit to CSS grid because
    // it assumes 2 axis spanning.  
    display: "flex",
    alignItems: "stretch",
    variants: {
        direction: {
            vertical: {
                // gridAutoFlow: "row",
                // gridAutoRows: "1fr",
                flexDirection: "column"
            },
            horizontal: {
                // gridAutoFlow: "column",
                // gridAutoColumns: "1fr",
                flexDirection: "row"
            },
        },
        width: {
            fill: { width: "100%" },
            screen: { width: "100vw" },
            auto: { width: "auto" }
        },
        height: {
            fill: { height: "100%" },
            screen: { height: "100vh" },
            auto: { height: "auto" }
        },
        
        // this needs set the childrens position within the flex container
        position: {
            start: { width: "100%" },
            screen: { width: "100vw" },
            auto: { width: "auto" }
        },
        // once you get it working split X and Y into seperate props
    },
    defaultVariants: {
        direction: "vertical",
        width: "fill",
        height: "fill",
    }
})

const StyledItem = styled(BaseItem,{
    variants: {
        width: {
            ['1fr']: { flexBasis: "100%",},
            ['2fr']: { flexBasis: "200%",},
            ['3fr']: { flexBasis: "300%",},
            ['4fr']: { flexBasis: "400%"  },
            ['5fr']: { flexBasis: "500%"  },
            ['6fr']: { flexBasis: "600%"  },
            ['small']: { minWidth: "250px" }, // sizes would be different for width and height, how would you handle this?
        },
        position: {
            center: { alignSelf: "center" }, // when centering with no children, it seems invisible since theres no height.
            start: { alignSelf: "flex-start" },
        }
    },
    defaultVariants: {
        width: "1fr",
        // positionChild: "start"
    }

})

const Root = StyledRoot
const Item = StyledItem

export { Root, Item }
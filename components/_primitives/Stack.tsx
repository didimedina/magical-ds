import { styled, theme } from '../../stitches.config';

type ComponentDataTypes = "Root" | "Item"

function buildComponentWithDataType(dataType: ComponentDataTypes, elementTag: string){ 
    const Tag = elementTag
    const Comp = (props: any) => <Tag {...{[`data-magical-stack-${dataType.toLowerCase()}`]: "", ...props}} />;        
    Comp.displayName = `${dataType}`;
    return Comp;
}

const BaseRoot = buildComponentWithDataType("Root", "div")
const BaseItem = buildComponentWithDataType("Item", "div")

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

    
    variants: {
        axis: {
            vertical: {
                flexDirection: "column",
            },
            horizontal: {
                flexDirection: "row",
            },
        },
        width: {
            fill: { width: "100%" },
            screen: { width: "100vw" },
            auto: { width: "auto" },
            fit: {width: "fit-content" }
        },
        height: {
            fill: { height: "100%" },
            screen: { height: "100vh" },
            auto: { height: "auto" },
            fit: { height: "fit-content" }
        },
        
        positionAcross: {
            start: { alignItems: "flex-start" },
            center: { alignItems: "center" },
            end: { alignItems: "flex-end" },
        },
        positionAlong: {
            start: { justifyContent: "flex-start" },
            center: { justifyContent: "center" },
            end: { justifyContent: "flex-end" },
        },
    },
    defaultVariants: {
        axis: "vertical",
        width: "auto",
        height: "auto",
        positionAcross: "start",
        positionAlong: "start",
    }
})

const StyledItem = styled(BaseItem,{

    variants: {
        width: {
            ['1fr']: { flexBasis: "100%",}, 
            // width 100% doesnt have the same effect as fr.
            // if width is set to ie 200% then it creates a horizontal scroll.
            // flexBasis works as expected with percentages and never allows the 
            // items to span past the parent width. However flexBasis seems
            // to only be applied once per child and not indevidually for height 
            // and width seperetly. this in turn makes it implossible to express
            // share the available hieght but have an explicit width. for some reason
            // that is still unknown, setting an explicit hieght or width while flex basis
            // is in use does have an effect, but not the expected one. 200px generated 63.9px hieght
            ['2fr']: { flaxBasis: "200%", },
            ['3fr']: { flexBasis: "300%",},
            ['4fr']: { flexBasis: "400%" },
            ['5fr']: { flexBasis: "500%" },
            ['6fr']: { flexBasis: "600%" },
            fit:     { width: "fit-content" },
            ['200px']: { width: "200px" },
            // support aspectRatio? 

        },
        height: {
            ['1fr']: { flexBasis: "100%",},
            ['2fr']: { flexBasis: "200%",},
            ['3fr']: { flexBasis: "300%",},
            ['4fr']: { flexBasis: "400%" },
            ['5fr']: { flexBasis: "500%" },
            ['6fr']: { flexBasis: "600%" },
            fit:     { height: "fit-content" },
            ['200px']: { height: "200px" },

        },

    },
    defaultVariants: {
        width: "1fr",
        height: "1fr",
    //     // positionChild: "start"
    }

})

const Root = StyledRoot
const Item = StyledItem

export { Root, Item }
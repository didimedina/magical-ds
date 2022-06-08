import { motion, MotionConfigProps, MotionProps } from 'framer-motion'
import { MakeMotion } from 'framer-motion/types/motion/types';
import { forwardRef } from 'react';
// Factory function that produces headless components with the right HTML data-* attribute

// this for some reason 
function buildComponentWithDataType(dataType: string, elementTag: string){ 
    // const Tag = `motion.${elementTag}`
    const Tag = elementTag
    const Comp = forwardRef((props: any, ref) => (<Tag ref={ref} {...{[`data-magical-${dataType.toLowerCase()}`]: "", ...props}} />));        
    Comp.displayName = `${dataType}`;
    const MotionComp = motion(Comp)

    return MotionComp;
}

// this is causing some shit to blow up
function buildCompWithMotion(dataType: string){ 
    const Comp = forwardRef((props: any, ref) => (<motion.div ref={ref} {...{[`data-magical-${dataType.toLowerCase()}`]: "", ...props}} />));        
    Comp.displayName = `${dataType}`;

    return Comp;
}

export { buildComponentWithDataType, buildCompWithMotion }


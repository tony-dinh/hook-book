import { useCallback, useEffect, useState } from "react";
import { bulkAddEventListener, bulkRemoveEventListener } from "../utils";

const HOVER_START_EVENTS = ["mouseenter"];
const HOVER_END_EVENTS = ["mouseleave"];

export default function useHover(ref) {
    const [isHovering, setHovering] = useState(false);
    const onHoverStart = useCallback(() => setHovering(true), []);
    const onHoverEnd = useCallback(() => setHovering(false), []);

    useEffect(() => {
        const currentRef = ref.current;
        // Listen for events indicating that hovering has begun/ended
        bulkAddEventListener(currentRef, HOVER_START_EVENTS, onHoverStart);
        bulkAddEventListener(currentRef, HOVER_END_EVENTS, onHoverEnd);
        return () => {
        bulkRemoveEventListener(currentRef, HOVER_START_EVENTS, onHoverStart);
        bulkRemoveEventListener(currentRef, HOVER_END_EVENTS, onHoverEnd);
        };
    }, [ref, onHoverStart, onHoverEnd]);

    return isHovering;
}

import { isEqual as isEqualValue } from '@xy-form/ui-schema/Utils/isEqual'

export const isEqualObject = (a: Object, b: Object): boolean => {
    const prevKeys = Object.keys(a)
    const nextKeys = Object.keys(b)
    if(
        prevKeys.length !== nextKeys.length ||
        !prevKeys.every(v => nextKeys.includes(v))
    ) {
        return false
    }

    for(const next in b) {
        if(!isEqualValue(a[next], b[next])) {
            return false
        }
    }

    return true
}

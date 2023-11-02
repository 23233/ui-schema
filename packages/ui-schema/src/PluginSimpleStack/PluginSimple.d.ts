import { PluginProps } from '@xy-form/ui-schema/PluginStack/Plugin'
import { WithValue } from '@xy-form/ui-schema/UIStore'

export interface PluginSimple {
    handle: (props: Partial<PluginProps & WithValue>) => Partial<PluginProps & WithValue>
    noHandle?: (props: Partial<PluginProps & WithValue>) => Partial<PluginProps & WithValue>
    should?: (props: Partial<PluginProps & WithValue>) => boolean
}

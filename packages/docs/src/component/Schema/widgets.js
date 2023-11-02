import React from 'react';
import {Step, Stepper} from '@xy-form/ds-material';
import {widgets} from '@xy-form/ds-material/widgetsBinding';
import Loadable from 'react-loadable';
import {
    Color, ColorDialog,
    ColorSwatches,
    ColorCircle, ColorCompact, ColorMaterial,
    ColorBlock, ColorTwitter, ColorSlider,
    ColorAlpha, ColorHue, ColorSketch,
    ColorSliderStatic, ColorStatic,
    ColorCircleStatic, ColorTwitterStatic,
    ColorSketchStatic, ColorSketchDialog,
} from '@xy-form/material-color';
import {memo} from '@xy-form/ui-schema/Utils/memo';
import {extractValue} from '@xy-form/ui-schema/UIStore';
import {LoadingCircular} from '@control-ui/kit/Loading/LoadingCircular';
import {NumberRendererCell, StringRendererCell, TextRendererCell} from '@xy-form/ds-material/Widgets/TextFieldCell';
import {Table} from '@xy-form/ds-material/Widgets/Table';
import {DragDropBlockSelector} from '@xy-form/material-dnd/DragDropBlockSelector';
import {SelectChips} from '@xy-form/ds-material/Widgets/SelectChips';
import {WidgetColorful} from '@xy-form/material-colorful'
import {
    HexColorPicker,
    HslaColorPicker,
    RgbaColorPicker,
    RgbaStringColorPicker,
} from 'react-colorful'
import {emailValidator} from '@xy-form/ui-schema';

const ColorfulHex = (props) => <WidgetColorful ColorfulPicker={HexColorPicker} {...props}/>
const ColorfulHslaBase = (props) => <WidgetColorful ColorfulPicker={HslaColorPicker} {...props}/>
const ColorfulHsla = extractValue(memo(ColorfulHslaBase))
const ColorfulRgbaBase =
    (props) =>
        <WidgetColorful
            // todo: find a way to safely type the inner `ColorfulPicker`, as this is not incorrect per-se,
            //       as the widget handles string vs. object on change / rendering
            // @ts-ignore
            ColorfulPicker={props.schema.get('type') === 'string' ? RgbaStringColorPicker : RgbaColorPicker}
            {...props}
        />
const ColorfulRgba = extractValue(memo(ColorfulRgbaBase))

const customWidgets = {
    ...widgets,
    pluginSimpleStack: [
        ...widgets.pluginSimpleStack,
        emailValidator,
    ],
};

const CustomTable = ({widgets, ...props}) => {

    // dynamic overwrite for all widgets, which need a special TableCell formatting
    // you can also only enable specific widgets here
    const customWidgets = React.useMemo(() => ({
        ...widgets,
        types: {
            ...widgets.types,
            string: StringRendererCell,
            number: NumberRendererCell,
            integer: NumberRendererCell,
        },
        custom: {
            ...widgets.custom,
            Text: TextRendererCell,
        },
    }), [widgets])

    return <Table
        {...props}
        widgets={customWidgets}
    />
}

customWidgets.DndBlockSelector = DragDropBlockSelector

customWidgets.custom = {
    ...widgets.custom,
    SelectChips: SelectChips,
    Stepper: Stepper,
    Step: Step,
    Table: CustomTable,
    Color,
    ColorDialog,
    ColorStatic,
    ColorSwatches,
    ColorCircle,
    ColorCompact,
    ColorMaterial,
    ColorTwitter,
    ColorBlock,
    ColorSlider,
    ColorAlpha,
    ColorHue,
    ColorSketch,
    ColorSliderStatic,
    ColorCircleStatic,
    ColorTwitterStatic,
    ColorSketchStatic,
    ColorSketchDialog,
    Colorful: ColorfulHex,
    ColorfulHsla: ColorfulHsla,
    ColorfulRgba: ColorfulRgba,
    Code: Loadable({
        loader: () => import('../CustomCodeWidgets').then(r => r.CustomWidgetCode),
        loading: () => <LoadingCircular title={'Loading Code Widget'}/>,
    }),
    CodeSelectable: Loadable({
        loader: () => import('../CustomCodeWidgets').then(r => r.CustomWidgetCodeSelectable),
        loading: () => <LoadingCircular title={'Loading Code Widget'}/>,
    }),
    /*DateTime: Loadable({
        loader: () => import('@xy-form/material-pickers').then(r => r.DateTimePicker),
        loading: () => <LoadingCircular title={'Loading DateTime Widget'}/>,
    }),
    Date: Loadable({
        loader: () => import('@xy-form/material-pickers').then(r => r.DatePicker),
        loading: () => <LoadingCircular title={'Loading Date Widget'}/>,
    }),
    Time: Loadable({
        loader: () => import('@xy-form/material-pickers').then(r => r.TimePicker),
        loading: () => <LoadingCircular title={'Loading Time Widget'}/>,
    }),*/
    EditorJS: Loadable({
        loader: () => import('./EditorJSComp').then(r => r.EditorJSComp),
        loading: () => <LoadingCircular title={'Loading EditorJS'}/>,
    }),
    SortableList: Loadable({
        loader: () => import('@xy-form/material-dnd/Widgets/SortableList').then(r => r.SortableList),
        loading: () => <LoadingCircular title={'Loading drag \'n drop'}/>,
    }),
    DragDropArea: Loadable({
        loader: () => import('@xy-form/material-dnd/Widgets/DragDropArea').then(r => r.DragDropArea),
        loading: () => <LoadingCircular title={'Loading drag \'n drop'}/>,
    }),
    DropArea: Loadable({
        loader: () => import('@xy-form/material-dnd/Widgets/DropArea').then(r => r.DropArea),
        loading: () => <LoadingCircular title={'Loading drag \'n drop'}/>,
    }),
};

export {customWidgets}

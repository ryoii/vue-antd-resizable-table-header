import { h } from "vue";
import vueDraggableResizable from "./drag/VueDraggableResizable.vue";

export default class VueAntdResizableTableHeader {

  constructor(columns) {
    this.columns = columns;
    this.originWidth = {}
    columns.value.forEach((col) => {
      this.originWidth[col.key] = col.width;
    });
  }

  cell = () => (props, children) => {
    const { key, ...restProps} = props;
    const col = this.columns.value.find(c => c.key === key || c.dataIndex === key);
    if(!col || !col.width) {
      return h('th', {...restProps}, [...children]);
    }

    const onDrag = (x) => {
      const originWidth = this.originWidth[key]
      col.width = Math.max(11, originWidth + x)
    };

    const dragProps = {
      key: col.key,
      class: "table-column-resize-handle",
      w: 10,
      x: 0,
      z: 1,
      axis: "x",
      draggable: true,
      resizable: false,
      style: {
        height: "100% !important",
        bottom: "0",
        left: "auto !important",
        right: "-5px",
        cursor: "col-resize",
        touchAction: "none",
        position: "absolute"
      },
      onDrag: onDrag,
      onclick: (e)=>e.stopPropagation(),
    }

    // if fixed column
    if(restProps.style.position) {
      restProps.style.zIndex = '1';
    } else {
      restProps.style.position = 'relative';
    }

    const dragHandle = h(vueDraggableResizable, {...dragProps});
    return h('th', {...restProps, class:'resize-table-th'}, [...children, dragHandle]);
  }
}

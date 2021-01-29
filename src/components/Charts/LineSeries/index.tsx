import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  Hint,
  LineSeries,
  HorizontalGridLines,
  HintProps,
  LineMarkSeriesPoint,
  LineSeriesPoint,
} from "react-vis";

type LineSeriesChartProps = {
  color: string;
  data: Array<LineSeriesPoint>;
};

export const LineSeriesChart = ({ data, color }: LineSeriesChartProps) => {
  const [value, setValue] = useState<LineMarkSeriesPoint>();
  const [mouseOverChart, setMouseOver] = useState(false);

  const ValueHint = (props: HintProps) => {
    return (
      <Hint value={value} {...props}>
        <div className="bg-gray-800 rounded text-white p-2">
          <h3 className="text-lg font-semibold">{value!.x} balance</h3>
          <p className="text-lg">R$ {value!.y.toLocaleString("en-US")}</p>
        </div>
      </Hint>
    );
  };

  return (
    <XYPlot
      height={350}
      width={500}
      xType="ordinal"
      color={color}
      margin={{ left: 50 }}
      onMouseMove={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <XAxis attr="x" attrAxis="y" orientation="bottom" />
      <YAxis
        attr="y"
        attrAxis="x"
        orientation="left"
        tickFormat={(tick) =>
          Intl.NumberFormat("en", {
            notation: "compact",
            compactDisplay: "short",
          }).format(tick)
        }
      />
      <HorizontalGridLines />
      {value && mouseOverChart ? <ValueHint /> : null}
      <LineSeries
        data={data}
        onNearestX={setValue}
        style={{ strokeWidth: 6, stroke: color }}
      />
    </XYPlot>
  );
};

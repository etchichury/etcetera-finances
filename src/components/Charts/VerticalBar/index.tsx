import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  Hint,
  VerticalBarSeries,
  HorizontalGridLines,
  VerticalBarSeriesPoint,
  HintProps,
  FlexibleXYPlot,
} from "react-vis";
import "react-vis/dist/style.css";

type VerticalBarChartProps = {
  color: string;
  data: Array<VerticalBarSeriesPoint>;
};

export const VerticalBarChart = ({ data, color }: VerticalBarChartProps) => {
  const [value, setValue] = useState<VerticalBarSeriesPoint>();
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
    <FlexibleXYPlot
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
      <VerticalBarSeries data={data} barWidth={0.5} onNearestX={setValue} />
    </FlexibleXYPlot>
  );
};

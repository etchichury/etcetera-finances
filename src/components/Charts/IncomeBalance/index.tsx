import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  Hint,
  VerticalBarSeries,
  HorizontalGridLines,
  VerticalBarSeriesPoint,
  HintProps,
} from "react-vis";
import "react-vis/dist/style.css";

const data = [
  { x: "Jan", y: 200 },
  { x: "Feb", y: 234.62 },
  { x: "Mar", y: 498.23 },
  { x: "Apr", y: 1223.3 },
  { x: "May", y: 2002.84 },
  { x: "Jun", y: 3455.07 },
];

export const IncomeBalanceChart = () => {
  const [value, setValue] = useState<VerticalBarSeriesPoint>();
  const [mouseOverChart, setMouseOver] = useState(false);

  const ValueHint = (props: HintProps) => {
    return (
      <Hint value={value} {...props}>
        <div className="bg-gray-400 rounded bg-opacity-60 text-black-900 p-2">
          <h3 className="text-lg font-semibold">{value!.x} balance</h3>
          <p className="text-lg">R$ {value!.y.toLocaleString("en-US")}</p>
        </div>
      </Hint>
    );
  };

  return (
    <XYPlot
      height={300}
      width={450}
      xType="ordinal"
      color="#14D2ED"
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
    </XYPlot>
  );
};
